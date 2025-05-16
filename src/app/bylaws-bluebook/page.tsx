
import React from "react";
import ByLaws from "./byLaws";
import { requireAuth } from "../../lib/session"

export default async function Home() {
  const session = await requireAuth() as { name?: string; email?: string }
  console.log(session);

  return <><ByLaws /></>
}
