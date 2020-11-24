import React, { useState } from "react";
import Header from "../components/headers";

const List = ({ items, ...props }) => {
  const [filteredItems, setFilteredItems] = useState(items);

  const filterItems = (e) => {
    const searchValue = e.target.value;
    const currentItems = [...items];
    const matchingItems = currentItems.filter((item) =>
      item.startsWith(searchValue),
    );

    setFilteredItems(matchingItems);
  };

  return (
    <>
      <input onChange={filterItems} />
      <ul {...props}>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

function ListContainer() {
  return (
    <>
      <Header />
      <hr />
      <List
        aria-label="My Fanct List"
        items={["Learn React.js", "Learn Next.js", "조아!", "중만 조아!"]}
      />
      <hr />
    </>
  );
}
export default ListContainer;
