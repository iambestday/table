import React from "react";
import data from "./utils/data.json";
import GridTable from "./components/GridTable";

function App() {
  return (
    <div>
      <GridTable data={data}/>
    </div>
  );
}

export default App;
