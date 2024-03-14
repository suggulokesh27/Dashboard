import { CCol, CFormInput, CFormSelect, CRow } from "@coreui/react";
import React, { useState } from "react";
import propTypes from "prop-types";


const StudentForm = ({studentData}) => {

  const [error, setError] = useState({})

    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        aadharCardNo: "",
        nationality: "",
        motherTongue: "",
        placeOfBirth: "",
        address: "",
        class: "",
        photo: "",
    })
    const handlerChangeInput = (e) => {
      const  {name,value, files, type } = e.target;
      let newError = {};
      if(type === "file"){
        setFormData({
            ...formData,
            [name] : files[0],
        })
      }
      setFormData({
        ...formData,
        [name] : value
    })
    if(!formData.firstName.trim()){
      newError.firstName = "first is required"
    }

    if(Object.keys(newError).length === 0){
      console.log(formData);
    }else{
      setError(newError);
    }

    }

    studentData(formData);

    return(
        <CRow sm={3}>
        <CCol md={3}
        style={{
          font:"small-caption",
          fontSize:"15px"
        }}>
          <CFormInput type="text"
            onChange={handlerChangeInput}
            value={formData.firstName}
            name='firstName'
            id="firstName" label="First Name"
            className="mb-4"/>
        </CCol>
        {error.firstName && <span>{error.firstName}</span>}
        <CCol md={3}
        style={{
          font:"small-caption",
          fontSize:"15px"}} >
          <CFormInput type="text"
            onChange={handlerChangeInput}
            value={formData.middleName}
            name='middleName'
            id="middleName" label="Middle Name" className="mb-4"/>
        </CCol>
        <CCol md={3}  style={{
          font:"small-caption",
          fontSize:"15px"}}>
          <CFormInput type="text"
            onChange={handlerChangeInput}
            value={formData.lastName}
            name='lastName'
            id="lastName" label="Last Name" className="mb-4"/>
        </CCol>
        <CCol md={3}  style={{
          font:"small-caption",
          fontSize:"15px"}}>
          <CFormInput type="date"
            onChange={handlerChangeInput}
            value={formData.dateOfBirth}
            name='dateOfBirth'
            id="dateOfBirth" label="Date Of birth" className="mb-4"/>
        </CCol>
        <CCol md={3}  style={{
          font:"small-caption",
          fontSize:"15px"}}>
          <CFormSelect
            onChange={handlerChangeInput}
            value={formData.gender}
            name='gender'
            id="gender" label="Gender">
            <option>Please Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </CFormSelect>
        </CCol>
        <CCol md={3}  style={{
          font:"small-caption",
          fontSize:"15px"}}>
          <CFormInput type="tel"
            onChange={handlerChangeInput}
            value={formData.aadharCardNo}
            name='aadharCardNo'
            id="aadharCardNo" label="Aadhar Card No. " className="mb-4"/>
        </CCol>
        <CCol md={3}  style={{
          font:"small-caption",
          fontSize:"15px"}}>
          <CFormInput type="text"
            onChange={handlerChangeInput}
            value={formData.nationality}
            name='nationality'
            id="nationality" label="Nationality" className="mb-4"/>
        </CCol>
        <CCol md={3}  style={{
          font:"small-caption",
          fontSize:"15px"}}>
          <CFormInput type="text"
            onChange={handlerChangeInput}
            value={formData.motherTongue}
            name='motherTongue'
            id="motherTongue" label="Mother Tongue" className="mb-4"/>
        </CCol>
        <CCol md={3} style={{
          font:"small-caption",
          fontSize:"15px"}}>
          <CFormInput type="text"
            onChange={handlerChangeInput}
            value={formData.placeOfBirth}
            name='placeOfBirth'
            id="placeOfBirth" label="Place of Birth" className="mb-4"/>
        </CCol>
        <CCol md={3}  style={{
          font:"small-caption",
          fontSize:"15px"}}>
          <CFormInput type="text"
            onChange={handlerChangeInput}
            value={formData.address}
            name='address'
            id="address" label="Address for Communcation" className="mb-4"/>
        </CCol>
        <CCol md={3}  style={{
          font:"small-caption",
          fontSize:"15px"}}>
          <CFormSelect
            onChange={handlerChangeInput}
            value={formData.class}
            name='class'
            id="class" label="Class">
            <option>Please Select Class</option>
            <option>1st</option>
            <option>2nd</option>
            <option>3rd</option>
            <option>3th</option>
            <option>5th</option>
          </CFormSelect>
        </CCol>

        <CCol md={3}  style={{
          font:"small-caption",
          fontSize:"15px"}}>
          <CFormInput type="file"
            onChange={handlerChangeInput}
            //  value ={fileName}
            name='photo'
            id="photo" label="Upload The Student Photo" className="mb-4"/>
        </CCol>
        </CRow>
    )
}

StudentForm.propTypes = {
    studentData : propTypes.any.isRequired
}

export default StudentForm;