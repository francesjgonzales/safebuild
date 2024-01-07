import { graph, config } from "@grafbase/sdk";

// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

const g = graph.Standalone();

g.query("hello", {
  args: { name: g.string().optional() },
  returns: g.string(),
  resolver: "hello",
});

export default config({
  graph: g,
});
