// @ts-nocheck
import type { HeadersFunction } from "@remix-run/node";
import { useCallback, useState, useEffect } from "react";

const shouldLoadCosmos =
  typeof window !== "undefined" && process.env.NODE_ENV === "development";

export const headers: HeadersFunction = () => {
  return { "Access-Control-Allow-Origin": "*" };
};

export default function Cosmos() {
  const [cosmosLoaded, setCosmosLoaded] = useState(false);

  const loadRenderer = useCallback(async () => {
    const { mountDomRenderer } = await import("react-cosmos-dom");
    mountDomRenderer(await import("../../cosmos.imports"));
  }, []);

  useEffect(() => {
    if (shouldLoadCosmos && !cosmosLoaded) {
      loadRenderer();
      setCosmosLoaded(true);
    }
  }, []);
  return null;
}
