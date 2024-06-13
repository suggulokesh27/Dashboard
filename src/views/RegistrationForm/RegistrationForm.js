import React, { useState } from 'react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CButton,
  CCard,
  CCol,
  CForm,
  CFormInput,

} from '@coreui/react'
import 'bootstrap/dist/css/bootstrap.min.css';

import StudentForm from '../Students/StudentForm';
import ParentForm from '../Parent/ParentForm';
import { UseCreate } from 'src/services/api';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [student, setStudent] = useState(null);

  const navigate = useNavigate();
 
  const studentDataHandler = (data) => {
    setStudent(data)
  }
  const RegistrationFormSubmit = async(e) => {
    e.preventDefault()
    try{
      const res = await UseCreate("http://localhost:8081/api/v1/students/register",student)
      console.log(res);
    navigate(`/students/${res.status}`)
    }catch(err){
      console.log(err);
    }

  }
  
  return (
    <CForm color='success' fluid className='min-vh-100 d-flex align-items-center justify-content-center'>
      <CCard className='p-4 shadow'>
        <StudentForm studentData={studentDataHandler}/>
        <div className="row">
        <div className="col">
          <button type='submit' onClick={RegistrationFormSubmit} className='btn btn-primary w-100'>Submit</button>
        </div>
      </div>
      </CCard>
      
    </CForm>
  )
}

export default RegistrationForm;
