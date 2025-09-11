import { Document } from "@langchain/core/documents";

export const combineDocuments = (documents: Document[]): string => {
  return documents.map((doc) => doc.pageContent).join("\n\n");
};
