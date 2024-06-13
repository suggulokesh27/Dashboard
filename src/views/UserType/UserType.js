import { CButton, CCol, CForm, CFormInput, CRow } from "@coreui/react";
import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  StrictMode,
} from "react";
import { Card } from "react-bootstrap";
import Service from "./Service";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";

const UserType = () => {

  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState([
    {Role : "Student",
    Services : "Select"
  }
  ]);
  const [columnDefs, setColumnDefs] = useState([
    { field: "Role",cellEditor:false},
    { field: "Services" },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      cellDataType: true,
      sortable: false,
      cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
            values: ['Student', 'Teacher', 'Subject', 'Account', 'attedance','Schedule','Exam','Other'],
        }
    };
  }, []);
  // const onGridReady = useCallback((params) => {
  //   fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  //     .then((resp) => resp.json())
  //     .then((data) => setRowData(data));
  // }, []);
  return (
    <div
    className="ag-theme-quartz" // applying the grid theme
    style={{ height: 500 }} // the grid will fill the size of the parent container
 >
   <AgGridReact
        defaultColDef={defaultColDef}
       rowData={rowData}
       columnDefs={columnDefs}
      enableRangeSelection={true}
   />
 </div>
  
  );
  }
  
  export default UserType;