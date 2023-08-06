function ListGroup() {
  let items = ["NYC", "San Fran", "Tokyo", "Paris", "London"];
  //items = [];

  // const message = items.length === 0 ? <p>NO item found</p> : null;
  // same result as using function below, just put {message} in JSX where we want it
  // const is better if it's actually constant; but func can be good if you need parameters

  const getMessage = () => {
    return items.length === 0 ? <p>NO item found</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found.</p>}
      {/*getMessage() produces same as above line*/}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
