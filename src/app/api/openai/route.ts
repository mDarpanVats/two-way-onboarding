import {
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables";

import { ChatOpenAI } from "@langchain/openai";
import { NextResponse } from "next/server";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { combineDocuments } from "@/app/utils/combine-documents";
import { retriever } from "@/app/utils/retreiver";

const openaiApiKey = process.env.OPENAI_API_KEY;

// Initialize OpenAI Embeddings and Chat Model
const llm = new ChatOpenAI({
  openAIApiKey: openaiApiKey,
  temperature: 0.3,
  model: "gpt-3.5-turbo-0125",
});

const standaloneQuestionTemplate =
  "Given a Question, convert it to a standalone question. Question: {question}";

const standaloneQuestionPrompt = PromptTemplate.fromTemplate(
  standaloneQuestionTemplate
);

const answerTemplate = `
  You are a helpful assistant. Use the following pieces of context to answer the question at the end.
  If you don't know the answer, just say that you don't know, don't try to make up an answer. 
  If you do not have enough information, ask to contact support@ABC_Company.com
  Context: {context}
  Question: {question}
  answer:
`;

const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);

const standaloneQuestionChain = standaloneQuestionPrompt
  .pipe(llm)
  .pipe(new StringOutputParser());

const retreiverChain = RunnableSequence.from([
  (prevResult) => prevResult.standalone_question,
  retriever,
  combineDocuments,
]);

const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

const chain = RunnableSequence.from([
  {
    standalone_question: standaloneQuestionChain,
    original_input: new RunnablePassthrough(),
  },
  {
    context: retreiverChain,
    question: ({ original_input }) => original_input.question,
  },
  answerChain,
]);

export async function GET() {
  const openaiApiKey = process.env.OPENAI_API_KEY;

  if (!openaiApiKey) {
    return NextResponse.json(
      { error: "OpenAI API key not configured." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "OpenAI API key accessed successfully!",
    apiKey: openaiApiKey ? "*****" + openaiApiKey.slice(-4) : "not set",
  });
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string" || message.length < 3) {
      return NextResponse.json(
        { error: "Please provide more details of the question." },
        { status: 400 }
      );
    }

    const response = await chain.invoke({ question: message });
    // const response = "" + message + " is a valid question.";
    console.info("Response from OpenAI API:", response);

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error processing OpenAI API request:", error);
    return NextResponse.json(
      { error: "Service temporary unavailable." },
      { status: 500 }
    );
  }
}
