import React, { useEffect, useState } from "react";
import "./Gig.css"

const Gig = (props) => {
    let [favourite, setFavourite] = useState(false);
    const makeFavourite = () => {
        if (favourite) {
            setFavourite(false)
        }
        else {
            setFavourite(true)
        }
    }


    return (
        <>
            <h3 className="bandName"> {favourite ? "🤘" : ""}  {props.name} </h3>
            <img className="bandLogo" src={props.logo} alt="band's logo" />
            <p className="eventDetails"> {props.details}</p>
            <div className="timePlace">
                <p className="eventTime"> {props.dateTime}</p>
                <p className="eventLocation"> {props.location}</p>
            </div>
            <button className="favBtn" onClick={makeFavourite}>
                {favourite ? "Remove from favourites" : "Add to favourites"}
            </button>
        </> 
    )
}

export default Gig;