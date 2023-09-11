import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import Gig from "./components/Gig";
import { EventContext } from "./components/EventContext";
import { useContext } from "react";

function App() {
  const { toolBand, painOfSalvation, favouriteGigs, setFavouriteGigs } = useContext(EventContext);

  return (
    <>
      <h1 className="header" name="Welcome Text">Welcome to Lydia&apos;s gig lister</h1>
      <h4 className="power">powered by:</h4> <img className="logo" name="Maker's Logo" src={makersLogo}></img>
      <Gig favouriteGigs={favouriteGigs} setFavouriteGigs={setFavouriteGigs} name={toolBand.name} logo={toolBand.logo} details={toolBand.details} dateTime={toolBand.dateTime} location={toolBand.location}/>    
      <Gig favouriteGigs={favouriteGigs} setFavouriteGigs={setFavouriteGigs} name={painOfSalvation.name} logo={painOfSalvation.logo} details={painOfSalvation.details} dateTime={painOfSalvation.dateTime} location={painOfSalvation.location}/>    
    </>
  );
}

export default App;
