import React, { useState } from "react";

const DecrementButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count-1)}>Decrementar</button>
    </div>
  );
};

export default DecrementButton;