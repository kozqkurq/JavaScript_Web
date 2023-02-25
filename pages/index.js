// index.js
import { useState } from "react";

// コンポーネント
function Header(props) {
    return (<h1>{props.title}</h1>);
}
function RenderMembers(props) {
    return (
        <ul>
            {props.members.map((member, index) => <li key={index}>{member}</li>)}
        </ul>
    );
}
function RenderStudents(props) {
    return (
        <ul>
            {props.students.map((student, index) => <li key={index}>{student}</li>)}
        </ul>
    );
}
function WeatherNews() {
    
    const [res, setRes] = useState([]);
    const fetchRes = async () => {
        // fetch関数で気象庁APIから大阪のデータにアクセス
        const response = await fetch(
            "https://www.jma.go.jp/bosai/forecast/data/forecast/270000.json"
        );
        // 取得したデータをjsonとして変換する
        const json = await response.json();
        // dataに結果のjsonデータを設定する
        setRes(json); 
    };
    fetchRes()
    // console.log(res[0]["timeSeries"][0])
    const data = res[0]["timeSeries"][0];
    const time = res[0]["timeSeries"][0]["timeDefines"][0];
    const areaData = data["areas"][0];
    const area = areaData["area"]["name"];
    const weather = areaData["weathers"][0];
    const wind = areaData["winds"][0];
    const wave = areaData["waves"][0];
    return (
        <table border={1}>
            <tr>
                <th>日付</th>
                <td>{time}</td>
            </tr>
            <tr>
                <th>場所</th>
                <td>{area}</td>
            </tr>
            <tr>
                <th>天気</th>
                <td>{weather}</td>
            </tr>
            <tr>
                <th>風</th>
                <td>{wind}</td>
            </tr>
            <tr>
                <th>波</th>
                <td>{wave}</td>
            </tr>
            <tr>
                <th></th>
                <td></td>
            </tr>
        </table>
    );
}

// 表示
export default function HomePage() {
    // State、Props宣言
    const members = ["Taro", "Jiro", "Saburo"];
    const students = ["Mike", "Bob", "jane"];
    const [likes, setLikes] = useState(0);
    const [pom, setPom] = useState("pom");
    const [colorIndex, setColorIndex] = useState(0);
    

    // ボタン用処理関数
    function handleClick() {
        console.log('increment like count');
        setLikes(likes + 2);
    }
    function handleClickPom() {
        // console.log("test");
        setPom(pom + "pom");
    }
    function handleClickBg() {
        const colors = ["white", "red", "blue", "green"];
        setColorIndex(colorIndex + 1);
        if(colorIndex >= colors.length-1){
            setColorIndex(0);
        }
        document.body.style.backgroundColor = colors[colorIndex];
    }

    return (
        <div>
            <Header title="Make it possible with Kozqkurq.2" />

            <RenderMembers members={members} />
            <RenderStudents students={students} />
            <WeatherNews />
            <button onClick={handleClick}>Likes ({likes})</button>
            <button onClick={handleClickPom}>pom</button>
            <button onClick={handleClickBg}>背景変更</button>
            <p>{pom}</p>
        </div>
    );
}