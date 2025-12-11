import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Rform from "./Rform";
// import Lform from "./Lform";
// import Linecharts from "./Linecharts";
// import Barchart from "./Barchart";
// import UltimateBarChart from "./UltimateBarChart";
// import Piechart from "./Piechart";
// import Scatterchart from "./Scatterchart";
import Radarchart from "./Radarchart";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Rform />} />
        <Route path="/login" element={<Lform />} /> */}
        {/* <Route path="/" element={<Linecharts />} /> */}
         {/* <Route path="/" element={<Barchart />} /> */}
            {/* <Route path="/" element={<UltimateBarChart />} /> */}
                {/* <Route path="/" element={<Piechart />} /> */}
                {/* <Route path="/" element={<Scatterchart/>} /> */}
                <Route path="/" element={<Radarchart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
