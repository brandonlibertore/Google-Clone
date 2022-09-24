import { useState, useEffect } from "react";

const CONTEXT_KEY = "d09f9ab152aeb456e";
const API_KEY = process.env.API_KEY;

export default function useGoogleSearch(term) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
}
