import { CCard, CCardBody, CCardSubtitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { CChart } from "@coreui/react-chartjs";
import React, { useState, useEffect } from "react";


const Attendance = () => {

    const [attendance, setAttendance] = useState({});

    useEffect(() => {
      if (!localStorage.getItem('attendance')) {
        console.log('Creating attendance records...');
        const getRandom = () => (Math.random() >= 0.5);
  
        const initialAttendance = {
          "Slappy the Frog": Array.from({ length: 12 }, getRandom),
          "Lilly the Lizard": Array.from({ length: 12 }, getRandom),
          "Paulrus the Walrus": Array.from({ length: 12 }, getRandom),
          "Gregory the Goat": Array.from({ length: 12 }, getRandom),
          "Adam the Anaconda": Array.from({ length: 12 }, getRandom)
        };
  
        localStorage.setItem('attendance', JSON.stringify(initialAttendance));
        setAttendance(initialAttendance);
      } else {
        setAttendance(JSON.parse(localStorage.getItem('attendance')));
      }
    }, []);
  
    const handleCheckboxChange = (student, day) => {
      const newAttendance = { ...attendance };
      newAttendance[student][day] = !newAttendance[student][day];
      setAttendance(newAttendance);
      localStorage.setItem('attendance', JSON.stringify(newAttendance));
    };
  
    const countMissing = (days) => days.filter(day  => !day).length;
    return (
<div>
         <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="name-col bg-primary text-white">Student Name</th>
              {[...Array(30).keys()].map(day => (
                <th key={day + 1}>{day + 1}</th>
              ))}
              <th className="missed-col bg-danger">Days Missed</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(attendance).map(student => (
              <tr className="student" key={student}>
                <td className="name-col text-center">{student}</td>
                {[...Array(30).keys()].map(day => (
                  <td className="attend-col text-center" key={day}>
                    <input
                      type="checkbox"
                      checked={attendance[student][day]}
                      onChange={() => handleCheckboxChange(student, day)}
                    />
                  </td>
                ))}
                <td className="missed-col text-center">{countMissing(attendance[student])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>



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
        </div>
    )
}

export default Attendance;