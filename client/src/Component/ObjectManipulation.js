import React,{useState} from "react";

const ObjectManipulation = () => {
  const [Count, setCount] = useState({ id: 0 });

  const handleIncrement = () => {
    setCount((incrementHandle) => ({ id: incrementHandle.id + 1 }));
  };

  const handleDecrement = () => {
    setCount((decrementHandle) => ({ id: decrementHandle.id - 1 }));
  };

  return (
    <div>
      <p>Count: {Count.id}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default ObjectManipulation;
