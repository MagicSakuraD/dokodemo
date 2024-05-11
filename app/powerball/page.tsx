"use client";
import React, { useState } from "react";

function MyComponent() {
  const [values, setValues] = useState(Array(5).fill(0));
  const [lastValue, setLastValue] = useState(0);

  const handleChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValues = [...values];
      newValues[index] = event.target.value;
      setValues(newValues);
    };

  return (
    <div className="card h-96">
      <div className="flex flex-row gap-7 w-full justify-center">
        {values.map((value, index) => (
          <input
            key={index}
            type="number"
            placeholder="0"
            className="input input-bordered w-1/12"
            value={value}
            onChange={handleChange(index)}
          />
        ))}
      </div>
      <div className="flex flex-row gap-7 w-full justify-center">
        {values.map((value, index) => (
          <p key={index}>{Math.round((32 / 68) * (value - 1)+1)}</p>
        ))}
      </div>

      <div className="mx-auto mt-20">
        <input
          type="number"
          className="input input-bordered input-primary w-3/6"
          onChange={(event) => setLastValue(Number(event.target.value))}
        />
        <p className="stat-value">{Math.round((15 / 25) * (lastValue - 1)+1)}</p>
      </div>
    </div>
  );
}

const PowerBall = () => {
  return (
    <div className="container mx-auto mt-20">
      <MyComponent></MyComponent>
    </div>
  );
};

export default PowerBall;
