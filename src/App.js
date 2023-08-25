import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

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

export default App;
