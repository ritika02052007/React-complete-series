import { useState } from "react";

function App() {
  let [color, setColor] = useState("purple");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center
              bottom-18 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3
                     py-2 rounded-3xl"
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg   text-amber-50"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full
     shadow-lg  text-amber-50"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg  text-amber-50"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4  py-1 rounded-full shadow-lg  text-shadow-white text-white"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full shadow-lg  text-amber-50"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("skyblue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg  text-amber-50"
            style={{ backgroundColor: "skyblue" }}
          >
            Skyblue
          </button>

          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-amber-50"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            onClick={() => setColor("brown")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-amber-50"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>

          <button
            onClick={() => setColor("lime")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-amber-50"
            style={{ backgroundColor: "lime" }}
          >
            Lime
          </button>

          <button
            onClick={() => setColor("coral")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-amber-50"
            style={{ backgroundColor: "coral" }}
          >
            Coral
          </button>

          <button
            onClick={() => setColor("Tan")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-amber-50"
            style={{ backgroundColor: "Tan" }}
          >
            Tan
          </button>

          <button
            onClick={() => setColor("crimson")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-amber-50"
            style={{ backgroundColor: "crimson" }}
          >
            Crimson
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
