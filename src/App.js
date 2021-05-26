import Login from "./Screen/Login";
import Home from "./Screen/Home";
import React, {useEffect} from "react";

function App() {
  useEffect(() => {
    if ("User" in localStorage) {
      console.log("User Object exists");
      console.log(localStorage.getItem("User"));
    } else {
      console.log("User not exists in Localstorage");
      localStorage.setItem("User", null);
    }
  }, []);
  return (
    <>
      <div>
        {localStorage.getItem("User") ? (
          <>
            <Home />
          </>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default App;
