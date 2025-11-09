import type { User } from "@/modules/user/types";
import { z } from "zod";
import { signUpService } from "../services";
import type { signUpSchema } from "../validators";

type UseSignUpProps = {
  onSuccess?: (user: User | null) => void;
  onError?: (error: string) => void;
};

export function useSignUp({ onSuccess, onError }: UseSignUpProps = {}) {
  const signUp = async (data: z.infer<typeof signUpSchema>) => {
    const response = await signUpService(data);
    console.log("response", response);

    if (response.error) {
      return onError?.(response.error);
    }

    return onSuccess?.(response.data as User | null);
  };

  return {
    signUp,
  };
}
