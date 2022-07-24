import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomerFood } from "../../features/customerSlice";

interface customerCardtypes {
  id: string;
  name: string;
  food: string[];
}

function CustomerCard({ id, name, food }: customerCardtypes) {
  const [customerFoodInput, setCustomerFoodInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => (
            <p>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={(e) => {
              setCustomerFoodInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
                if(!customerFoodInput) return
              dispatch(addCustomerFood({ id, food: customerFoodInput }));
              setCustomerFoodInput("")
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
