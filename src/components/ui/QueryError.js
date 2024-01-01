function QueryError({ error }) {
  return (
    <div>
      <h1>there is an error</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default QueryError;
