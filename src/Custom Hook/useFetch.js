import { useEffect, useState } from "react";

function useFetch(url,isFilter) {
  const [apiData, setApiData] = useState(isFilter?{}:[]);

  function callApi(url) {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const { data } = res;
        setApiData(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    callApi(url);
  }, []);

  return [apiData]
}
export default useFetch