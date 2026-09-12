import { useEffect, useState } from "react";

type RemoteDataState<T> = {
  data: T;
  isLoading: boolean;
  errorMessage: string;
};

const useRemoteData = <T>(
  endpoint: string,
  initialData: T,
  errorMessage: string,
): RemoteDataState<T> => {
  const [data, setData] = useState<T>(() => initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [resolvedErrorMessage, setResolvedErrorMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadData = async () => {
      setIsLoading(true);
      setResolvedErrorMessage("");
      try {
        const response = await fetch(endpoint, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with ${response.status}`);
        }

        const remoteData = (await response.json()) as T;

        if (!controller.signal.aborted) setData(remoteData);
      } catch (error) {
        if (
          controller.signal.aborted ||
          (error instanceof DOMException && error.name === "AbortError")
        ) {
          return;
        }

        setResolvedErrorMessage(errorMessage);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    loadData();

    return () => {
      controller.abort();
    };
  }, [endpoint, errorMessage]);

  return {
    data,
    isLoading,
    errorMessage: resolvedErrorMessage,
  };
};

export default useRemoteData;
