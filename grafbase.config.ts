import { graph, config } from "@grafbase/sdk";

// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

const g = graph.Standalone();

const user = g.type("User", {
  user_name: g.string().length({ min: 2, max: 20 }),
});

export default config({
  graph: g,
});
