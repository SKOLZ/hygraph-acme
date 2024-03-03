# Acme Website - Hygraph's Interview case study

This is a NextJS project that uses hygraph to create all the pages for this website.

## Getting Started

### Dependency installation

This project uses PNPM to handle dependencies. run

```bash
pnpm install
```

to get all dependencies installed.

### Configure the environment

Create a `.env` in the project's root folder with the following keys:

```env
SITE_URL=???
HYGRAPH_BASE_URL=???
HYGRAPH_TOKEN=???
```

make sure you replace the `???` values with the real values for this project.

### Run the dev server

This project uses [Codegen](https://the-guild.dev/graphql/codegen) to automatically handle types in your graphQL queries. When running

```bash
pnpm dev
```

the NextJS server and the Codegen watcher will start executing. The local version will be available in `http://localhost:3000` and whenever you make a change in your graphQL queries Codegen will update the types.

### Updating the types when changing the Hygraph Schema

When making changes in the Hygraph Schema you'll need to rerun the Codegen command to get the updated types from Hygraph. To do so just run:

```bash
pnpm codegen
```

and your types will be automatically updated.
