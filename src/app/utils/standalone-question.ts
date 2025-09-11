import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

const llm = new ChatOpenAI({ openAIApiKey: process.env.OPENAI_API_KEY });

const standaloneQuestionTemplate =
  "Given a Question, convert it to a standalone question. Question: {question}";

const standaloneQuestionPrompt = PromptTemplate.fromTemplate(
  standaloneQuestionTemplate
);

const standaloneQuestionChain = standaloneQuestionPrompt.pipe(llm);

export async function getStandaloneQuestion(question: string) {
  const response = await standaloneQuestionChain.invoke({
    question,
  });

  return response;
}
