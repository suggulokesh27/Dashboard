import React, { useEffect, useState } from "react";
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableHeaderCell, CTableRow } from "@coreui/react";
import studentImage from "../../assets/images/avatars/childImage.jpeg";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from "react-bootstrap";
import studentData from "src/StudentData";
import "./StudentDetails.css";
import { Link, useParams } from "react-router-dom";
import { useGet } from "src/services/api";
import CIcon from "@coreui/icons-react";
import { cilNoteAdd, cilPencil } from "@coreui/icons";
import { useDispatch, useSelector } from "react-redux";
import StudentDetailsSlice, { setStudentDetails } from "src/store/StudentDetailsSlice";

const StudentDetails = () => {

    const studentDetails = useSelector(state => state.StudentDetailsSlice.studentDetails)
    const [student, setStudent] = useState({});
    const params = useParams();

    const setStudentDetailsDispatch= useDispatch()

console.log(studentDetails,"this student details from slice store...")
    const FetchStudent = async () => {
        const res = await useGet(`http://localhost:8081/api/v1/students/${params.studentId}`);
        console.log(res);
        setStudentDetailsDispatch(setStudentDetails(res));
        setStudent(res);

    }

    useEffect(() => {
        FetchStudent();
    }, [])

    return (
        <>
            {/* <CCard className="p-3">
                <CCardTitle>About Johnsoni</CCardTitle>
                <CRow>

                    <CCol lg={6}>
                        <CCardBody>
                            <CCardImage src={studentImage} alt="student image" />
                        </CCardBody>
                    </CCol>

                    <CCol>
                        <CCardBody>
                            <CRow className="justify-content-end">
                                <CCol>
                                    <CCardTitle>{student.Name}</CCardTitle>
                                </CCol>
                                <CCol className="text-end">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </CCol>
                            </CRow>
                            <CCardText>Aliquam erat volutpat. Curabiene natis massa
                                sedde lacu stiquen sodale word moun taiery.
                                Aliquam erat volutpaturabiene natis massa sedde sodale word moun taiery.
                            </CCardText>
                            <CTable>
                                <CTableBody>
                                    <CTableRow color="dark">
                                        <CTableDataCell>Name :</CTableDataCell>
                                        <CTableHeaderCell>{student.Name}</CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Date of Birth :</CTableDataCell>
                                        <CTableHeaderCell>{student.DateOfBirth}</CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Gender :</CTableDataCell>
                                        <CTableHeaderCell>{student.Gender} </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Father Name :</CTableDataCell>
                                        <CTableHeaderCell>{student.FatherName} </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Mother Name :</CTableDataCell>
                                        <CTableHeaderCell>{student.MotherName} </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Father Occupation :</CTableDataCell>
                                        <CTableHeaderCell>{student.FatherOccupation} </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>E-mail :</CTableDataCell>
                                        <CTableHeaderCell>{student.Email}</CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Admission Date :</CTableDataCell>
                                        <CTableHeaderCell>{student.AdmissionDate}</CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Roll No. :</CTableDataCell>
                                        <CTableHeaderCell>{student.RollNo} </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Aadhar Card Number :</CTableDataCell>
                                        <CTableHeaderCell>{student.AadharCardNumber}</CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Nationality :</CTableDataCell>
                                        <CTableHeaderCell> {student.Nationality}</CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Mother Tongue :</CTableDataCell>
                                        <CTableHeaderCell> {student.MotherTongue}</CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Place Of Birth :</CTableDataCell>
                                        <CTableHeaderCell>{student.PlaceOfBirth} </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Address :</CTableDataCell>
                                        <CTableHeaderCell>{student.Address}</CTableHeaderCell>
                                    </CTableRow>
                                        <CTableRow>
                                        <CTableDataCell>Class :</CTableDataCell>
                                        <CTableHeaderCell> {student.Class}</CTableHeaderCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </CCardBody>
                    </CCol>

                </CRow>
            </CCard> */}
            {/* // fee details... */}

            {/* <CCard className="mt-3 mb-4">
                <CCardTitle>
                    Fee Details
                </CCardTitle>
            </CCard> */}

            {/* <Table bordered hover>
                <thead className="bg-dark">
                    <tr className="bg-dark">
                        <th>1</th>
                        <th >First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table> */}
            <section>
                <div className="body">
                    <div className="row flex-row">
                        <div className="col-lg-6">
                            <div className="about-avatar">
                                <img src={studentImage} title={student?.Name} alt="student" />
                            </div>
                        </div>
                        <div className="col-lg-6 mt-2">
                            <div className="about-text go-to">
                                <h4 className="dark-color align-items-center d-flex justify-content-between">About {student?.firstName}
                                    <Link to="/register/students">
                                        <i className="bi bi-pencil-square p-1 border border-secondary rounded hover-bg-icon"></i>
                                    </Link>
                                </h4>
                                <h6 className="theme-color lead">Class : {student?.grade} & Section : A</h6>
                                <div className="row about-list">
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>Birthday</label>
                                            <p>{student?.birthDate}</p>
                                        </div>
                                        <div className="media">
                                            <label>Age</label>
                                            <p>5 Yr</p>
                                        </div>
                                        <div className="media">
                                            <label>Residence</label>
                                            <p>India</p>
                                        </div>
                                        <div className="media">
                                            <label>Address</label>
                                            <p>{student?.address1}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>E-mail</label>
                                            <p>Email@gmail.com</p>
                                        </div>
                                        <div className="media">
                                            <label>Phone</label>
                                            <p>{student?.mobile}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="counter">
                        <div className="row">
                            <div className="col-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to="500" data-speed="500">78%</h6>
                                    <p className="m-0px font-w-600">Attedence</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to="150" data-speed="150">7.3</h6>
                                    <p className="m-0px font-w-600">CGPA</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to="850" data-speed="850">20k</h6>
                                    <p className="m-0px font-w-600">Fee Due</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to="190" data-speed="190">30k</h6>
                                    <p className="m-0px font-w-600">Fee Paid</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StudentDetails;
