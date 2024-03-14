import { CCard, CCardBody, CCardSubtitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { CChart } from "@coreui/react-chartjs";
import React from "react";


const Attendance = () => {
    return (
        <CRow className="gap-3">
            <h2>
                Attendance
            </h2>
            <CCard style={{
                border: "1px solid black",
                width: "15rem"
            }}
                className="text-center"
            >
                <CChart
                    type="doughnut"
                    data={{
                        labels: ['Presents', 'Absents'],
                        datasets: [
                            {
                                backgroundColor: ['#00D8FF', '#E46651'],
                                data: [60, 40],
                            },
                        ],
                    }}
                    options={{
                        plugins: {
                            legend: {
                                labels: {
                                    color: "black",
                                }
                            }
                        },
                    }}
                />
                <CCardBody>
                    <CCardSubtitle>Students</CCardSubtitle>

                </CCardBody>
            </CCard>

            <CCard style={{
                border: "1px solid black",
                width: "15rem"
            }}
                className="text-center"
            >
                <CChart
                    type="doughnut"
                    data={{
                        labels: ['Presents', 'Absents'],
                        datasets: [
                            {
                                backgroundColor: ['#00D8FF', '#E46651'],
                                data: [75, 25],
                            },
                        ],
                    }}
                    options={{
                        plugins: {
                            legend: {
                                labels: {
                                    color: "black",
                                }
                            }
                        },
                    }}
                />
                <CCardBody>
                    <CCardSubtitle>Teachers</CCardSubtitle>

                </CCardBody>
            </CCard>

            <CCard style={{
                border: "1px solid black",
                width: "15rem"
            }}
                className="text-center"
            >
                <CChart
                    type="doughnut"
                    data={{
                        labels: ['Presents', 'Absents'],
                        datasets: [
                            {
                                backgroundColor: ['#00D8FF', '#E46651'],
                                data: [90, 10],
                            },
                        ],
                    }}
                    options={{
                        plugins: {
                            legend: {
                                labels: {
                                    color: "black",
                                }
                            }
                        },
                    }}
                />
                <CCardBody>
                    <CCardSubtitle>Others</CCardSubtitle>
                </CCardBody>
            </CCard>

            <h2>Classes wise</h2>
            <CTable hover
                bordered
                className="text-center">
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Presents</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Absents</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>80%</CTableDataCell>
                        <CTableDataCell>20%</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>67%</CTableDataCell>
                        <CTableDataCell>33%</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell >80%</CTableDataCell>
                        <CTableDataCell>20%</CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </CRow>
    )
}

export default Attendance;