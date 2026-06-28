import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { product } from "./src/sanity/schemaTypes/product";

export default defineConfig({
  name: "default",
  title: "Cosmetique Store",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "o85ja9mx",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-02-01",
  plugins: [structureTool()],
  schema: {
    types: [product],
  },
});
