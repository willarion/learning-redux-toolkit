import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { ReservationCard } from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";
import { CustomerCard } from "./components/CustomerCard";

function App() {
  const dispatch = useDispatch();

  const reservation = useSelector(
    (state: RootState) => state.reservations.value
  );
  const customers = useSelector((state: RootState) => state.customer.value);

  // const s = useSelector((state: RootState) => state);
  // console.log(s);

  const [reservationNameInput, setReservationNameInput] = useState("");
  const handleReservationNameInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReservationNameInput(event.target.value);
  };

  const handleAddReservations = () => {
    reservationNameInput &&
      dispatch(addReservation(reservationNameInput)) &&
      setReservationNameInput("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservation.map((name, index) => (
                <ReservationCard key={name} index={index} name={name} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={handleReservationNameInput}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => (
            <CustomerCard
              id={customer.id}
              name={customer.name}
              food={customer.food}
              key={customer.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
