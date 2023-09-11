import { createContext , useState} from "react";

export const EventContext = createContext();

const EventContextProvider = (props) => {
    const O2Arena = "O2 Arena, Peninsula Square, London, SE10 0DX";
    const IslingtonAssembly = "Islington Assembly Hall, Upper Street, Islington, London, N1 2UD"
    let [favouriteGigs, setFavouriteGigs] = useState([]);

    const toolBand = {
        name: "Tool",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tool_logo_2006.svg/799px-Tool_logo_2006.svg.png?20130811111337",
        details: "TOOL have announced a headline show at London! “It is with great pleasure I get to announce our return to the road,” said Danny Carey. “These past 18 months have been trying to say the least but from great trials come great lessons and great rewards. We are genuinely looking forward to sharing them with you.”",
        dateTime: "Monday 9th of May, doors open: 19:00",
        location: O2Arena
    }

    const painOfSalvation = {
        name: "Pain of Salvation",
        logo: "https://metalshockfinland.files.wordpress.com/2020/06/pain-of-salvation.jpg",
        details: "Swedish progressive rock/metal 5-piece founded in 1984, they blend the dynamics of old masters such as 'Yes' with the modern sound like Faith No More.",
        dateTime: "Thu 13th September 2018 7:30pm",
        location: IslingtonAssembly
    }

    return (
        <EventContext.Provider value={{ toolBand, painOfSalvation, favouriteGigs, setFavouriteGigs}} >
            {props.children}
        </EventContext.Provider>
    )
}

export default EventContextProvider;