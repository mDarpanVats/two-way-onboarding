import * as fs from "fs/promises";
import * as path from "path";

import { OpenAIEmbeddings } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";

config({ path: ".env.local" });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const openaiApiKey = process.env.OPENAI_API_KEY;

async function injectOnboardingData() {
  try {
    const filePath = path.join(process.cwd(), "text-data/onboarding-info.txt");
    const rawText = await fs.readFile(filePath, "utf-8");

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 100,
    });

    const documents = await splitter.createDocuments([rawText]);

    if (!supabaseUrl || !supabaseAnonKey || !openaiApiKey) {
      console.error(
        "Missing one or more required environment variables: SUPABASE_URL, SUPABASE_ANON_KEY, OPENAI_API_KEY"
      );
      process.exit(1);
    }

    const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

    await SupabaseVectorStore.fromDocuments(
      documents,
      new OpenAIEmbeddings({ apiKey: openaiApiKey }),
      {
        client: supabaseClient,
        tableName: "documents",
      }
    );

    console.info("Injected onboarding data into Supabase vector store.");
  } catch (error) {
    console.error("Failed to inject onboarding data:", error);
    process.exit(1);
  }
}

injectOnboardingData();
