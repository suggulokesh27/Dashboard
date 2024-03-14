import React from "react";

import {
    CButton,
    CCol,
    CForm,
    CFormCheck,
    CFormInput,
    CFormSelect,
  } from '@coreui/react'

  
const TeacherForm = () => {
    return(
        <>
         <CForm className="row g-3">
        <CCol md={6}>
          <CFormInput type="text" id="fName" label="First Name" />
        </CCol>
        <CCol md={6}>
          <CFormInput type="text" id="lName" label="Last Name" />
        </CCol>
        <CCol md={4}>
          <CFormSelect id="gender" label="Gender">
            <option>Please Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </CFormSelect>
        </CCol>
        <CCol md={6}>
          <CFormInput type="text" id="edu" label="Education" />
        </CCol>
        <CCol md={6}>
          <CFormInput type="date" id="dob" label="Date Of birth" />
        </CCol>
        <CCol md={6}>
          <CFormInput type="tel" id="phone" label="Phone Number" />
        </CCol>
        <CCol md={6}>
          <CFormInput type="text" id="address" label="Address" />
        </CCol>
        <CCol xs={12}>
          <CButton color='dark' type="submit">Submit</CButton>
        </CCol>
      </CForm>
        </>
    )
}


export default TeacherForm;