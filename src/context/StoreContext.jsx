import { useEffect, useState } from "react"
import { createContext } from "react"
import axios from "axios"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [data,setData] = useState([])
    const [unique, setUnique] = useState([])

    useEffect(()=>{
        axios.get('https://z9blqe7usb.execute-api.eu-west-1.amazonaws.com/dev/countries')
        .then((res)=>{
            setData(res.data);
            setUnique(['All',...new Set(data.map(item => item.continent))]);
            console.log(res);
        })

    },[]);
    const contextValue = {
        data,
        unique,
    }

    return (
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;