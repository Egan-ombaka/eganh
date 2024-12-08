import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let items = ["Nairobi", "Tokyo", "Los Angeles", "Paris", "London"];
  items = [];

  return (
    <Fragment>
      <h1>List</h1>
      { items.length === 0 ? <p>No items found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
