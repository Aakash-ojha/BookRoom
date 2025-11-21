import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { upsertCabin } from "../../services/apiCabins";

// To edit cabin
function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isPending: isEditingCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => upsertCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin Sucesfully edited");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editCabin, isEditingCabin };
}
export default useEditCabin;
