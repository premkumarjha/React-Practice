import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";


const rowData = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

const columnDefs = [
  {
    headerName: "Name",
    field: "name",
    filter: "agSetColumnFilter", // Dropdown filter
    floatingFilter: true,        // Show filter input in header
  },
  {
    headerName: "Age",
    field: "age",
  },
];

const AgGridTable = () => {

  const [gridApi, setGridApi] = useState(null);
//ASI ===> //NEXT YEAR PROMTION PSI
  return (
    <div className="ag-theme-alpine" style={{ height: 300, width: 400 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        onGridReady={(params) => setGridApi(params.api)}
      />
    </div>
  );
};

export default AgGridTable;