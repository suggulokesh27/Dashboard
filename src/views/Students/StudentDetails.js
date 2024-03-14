import React from "react";
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableHeaderCell, CTableRow } from "@coreui/react";
import studentImage from "../../assets/images/avatars/childImage.jpeg";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StudentDetails = () => {
    return (
        <div>
            <CCard className="p-3">
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
                                <CCardTitle>Johnsoni</CCardTitle>
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
                                    <CTableRow>
                                        <CTableDataCell>Name :</CTableDataCell>
                                        <CTableHeaderCell>Johnsoni</CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Date of Birth :</CTableDataCell>
                                        <CTableHeaderCell>01/01/2019</CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Gender :</CTableDataCell>
                                        <CTableHeaderCell>Female </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Father Name :</CTableDataCell>
                                        <CTableHeaderCell>Jhon </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Mother Name :</CTableDataCell>
                                        <CTableHeaderCell>Clayain </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Father Occupation :</CTableDataCell>
                                        <CTableHeaderCell>Designer </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>E-mail :</CTableDataCell>
                                        <CTableHeaderCell>Johnsoni@gmail.com </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Admission Date :</CTableDataCell>
                                        <CTableHeaderCell>01/01/2023 </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Roll No. :</CTableDataCell>
                                        <CTableHeaderCell>23 </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Aadhar Card Number :</CTableDataCell>
                                        <CTableHeaderCell>3333 4444 4444 </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Nationality :</CTableDataCell>
                                        <CTableHeaderCell> Indian</CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Mother Tongue :</CTableDataCell>
                                        <CTableHeaderCell> Telugu</CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Place Of Birth :</CTableDataCell>
                                        <CTableHeaderCell>India </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Address :</CTableDataCell>
                                        <CTableHeaderCell>India,Earth,553543 </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Class :</CTableDataCell>
                                        <CTableHeaderCell> Lkg</CTableHeaderCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </CCardBody>
                    </CCol>

                </CRow>
            </CCard>
            {/* // fee details... */}

            <CCard className="mt-3 mb-4">
                <CCardTitle>
                    Fee Details
                </CCardTitle>
            </CCard>
        </div>
    )
}

export default StudentDetails;
