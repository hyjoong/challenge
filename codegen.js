const { loadEnvConfig } = require("@next/env");
loadEnvConfig(process.cwd());

module.exports = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_URI,

  documents: "**/*.graphql",
  generates: {
    "lib/graphql/queries/schema.d.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};
