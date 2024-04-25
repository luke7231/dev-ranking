"use server";

import { sql } from "@vercel/postgres";

export async function addEmail(
  currentState: { ok: boolean; message: string },
  form: FormData
) {
  try {
    const email = form.get("email") as string;
    const existedEmail =
      await sql`SELECT * FROM beta_user WHERE email = ${email}`;
    if (existedEmail.rowCount > 0) {
      return {
        ok: false,
        message: "신청이 완료된 이메일입니다.",
      };
    }

    await sql`INSERT INTO beta_user (email) VALUES (${email})`;
    return {
      ok: true,
      message: "✅ 제출이 완료되었습니다.",
    };
  } catch (error) {
    return { ok: false, message: "hey" };
  }
}
