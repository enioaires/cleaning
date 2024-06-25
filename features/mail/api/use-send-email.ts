import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.mail.$post>;
type RequestType = InferRequestType<typeof client.api.mail.$post>["json"];

export const useSendEmail = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.mail.$post({ json });

      return await response.json();
    },
    onSuccess: () => {
      toast.success("Email enviado com sucesso");
      queryClient.invalidateQueries({ queryKey: ["mail"] });
    },
    onError: (err) => {
      console.log(err);
      toast.error("Erro ao enviar email");
    },
  });

  return mutation;
};
