import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clt5sxey9003607utkah9r5iy/master",
  require: [],
  documents: "src/services/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        omitOperationSuffix: true,
      },
    },
  },
};

export default config;
