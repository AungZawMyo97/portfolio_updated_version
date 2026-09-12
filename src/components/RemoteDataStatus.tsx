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
    <p className="data-status" role="status">
      {message}
    </p>
  ) : null;
};

export default RemoteDataStatus;
