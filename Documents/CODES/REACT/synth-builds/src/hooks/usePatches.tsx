import { useEffect, useState } from "react";
import apiClient from "../services/api.client.ts";

export interface Patch {
  id: string;
  song: string;
  synth: string;
  genre: string;
  producer: string;
}

const usePatches = () => {
  const [patches, setPatches] = useState<Patch[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Patch[]>("/patches")
      .then((response) => setPatches(response.data))
      .catch((err) => setError(err.message));
  }, []);

  return { patches, error };
};

export default usePatches;
