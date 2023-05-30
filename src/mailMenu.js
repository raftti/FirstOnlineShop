import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCard } from "./cardsSlice";
import PopUp from "./popUpLogic";

function MainMenu() {
  const dispatch = useDispatch();
  const cardsList = useSelector((state) => state.shop.initialList);
  const [selectedCard, setSelectedCard] = useState(null);

  function addToCart(cardId) {
    dispatch(addToCard(cardId));
  }

  function openPopup(card) {
    setSelectedCard(card);
  }

  function closePopup(isClosed){
    if(isClosed === true) setSelectedCard(null)
  }

  return (
    <div>
      <div className="flex flex-wrap mx-5">
        {cardsList.map((card) => (
          <div key={card.id} className="mx-3 mb-3 border border-2 border-black pt-1 px-3 max-w-[174px]">
            <img src={card.thumbnailUrl} alt="" onClick={() => openPopup(card)} />
            <div className="flex gap-2 my-1 items-center">
              <h3 className="overflow-hidden text-ellipsis whitespace-nowrap">{card.title}</h3>
              <svg
                className="hover:cursor-pointer active:text-lime-500 w-5 h-5 border border-transparent rounded-full"
                onClick={() => addToCart(card.id)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <PopUp closePopup={closePopup} selectedCard={selectedCard}/>
      )}
    </div>
  );
}

export default MainMenu;
