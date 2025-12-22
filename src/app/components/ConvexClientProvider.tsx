"use client";

import { convex } from "@/lib/convex";
import { ConvexProvider } from "convex/react";

export default function ConvexClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
