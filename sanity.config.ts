import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "enr2lm8u",
  dataset: "production",
  title: "Bounceback Uyghur",
  apiVersion: "2024-04-27",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
