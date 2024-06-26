import { CCol, CFormInput, CFormSelect, CRow } from "@coreui/react";
import React, { useState } from "react";
import propTypes from "prop-types";
import { useSelector } from "react-redux";
import StudentDetailsSlice from "src/store/StudentDetailsSlice";

const StudentForm = ({ studentData }) => {

  const [error, setError] = useState({})

  const studentDetails = useSelector(state => state.StudentDetailsSlice.studentDetails)

console.log(studentDetails,studentDetails?.firstName,"these r student form....")
  
const [formData, setFormData] = useState({
    firstName: studentDetails?.firstName,
    middleName:  studentDetails?.middleName,
    lastName:  studentDetails?.lastName,
    birthDate:  studentDetails?.birthDate,
    gender:  studentDetails?.gender,
    identityProof:  studentDetails?.identityProof,
    nationality:  studentDetails?.nationality,
    motherTongue:  studentDetails?.motherTongue,
    address1:  studentDetails?.address1,
    address2:  studentDetails?.address2,
    city: studentDetails?.city,
    state: studentDetails?.state,
    country: studentDetails?.country,
    pinCode: studentDetails?.pinCode,
    grade:  studentDetails?.grade,
    photo:  studentDetails?.photo,
    mobile:  studentDetails?.mobile,
  })
  const handlerChangeInput = (e) => {
    const { name, value, files, type } = e.target;
    let newError = {};
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0]
      })
    }
    setFormData({
      ...formData,
      [name]: value
    })
  }
  studentData(formData);

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        <div className="col">
          <label htmlFor="firstName" className="form-label">First Name<span className="text-danger">*</span></label>
          <input type="text" className="form-control mb-4" id="firstName" name="firstName" value={formData.firstName} onChange={handlerChangeInput} />
        </div>
        <div className="col">
          <label htmlFor="middleName" className="form-label">Middle Name</label>
          <input type="text" className="form-control mb-4" id="middleName" name="middleName" value={formData.middleName} onChange={handlerChangeInput} />
        </div>
        <div className="col">
          <label htmlFor="lastName" className="form-label">Last Name<span className="text-danger">*</span></label>
          <input type="text" className="form-control mb-4" id="lastName" name="lastName" value={formData.lastName} onChange={handlerChangeInput} />
        </div>
        <div className="col">
          <label htmlFor="birthDate" className="form-label">Date of Birth <span className="text-danger">*</span></label>
          <input type="date" className="form-control mb-4" id="birthDate" name="birthDate" value={formData.birthDate} onChange={handlerChangeInput} />
        </div>
        <div className="col">
          <label htmlFor="gender" className="form-label">Gender <span className="text-danger">*</span></label>
          <select className="form-select mb-4" id="gender" name="gender" value={formData.gender} onChange={handlerChangeInput} >
            <option>Please Select Gender</option>
            <option>MALE</option>
            <option>FEMALE</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="identityProof" className="form-label">Aadhar Card No. <span className="text-danger">*</span></label>
          <input type="tel" className="form-control mb-4" id="identityProof" name="identityProof" value={formData.identityProof} onChange={handlerChangeInput} />
        </div>
        <div className="col">
          <label htmlFor="nationality" className="form-label">Nationality</label>
          <input type="text" className="form-control mb-4" id="nationality" name="nationality" value={formData.nationality} onChange={handlerChangeInput} />
        </div>
        <div className="col">
          <label htmlFor="motherTongue" className="form-label">Mother Tongue</label>
          <input type="text" className="form-control mb-4" id="motherTongue" name="motherTongue" value={formData.motherTongue} onChange={handlerChangeInput} />
        </div>
        <div className="col">
          <label htmlFor="address1" className="form-label">Address 1 <span className="text-danger">*</span></label>
          <input type="text" className="form-control mb-4" id="address1" name="address1" value={formData.address1} onChange={handlerChangeInput} />
        </div>
        <div className="col">
          <label htmlFor="address2" className="form-label">Address 2</label>
          <input type="text" className="form-control mb-4" id="address2" name="address2" value={formData.address2} onChange={handlerChangeInput} />
        </div>
        <div className="col">
          <label htmlFor="city" className="form-label">City  <span className="text-danger">*</span></label>
          <input type="text" className="form-control mb-4" id="city" name="city" value={formData.city} onChange={handlerChangeInput} />
        </div>
        <div className="col">
          <label htmlFor="state" className="form-label">State  <span className="text-danger">*</span></label>
          <input type="text" className="form-control mb-4" id="state" name="state" value={formData.state} onChange={handlerChangeInput} />
        </div>
        <div className="col">
          <label htmlFor="country" className="form-label">Country  <span className="text-danger">*</span></label>
          <input type="text" className="form-control mb-4" id="country" name="country" value={formData.country} onChange={handlerChangeInput} />
        </div>
        <div className="col">
          <label htmlFor="pinCode" className="form-label">Pin Code  <span className="text-danger">*</span></label>
          <input type="text" className="form-control mb-4" id="pinCode" name="pinCode" value={formData.pinCode} onChange={handlerChangeInput} />
        </div>
        <div className="col">
          <label htmlFor="mobile" className="form-label">Phone Number <span className="text-danger">*</span></label>
          <input type="tel" className="form-control mb-4" id="mobile" name="mobile" value={formData.mobile} onChange={handlerChangeInput} />
        </div>
        <div className="col">
          <label htmlFor="grade" className="form-label">Class <span className="text-danger">*</span></label>
          <select className="form-select mb-4" id="grade" name="grade" value={formData.grade} onChange={handlerChangeInput}>
            <option>Please Select Class</option>
            <option>1st</option>
            <option>2nd</option>
            <option>3rd</option>
            <option>4th</option>
            <option>5th</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="photo" className="form-label">Upload The Student Photo</label>
          <input type="file" className="form-control mb-4" id="photo" name="photo" onChange={handlerChangeInput} />
        </div>
      </div>
    </div>

  )
}

StudentForm.propTypes = {
  studentData: propTypes.any.isRequired
}

export default StudentForm;

