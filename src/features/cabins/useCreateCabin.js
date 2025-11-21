import { useQueryClient, useMutation } from "@tanstack/react-query";

import { upsertCabin } from "../../services/apiCabins";
import { toast } from "react-toastify";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  // To created cabin
  const { mutate: createCabin, isPending: isCreatingCabin } = useMutation({
    mutationFn: (newCabin) => upsertCabin(newCabin),
    onSuccess: () => {
      toast.success("Cabin Sucesfully added");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createCabin, isCreatingCabin };
}
