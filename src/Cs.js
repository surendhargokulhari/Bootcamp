import React from "react";

const FunctionalGreeting = ({ name }) => {
  return <h1 className="bg-primary">Hii, {name}!</h1>;
};

const App = () => {
  return (
    <div>
      <FunctionalGreeting name="Gokul Functional Greeting" />
    </div>
  );
};

export default App;
