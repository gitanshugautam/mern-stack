import { useEffect } from "react";
import { getData } from "./Fetch";

function App() {

  useEffect(() => {
    getData()
      .then(data => console.log("FETCH DATA:", data))
      .catch(err => console.error(err));
  }, []);

  return <h1>Fetch</h1>;
}

export default App;











// import { useEffect } from "react";
// import { getData } from "./Axios";

// function App() {

//   useEffect(() => {
//     getData()
//       .then(data => console.log("AXIOS DATA:", data))
//       .catch(err => console.error(err));
//   }, []);

//   return <h1>Axios</h1>;
// }

// export default App;
