import React from "react";

export default function PopUp({closePopup, selectedCard}) {
    
    function sayToClose() {
        closePopup(true)
    }
    
      function handleModalClick(e) {
        if (e.target.classList.contains("bg-pink-200")) {
          sayToClose();
        }
      }

    return (
        <div className="fixed inset-0 flex items-center justify-center" onClick={handleModalClick}>
          <div className="bg-pink-200 bg-opacity-75 absolute inset-0" />
          <div className="bg-white p-5 rounded-md relative z-10">
            <img src={selectedCard.url} alt="" />
            <h3>{selectedCard.title}</h3>
            <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-md" onClick={sayToClose}>Закрыть</button>
          </div>
        </div>
    )
}