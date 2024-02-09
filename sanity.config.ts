import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
import schemas from "./sanity/schemas"
const config = defineConfig({
  projectId: "lp8gcbb6",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2024-02-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema:{types:  schemas}
});

export default config;
