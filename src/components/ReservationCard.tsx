import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardType {
  name: string;
  index: number;
}

export const ReservationCard: React.FC<ReservationCardType> = ({
  name,
  index,
}) => {
  const dispatch = useDispatch();
  const handleCardDelete = () => {
    dispatch(removeReservation(index));
    dispatch(
      addCustomer({
        id: uuid(),
        name,
        food: [],
      })
    );
  };
  return (
    <div onClick={handleCardDelete} className="reservation-card-container">
      {name}
    </div>
  );
};
