import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: "", loading: true });

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      setState((state) => ({ data: state.data, loading: true }));
      let result = await fetch(url);
      result = await result.text();
      console.log(result);
      // setTimeout(() => {
      if (isCurrent.current) {
        setState({ data: result, loading: false });
      }
      // }, 2000);
    }
    fetchData();
    //   useEffect(() => {
    //     fetch(url)
    //       .then((x) => x.text())
    //       .then((y) => console.log(y));
  }, [url, setState]);

  return state;
};
