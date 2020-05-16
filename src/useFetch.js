import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: "", loading: true });

  useEffect(() => {
    async function fetchData() {
      setState({ data: null, loading: true });
      let result = await fetch(url);
      result = await result.text();
      console.log(result);
      setState({ data: result, loading: false });
    }
    fetchData();
    //   useEffect(() => {
    //     fetch(url)
    //       .then((x) => x.text())
    //       .then((y) => console.log(y));
  }, [url]);

  return state;
};
