import { OpenAIEmbeddings } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";
import * as fs from "fs/promises"; // Use fs/promises for async operations
import * as path from "path"; // Import path module

config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const openaiApiKey = process.env.OPENAI_API_KEY;

if (!supabaseUrl || !supabaseAnonKey || !openaiApiKey) {
  console.error("Missing environment variables for Supabase or OpenAI.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const embeddings = new OpenAIEmbeddings({ apiKey: openaiApiKey });

async function injectDocuments() {
  try {
    const filePath = path.join(process.cwd(), "data/onboarding-info.txt");
    const rawText = await fs.readFile(filePath, "utf-8");

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
    const docs = await splitter.createDocuments([rawText]);

    await SupabaseVectorStore.fromDocuments(docs, embeddings, {
      client: supabase,
      tableName: "documents",
      // queryName: "match_documents", // Removed: This option is not for fromDocuments
    });
    console.log("Documents injected successfully!");
  } catch (error) {
    console.error("Error injecting documents:", error);
  }
}

injectDocuments();
