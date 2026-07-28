import { useState } from "react";

export default function State() {
  const initItems = [
    {
      name: "Mouse",
      amount: 10,
    },
    {
      name: "Keyboard",
      amount: 20,
    },
  ];

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  // const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState(initItems);

  const test = () => {
    setName("TEST 2...");
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  const onButtonClick = () => {
    const newItem = {
      name: name,
      amount: amount,
    };

    // const newItems = [...items, newItem];
    // setItems(newItems);

    setItems((prev) => {
      return [...prev, newItem];
    });
  };

  return (
    <div>
      {/* {isLoading ? (
        <div>Loading...</div>
      ) : name === "TEST" ? (
        <div>TEST TERNARY</div>
      ) : (
        <div>Completed</div>
      )} */}
      {/* {isLoading && <div>Loading...</div>}
      {name} */}
      <br />
      <label>Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={onChangeName}
      />
      <label>Amount</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={amount}
        onChange={onChangeAmount}
      />
      <div>
        <button onClick={onButtonClick}>Click me!!</button>
      </div>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
