import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 2, description: "mobile", quantity: 1, packed: true },
// ];

function App() {
  const [finalItems, setItems] = useState([]);

  function onToggleItems(id) {
    setItems((finalItems) =>
      finalItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList(e) {
    const confirmVal = window.confirm("Are you ready to go to titanic?");

    if (confirmVal) setItems([]);
  }

  function handleItems(item) {
    setItems((finalItems) => [...finalItems, item]);
  }

  function deleteItems(id) {
    setItems((finalItems) => finalItems.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItems} />
      <PackingList
        items={finalItems}
        onDeleteItems={deleteItems}
        toggleItems={onToggleItems}
        clear={clearList}
      />
      <Stats items={finalItems} />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo ">
      <h1>🚵‍♀️ Far Away 🌋</h1>
    </div>
  );
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function FormSubmission(e) {
    e.preventDefault();

    if (!description) return;

    const finalList = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    console.log(finalList);
    onAddItem(finalList);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={FormSubmission}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(val) => setQuantity(val.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((val) => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(msg) => setDescription(msg.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItems, toggleItems, clear }) {
  const [sortBy, setSortBy] = useState("packed");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            finalDelete={onDeleteItems}
            toggle={toggleItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>

        <button onClick={clear}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item, finalDelete, toggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => toggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => finalDelete(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  const totalItem = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numpacked / totalItem) * 100);

  return (
    <footer className="stats">
      {percent === 100 ? (
        <em>Enjoy the trip</em>
      ) : (
        <em>
          'You can have {totalItem} item in your list and you already packed{" "}
          {numpacked} (%{percent}).Enjoy the trip!'
        </em>
      )}
    </footer>
  );
}

export default App;
