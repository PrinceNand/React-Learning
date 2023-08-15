function App() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 2, description: "mobile", quantity: 1, packed: true },
  ];

  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );

  function Logo() {
    return (
      <div className="logo ">
        <h1>😊 Far Away 🌋</h1>
      </div>
    );
  }
  function Form() {
    return (
      <div className="add-form">
        <h3>What do you need for your trip?</h3>
      </div>
    );
  }
  function PackingList() {
    return (
      <div className="list">
        <ul>
          {initialItems.map((item) => (
            <Item item={item} />
          ))}
        </ul>
      </div>
    );
  }

  function Item({ item }) {
    return (
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button>❌</button>
      </li>
    );
  }
  function Stats() {
    return (
      <footer className="stats">
        <em>
          You can have X item in your list and you already packed x (%X).Enjoy
          the trip!
        </em>
      </footer>
    );
  }
}

export default App;
