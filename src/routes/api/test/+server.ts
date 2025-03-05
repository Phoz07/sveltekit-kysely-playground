import { json } from "@sveltejs/kit";
import { DATABASE_URL } from "$env/static/private";

export function GET() {
  return json({
    message: DATABASE_URL,
  });
}
