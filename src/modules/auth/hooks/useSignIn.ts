import type { User } from "@/modules/user/types";
import { z } from "zod";
import { signInService } from "../services";
import type { signInSchema } from "../validators";

type UseSignInProps = {
  onSuccess?: (user: User | null) => void;
  onError?: (error: string) => void;
};

export function useSignIn({ onSuccess, onError }: UseSignInProps = {}) {
  const signIn = async (data: z.infer<typeof signInSchema>) => {
    const response = await signInService(data);
    console.log("response", response);

    if (response.error) {
      return onError?.(response.error);
    }

    return onSuccess?.(response.data as User | null);
  };

  return {
    signIn,
  };
}
