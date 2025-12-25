function Flashmessage({ message }) {
  return (
    <div className="row col-6 offset-3 alert alert-success error-message">
      {message}
    </div>
  );
}

export default Flashmessage;
