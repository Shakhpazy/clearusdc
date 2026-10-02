import { createBrowserClient } from "@supabase/ssr";

/**
 * Use this client from Client Components only.
 * It is safe to use the project's publishable key here; never put a
 * service-role key in a NEXT_PUBLIC_ variable.
 */
function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}

export const supabase = createClient();