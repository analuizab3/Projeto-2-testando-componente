import React, { useState } from "react";

const IncrementButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count+1)}>Incrementar</button>
    </div>
  );
};

export default IncrementButton;