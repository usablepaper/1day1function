import { useState } from "react";

function App() {
    //초기 설정
    const [name, setName] = useState("태태룽");
    let color = "white";

    // 일반 함수로 바꾸기
    function newColor() {
        color = color === "white" ? "black" : "white";
        document.querySelector("#color").textContent = color;
    }

    return (
        <>
            <h1>Study State</h1>
            <h2 id="name">{name}</h2>
            <p id="color">{color}</p>
            <button
                onClick={() => {
                    setName(name === "그린티" ? "태태룽" : "그린티");
                }}
            >
                Change1
            </button>
            <button onClick={newColor}>Change2</button>
        </>
    );
}

export default App;
