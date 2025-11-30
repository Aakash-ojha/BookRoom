import { useQuery } from "@tanstack/react-query";
import { getSetting } from "../../services/apiSettings";

export function useSetting() {
  const {
    isPending,
    data: setting,
    error,
  } = useQuery({ queryKey: ["settings"], queryFn: getSetting });

  return { isPending, setting, error };
}
