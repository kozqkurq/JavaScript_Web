// index.js
import { useState } from "react";

function Header(props) {
    return (<h1>{props.title}</h1>);
}

function RenderList(props) {
    return (
        <ul>
            {props.members.map((member, index) => <li key={index}>{member}</li>)}
        </ul>
    );
}

export default function HomePage() {
    const members = ["Taro", "Jiro", "Saburo"];
    const [likes, setLikes] = useState(0);
    const [pom, setPom] = useState("pom");

    function handleClick() {
        console.log('increment like count');
        setLikes(likes + 2);
    }
    function handleClickPom() {
        console.log("test");
        setPom(pom + "pom");
    }

    return (
        <div>
            <Header title="Make it possible with Kozqkurq." />

            <RenderList members={members} />
            <button onClick={handleClick}>Likes ({likes})</button>
            <button onClick={handleClickPom}>pom</button>
            <p>{pom}</p>
        </div>
    );
}