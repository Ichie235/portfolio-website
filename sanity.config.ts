import { defineConfig } from "sanity";
// import { deskTool } from "sanity/desk";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "lp8gcbb6",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2024-02-09",
  basePath: "/admin",
  useCdn: "false",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
