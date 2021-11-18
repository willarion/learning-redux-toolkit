import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  food: Array<string>;
}

export const CustomerCard: React.FC<CustomerCardType> = ({
  id,
  name,
  food,
}) => {
  const dispatch = useDispatch();

  const [customerFoodInput, setCustomerFoodInput] = useState("");
  const handleCustomerFoodInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomerFoodInput(event.target.value);
  };

  const handleAddFood = () => {
    customerFoodInput &&
      dispatch(
        addFoodToCustomer({
          id,
          food: customerFoodInput,
        })
      ) &&
      setCustomerFoodInput("");
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => (
            <p key={uuid()}>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input value={customerFoodInput} onChange={handleCustomerFoodInput} />
          <button onClick={handleAddFood}>Add</button>
        </div>
      </div>
    </div>
  );
};
