import React from "react";
import { requireAuth } from "../../lib/session"

async function Events() {
  const session = await requireAuth() as { name?: string; email?: string }
  console.log(session);

  return <div>Events Pages</div>;
}

export default Events;
