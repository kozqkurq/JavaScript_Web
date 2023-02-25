const fetchData = async () => {
    // fetch関数で気象庁APIから大阪のデータにアクセス
    const response = await fetch(
        "https://www.jma.go.jp/bosai/forecast/data/forecast/270000.json"
    );
    // 取得したデータをjsonとして変換する
    const json = await response.json();
    // dataに結果のjsonデータを設定する
    return(json); 
};
const json = await fetchData();
console.log(json);

const data = json[0].timeSeries[0];
const time = json[0].timeSeries[0].timeDefines[0];
const areaData = data.areas[0];
const area = areaData.area.name;
const weather = areaData.weathers[0];
const wind = areaData.winds[0];
const wave = areaData.waves[0];

console.log(`日付：${time}`);
console.log(`場所：${area}`);
console.log(`天気：${weather}`);
console.log(`風：${wind}`);
console.log(`波：${wave}`);
