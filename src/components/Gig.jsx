import "./Gig.css"
import { useState } from "react"

const Gig = (props) => {
    let [isFavourite, setIsFavourite] = useState(props.favouriteGigs.includes(props.name));
    console.log("favourite " + isFavourite)
    console.log(props.favouriteGigs)

    const makeFavourite = () => {
        if (isFavourite) {
            props.setFavouriteGigs(props.favouriteGigs.filter(a => a!== props.name))
            setIsFavourite(false);
        }
        else {
            props.setFavouriteGigs(props.favouriteGigs.concat([props.name]))
            setIsFavourite(true);
        }
    }
    return (
        <>
            <h3 className="bandName"> {isFavourite ? "🤘" : ""}  {props.name} </h3>
            <img className="bandLogo" src={props.logo} alt="band's logo" />
            <p className="eventDetails"> {props.details}</p>
            <div className="timePlace">
                <p className="eventTime"> {props.dateTime}</p>
                <p className="eventLocation"> {props.location}</p>
            </div>
            <button className="favBtn" onClick={makeFavourite}>
                {isFavourite ? "Remove from favourites" : "Add to favourites"}
            </button>
        </> 
    )
}

export default Gig;