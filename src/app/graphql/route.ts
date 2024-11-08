import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { MeResolver } from "../../apollo/resolvers";
import { buildSchema } from "type-graphql";
import { NextRequest, NextResponse } from "next/server";

const schema = await buildSchema({
  resolvers: [MeResolver],
});
const apolloServer = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
  introspection: true,
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req: NextRequest) => ({ req }),
});

export async function GET(request: NextRequest, context: any) {
  return handler(request);
}

export async function POST(request: NextRequest, context: any) {
  return handler(request);
}
