import React from "react";
import {assests} from '../../assets/assests.js'
import { All_cards } from "../../components/All_cards/All_cards.jsx";
import './Home.css'

export default function Home(){


    return(
        <div className="home">
            <img src={assests.header_img} className="header_img" alt="" />
            <All_cards/>

        </div>

    )
}