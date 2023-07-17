import React from "react";

const Header = () => {
  const [newValue, setNewValue] = React.useState("");

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
    </header>
  );
};

Header.displayName = "Header";

export default Header;
