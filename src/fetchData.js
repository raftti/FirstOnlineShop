import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInitialList } from "./cardsSlice";

function FetchComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        const slicedData = data.slice(0, 50);
        dispatch(setInitialList(slicedData));
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, [dispatch]);
}

export default FetchComponent;
