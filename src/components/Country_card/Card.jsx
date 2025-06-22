import React from 'react'
import './Card.css'

export default function Card({countryName, population, continent}){


    return(
        <div className='card'>
            <h4 className=''>Country Name : <span className='text-[22px] font-bold hover:text-green-500 text-black-500 bg-skyblue-300'>{countryName}</span></h4>
            <p>Population : <span className='font-bold'>{population}</span></p>
            <h5>Continent : <span className='font-bold text-black-800'>{continent}</span></h5>
        </div>
    )
}