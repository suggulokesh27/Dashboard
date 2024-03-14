import { CCard, CCardBody, CCardText, CHeader, CImage, CTable, CTableBody, CTableDataCell, CTableHeaderCell, CTableRow } from "@coreui/react";
import React from "react";


const ParentDetails = () => {
    return(
        <div>
            <CCard>
                <CHeader>About Parent</CHeader>
                <CCardBody>
                    <CImage src="" alt="parent" />
                    <CHeader>Parent Name</CHeader>
                    <CCardText>Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale word moun taiery.Aliquam erat volutpaturabiene natis massa sedde sodale word moun taiery.</CCardText>
                    <CTable>
                        <CTableBody>
                            <CTableRow>
                                <CTableDataCell>Name :</CTableDataCell>
                                <CTableHeaderCell>Father Name</CTableHeaderCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </div>
    )
}