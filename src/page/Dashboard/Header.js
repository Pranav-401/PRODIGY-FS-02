import React from "react";

function Header({ setIsAdding }) {
  return (
    <div>
      <header>
        <h1>Employee Management System</h1>
        <div>
          <button onClick={() => setIsAdding(true)} className="round-button">
            Add Employee
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
