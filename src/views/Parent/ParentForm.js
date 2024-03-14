import { CCol, CForm, CFormInput, CFormSelect, CRow } from "@coreui/react";
import React, { useState } from "react"
import propTypes from "prop-types"

const ParentForm = ({parentData,updataParentData}) =>{
console.log(updataParentData);
    const [ formData, setFormData ] = useState({
        fatherName: "",
        fatherDOB: "",
        fatherAadharCardNo: "",
        fatherQulification: "",
        fatherOccupation: "",
        fatherAnnualIncome: "",
        fatherPhone: "",
        fatherEmail: "",
    
        motherName: "",
        motherDOB: "",
        motherAadharCardNo: "",
        motherQulification: "",
        motherOccupation: "",
        motherAnnualIncome: "",
        motherPhone: "",
        motherEmail: "",
    });

    const handlerChangeInput = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }
    parentData(formData);

    return(
        <CRow>
          <CCol md={6}>
            <CFormInput type="text"
              onChange={handlerChangeInput}
              value={formData.fatherName}
              name='fatherName'
              id="fatherName" label="Father Name"  className='mb-4' />
            <CFormInput type="date"
              onChange={handlerChangeInput}
              value={formData.fatherDOB}
              name='fatherDOB'
              id="fatherDOB" label="Date of Birth" className='mb-4' />
            <CFormInput type="text"
              onChange={handlerChangeInput}
              value={formData.fatherAadharCardNo}
              name='fatherAadharCardNo'
              id="fatherAadharCardNo" label="Aadhar No." className='mb-4' />
            <CFormInput type="text"
              onChange={handlerChangeInput}
              value={formData.fatherQulification}
              name='fatherQulification'
              id="fatherQulification" label="Qualification" className='mb-4' />
            <CFormInput type="text"
              onChange={handlerChangeInput}
              value={formData.fatherOccupation}
              name='fatherOccupation'
              id="fatherOccupation" label="Occupation" className='mb-4' />
            <CFormInput type="text"
              onChange={handlerChangeInput}
              value={formData.fatherAnnualIncome}
              name='fatherAnnualIncome'
              id="fatherAnnualIncome" label="Annual Income" className='mb-4' />
            <CFormInput type="tel"
              onChange={handlerChangeInput}
              value={formData.fatherPhone}
              name='fatherPhone'
              id="fatherPhone" label="Mobile No." className='mb-4' />
            <CFormInput type="email"
              onChange={handlerChangeInput}
              value={formData.fatherEmail}
              name='fatherEmail'
              id="fatherEmail" label="E-mail" className='mb-4' />
          </CCol>
          <CCol md={6} col >
            <CFormInput type="text"
              onChange={handlerChangeInput}
              value={formData.motherName}
              name='motherName'
              id="motherName" label="Mother Name" className='mb-4' />
            <CFormInput type="date"
              onChange={handlerChangeInput}
              value={formData.motherDOB}
              name='motherDOB'
              id="motherDOB" label="Date of Birth" className='mb-4' />
            <CFormInput type="text"
              onChange={handlerChangeInput}
              value={formData.mAadhar}
              name='motherAadharCardNo'
              id="motherAadharCardNo" label="Aadhar Card No." className='mb-4' />
            <CFormInput type="text"
              onChange={handlerChangeInput}
              value={formData.motherQulification}
              name='motherQulification'
              id="motherQulification" label="Qualification" className='mb-4' />
            <CFormInput type="text"
              onChange={handlerChangeInput}
              value={formData.motherOccupation}
              name='motherOccupation'
              id="motherOccupation" label="Occupation" className='mb-4' />
            <CFormInput type="text"
              onChange={handlerChangeInput}
              value={formData.motherAnnualIncome}
              name='motherAnnualIncome'
              id="motherAnnualIncome" label="Annual Income" className='mb-4' />
            <CFormInput type="tel"
              onChange={handlerChangeInput}
              value={formData.motherPhone}
              name='motherPhone'
              id="motherPhone" label="Mobile No." className='mb-4' />
            <CFormInput type="email"
              onChange={handlerChangeInput}
              value={formData.motherEmail}
              name='motherEmail'
              id="motherEmail" label="E-mail" className='mb-4' />
          </CCol>
        </CRow>
    )
}

ParentForm.propTypes = {
    parentData : propTypes.any.isRequired,
    updataParentData : propTypes.any.isRequired,
}

export default ParentForm;