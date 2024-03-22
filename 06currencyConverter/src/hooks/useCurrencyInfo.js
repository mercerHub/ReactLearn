import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data,setData] = useState({})

    useEffect(() => {
        let url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`

        fetch(url)
            .then((res) => res.json())
            .then((res) => res[currency])
            console.log(data)
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;