import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    let url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;

<<<<<<< HEAD
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    },[currency])
    return data
=======
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);
      });
    console.log(data);
  }, [currency]);
  return data;
>>>>>>> f790239788d60e7db77fd8bffd84452a89c9abb1
}

export default useCurrencyInfo;
