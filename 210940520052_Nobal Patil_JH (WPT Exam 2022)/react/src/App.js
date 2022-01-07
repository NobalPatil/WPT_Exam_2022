import { useState } from "react";

export default function App() {
  return (
    <>
      <MyChatApp />
    </>
  );
}

function MyChatApp() {
  const parent = "container-fluid";
  const header = "row bg-secondary text-light";
  const headstyle = " d-flex align-items-center p-3";
  const inputField = "row mt-2";
  const chatStyle1 = "alert alert-secondary border-secondary text-dark mt-4";
  const chatStyle2 =
    "text-end alert alert-secondary border-secondary text-dark mt-4";
  const studentName = "Nobal Patil";
  const studentId = "210940520052";

  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const getText = (e) => {
    let newText = e.target.value;
    setText(newText);
  };

  const sendMsg = () => {
    if (text !== "") {
      let newList = [...list, text];
      setList(newList);
    }
  };

  return (
    <div className={parent}>
      <div className={header}>
        <div className={headstyle}>
          <h2>MyChatApp</h2>
          <h6 className="m-0 ms-2">
            by {studentName}/{studentId}
          </h6>
        </div>
      </div>
      <div className={inputField}>
        <div>
          <input
            className="w-75 p-4"
            style={{ "border-radius": "10px" }}
            type="text"
            placeholder="Lets chat here..."
            onChange={getText}
          />
          <input
            className="p-4 ms-2"
            style={{ "border-radius": "10px", width: "130px" }}
            type="button"
            value="SEND"
            onClick={sendMsg}
          />
        </div>
        <div>
          {list.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <div key={index} className={chatStyle1}>
                  {item}
                </div>
              );
            } else {
              return (
                <div key={index} className={chatStyle2}>
                  {item}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
