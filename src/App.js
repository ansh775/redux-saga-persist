import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, getData, removeData } from "./Redux/action";

function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  let data = useSelector((state) => state.dataReducer.data);
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />

      <button onClick={() => dispatch(addData(value))}>Add</button>

      {data.map((val, ind) => (
        <div key={ind}>
          {val.value}{" "}
          <button onClick={() => dispatch(removeData(val.value))}>X</button>
        </div>
      ))}
    </div>
  );
}

export default App;
