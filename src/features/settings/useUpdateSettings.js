import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import { toast } from "react-toastify";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const {
    isPending: isUpdating,
    mutate: updateSetting,
    error,
  } = useMutation({
    mutationFn: updateSettingApi,

    onSuccess: () => {
      toast.success("Setting sucessfully edited");

      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting, error };
}
