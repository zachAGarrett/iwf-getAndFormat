import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // schema: `http://very.coffee:4000/graphql`,
  schema: `http://localhost:4100/`,
  documents: "src/lib/**/*.ts",
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  emitLegacyCommonJSImports: false,
  ignoreNoDocuments: false,
};

export default config;
