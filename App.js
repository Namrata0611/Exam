import "./App.css";
import { useState } from "react";
import context from "react-bootstrap/esm/AccordionContext";
function App() {
  return <MyComponent />;
}

function MyComponent() {
  // const [name, SetName] = useState("");
  // const [id, setId] = useState("");
  const [Input, setInput] = useState("");
  const [validationError, setValidationError] = useState("");
  const [userList, setUserList] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const getData = () => {
    if (Input === "") {
      setValidationError(true);
      return;
    }
    const user = { Input: Input };
    const newList = [user, ...userList];
    setUserList(newList);

    setInput("");

    setValidationError(false);
  };

  return (
    <div className="container">
      <div className="conitainer p-2">
        <div>
          <b>
            <h2>MyChatApp</h2>
          </b>
          <h4>by Namrata Jadhav 21094320067</h4>
        </div>
      </div>
      <br />
      <div>
        <input
          className="in border border-secondary-rounded p-3"
          type="text"
          value={handleInput}
          placeholder="lets chat here....."
          style={{ width: "80%", height: "60px" }}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          className={
            Input === "" && validationError ? "border border-danger" : ""
          }
        />

        <input
          className="in border border-rounded  ml-5 p-3"
          type="button"
          value="Send"
          style={{ width: "100px", height: "60px" }}
          onClick={getData}
        />
      </div>

      <br />
      <input
        className="input"
        type="button"
        value="Hiiii"
        style={{ width: "80%", height: "30px" }}
      />

      <br />
      <br />
      <input
        className="input1"
        type="button"
        value="Hello,"
        style={{ width: "80%", height: "30px" }}
      />
      <br />
      <br />
      <input
        className="input"
        type="button"
        value="whtatsapp,"
        style={{ width: "80%", height: "30px" }}
      />
      <br />
      <br />
      <input
        className="input1"
        type="button"
        value="All good,"
        style={{ width: "80%", height: "30px" }}
      />
      <br />
      <br />
      <input
        className="input"
        type="button"
        value="All the best,"
        style={{ width: "80%", height: "30px" }}
      />
    </div>
  );
}
export default App;
