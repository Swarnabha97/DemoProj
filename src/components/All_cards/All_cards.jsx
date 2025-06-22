import React from "react";
import { useContext, useState, useCallback, useMemo, useRef, useEffect } from "react";
import Card from "../Country_card/Card";
import { StoreContext } from "../../context/StoreContext";
import './All_cards.css'


export const  All_cards = () =>{

    const {data} = useContext(StoreContext)
      const [search, setSearch] = useState("")
      const inputRef = useRef(null);


    //Holds persistent reference w/o re-render
    useEffect(() => {
    inputRef.current?.focus();
      }, []);
    
      // const handleChange = (e)=> {
      //   setSearch(e.target.value)
      // }

      //Reuses same function unless deps change

      const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
    
      // const filterCountry = data.filter(country=> country.name.toLowerCase().includes(search.toLowerCase()))

      //Caches computation, runs only if needed

      const filterCountry = useMemo(() => {
    return data.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);


    return(
        <div className="card_box">
            <input type='text' ref={inputRef} className="form-control me-2" placeholder='Search for Country' value={search} onChange={handleChange}></input>
            <div className="card_display">
                  {filterCountry.map((item,index)=>{
                      return(
                        <div key={index}>
                        <Card countryName = {item.name} population={item.population} continent={item.continent}/>
                        </div>
                           )
                     })}
             </div>
        </div>
    )
}