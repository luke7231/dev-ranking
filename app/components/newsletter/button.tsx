"use client";

import { addEmail } from "@/app/lib/action";
import { useFormState } from "react-dom";

const NewsLetterSubmit = () => {
  const initialState = {
    ok: false,
    message: "",
  };
  const [state, formAction] = useFormState(addEmail, initialState);
  return (
    <div>
      <form action={formAction}>
        <input
          id="email"
          name="email"
          type="email"
          className="p-3 px-5 rounded-lg mr-4 "
          placeholder="이메일"
        />
        <button
          type="submit"
          className="p-3 bg-gray-900 text-[#fff] rounded-lg mt-2 sm:mt-0"
        >
          submit
        </button>
        {!state.ok && state.message && (
          <div className="text-red-500 p-4">{state.message}</div>
        )}
        {state.ok && state.message && (
          <div className="text-green-700 p-4">{state.message}</div>
        )}
      </form>
    </div>
  );
};

export default NewsLetterSubmit;
