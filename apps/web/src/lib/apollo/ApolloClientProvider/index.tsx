"use client";

import { ApolloProvider } from "@apollo/client";
import { ReactNode, useMemo } from "react";
import { getApolloClient } from "@/src/lib/apollo";

export type ApolloClientProviderProps = {
  children: ReactNode;
};

/**
 * Create apollo client on 'client'
 */
export const ApolloClientProvider = ({
  children,
}: ApolloClientProviderProps) => {
  const client = useMemo(() => getApolloClient(), []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
