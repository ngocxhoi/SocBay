import { serve } from "inngest/nuxt";
import { inngest, functions } from "~~/app/lib/inngest";

// Create an API that serves zero functions
export default serve({
  client: inngest,
  functions,
});
