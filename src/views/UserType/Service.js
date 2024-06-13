import React, {
    useCallback,
    useMemo,
    useRef,
    useState,
    StrictMode,
  } from "react";
  import { createRoot } from "react-dom/client";
  import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
  import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
  import "ag-grid-community/styles/ag-theme-quartz.css";


  const dummyData = [
    {
      "athlete": "Michael Phelps",
      "age": 23,
      "country": "United States",
      "year": 2008,
      "date": "24/08/2008",
      "sport": "Swimming",
      "gold": 8,
      "silver": 0,
      "bronze": 0,
      "total": 8
    },
    {
      "athlete": "Michael Phelps",
      "age": 19,
      "country": "United States",
      "year": 2004,
      "date": "29/08/2004",
      "sport": "Swimming",
      "gold": 6,
      "silver": 0,
      "bronze": 2,
      "total": 8
    },
    {
      "athlete": "Michael Phelps",
      "age": 27,
      "country": "United States",
      "year": 2012,
      "date": "12/08/2012",
      "sport": "Swimming",
      "gold": 4,
      "silver": 2,
      "bronze": 0,
      "total": 6
    },
    {
      "athlete": "Natalie Coughlin",
      "age": 25,
      "country": "United States",
      "year": 2008,
      "date": "24/08/2008",
      "sport": "Swimming",
      "gold": 1,
      "silver": 2,
      "bronze": 3,
      "total": 6
    },
]
  
  const Service = () => {
    const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const [rowData, setRowData] = useState(dummyData);
    const [columnDefs, setColumnDefs] = useState([
      { field: "athlete" },
      { field: "age" },
      { field: "country" },
      { field: "year" },
      { field: "date" },
      { field: "sport" },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" },
      { field: "total" },
    ]);
    const defaultColDef = useMemo(() => {
      return {
        editable: true,
        cellDataType: false,
      };
    }, []);
  
    const onGridReady = useCallback((params) => {
        setRowData(dummyData);
      fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
        .then((resp) => resp.json())
        .then((data) => setRowData(dummyData));
    }, []);
  
    return (
      <div style={containerStyle}>
        <div
          style={gridStyle}
          className={
            "ag-theme-quartz"
          }
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
          />
        </div>
      </div>
    );
  };

  export default Service;