import axios from "axios";
import { useEffect, useState } from "react";

type RemoteDataState<T> = {
  data: T;
  isLoading: boolean;
  errorMessage: string;
};

const useRemoteData = <T,>(
  endpoint: string,
  initialData: T,
  errorMessage: string,
): RemoteDataState<T> => {
  const [data, setData] = useState<T>(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [resolvedErrorMessage, setResolvedErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const response = await axios.get<T>(endpoint);

        if (isMounted) {
          setData(response.data);
        }
      } catch {
        if (isMounted) {
          setResolvedErrorMessage(errorMessage);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [endpoint, errorMessage]);

  return {
    data,
    isLoading,
    errorMessage: resolvedErrorMessage,
  };
};

export default useRemoteData;
