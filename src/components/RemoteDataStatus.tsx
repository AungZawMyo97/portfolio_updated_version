type RemoteDataStatusProps = {
  isLoading: boolean;
  errorMessage: string;
  isEmpty: boolean;
  loadingMessage: string;
  emptyMessage: string;
};

const RemoteDataStatus = ({
  isLoading,
  errorMessage,
  isEmpty,
  loadingMessage,
  emptyMessage,
}: RemoteDataStatusProps) => {
  const message = isLoading ? loadingMessage : errorMessage || emptyMessage;

  return message && (isLoading || errorMessage || isEmpty) ? (
    <p className="text-center text-pubg-text opacity-80">{message}</p>
  ) : null;
};

export default RemoteDataStatus;
