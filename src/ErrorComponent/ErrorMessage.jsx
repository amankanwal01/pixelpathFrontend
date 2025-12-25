function ErrorMessage({ message }) {
  return (
    <div className="row col-6 offset-3 alert alert-danger error-message">
      {message}
    </div>
  );
}

export default ErrorMessage;
