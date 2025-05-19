import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // 1. Point to your running schema
  schema: "http://localhost:4000",

  // 2. Scan all TSX files for operations
  documents: ["src/**/*.tsx"],

  // 3. Emit React–friendly generated code here
  generates: {
    "./src/__generated__/": {
      preset: "client",            // use the client preset
      presetConfig: {
        gqlTagName: "gql"         // name the tagged template fn “gql”
      }
    },
    "./src/__generated__/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations"
      ]
    }
  },

  // allow empty documents on first run
  ignoreNoDocuments: true
};

export default config;
