interface ErrorAlertProps {
  errors: string[];
}

const ErrorAlert = ({ errors }: ErrorAlertProps) => {
  if (errors.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg">
      <div className="bg-danger text-white px-6 py-4 rounded-lg shadow-lg text-center">
        {errors.map((error, index) => (
          <p key={index} className="font-medium">
            {error}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ErrorAlert;
