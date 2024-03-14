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

const RegistrationForm = () => {
  const [visible, setVisible] = useState(false)
  const [activeStudent, setActiveStudent] = useState(true)
  const [activeParent, setActiveParent] = useState(false)
  const [activeHealth, setActiveHealth] = useState(false)
  const [parent, setParent] = useState(null);
  const [student, setStudent] = useState(null);

  //   const formSubmitHandler = async (e) => {

  //     e.preventDefault();

  //     try {
  //       const res = await fetch("http://localhost:8081/student/reg", {
  //         method: "POST",
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(
  //           {
  //             student: {
  //               firstName: formData.firstName,
  //               middleName: formData.middleName,
  //               lastName: formData.lastName
  //             },
  //             parent: {
  //               fatherName: formData.fatherName,
  //               motherName: formData.motherName
  //             }
  //           }
  //         )
  //       })
  //     } catch (err) {
  //       console.log(err)
  //     }

  //   }

  const noHandler = () => {
    setVisible(false);
    setActiveParent(true)

  }
  const yesHandler = async () => {
    const section = document.getElementById('search');
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setVisible(true);
    setActiveParent(false)

  }
  const fetchStudentParentData = async () => {
    try {
      const fetchStudentsResponse = await fetch('http://localhost:8080/parent/existstudent?studentId=352');
      const studentsData = await fetchStudentsResponse.json();
      setParent(studentsData)
    } catch (error) {
      console.error('Error fetching parent:', error);
    }
    setActiveParent(true);
  }
  const parentDataHandler = (data) => {
    setParent(data)
  }
  const studentDataHandler = (data) => {
    setStudent(data)
  }
  const registrationFormSubmit = (e) => {
    e.preventDefault()
    console.log(student);
    console.log(parent);

  }
  const optionHandler = (e) => {
    const name = e.target.value;
    if (name === "student") {
      setActiveStudent(true)
      setActiveHealth(false)
      setActiveParent(false)

    }
    if (name === "parent") {
      setActiveStudent(false)
      setActiveHealth(false)
      setActiveParent(true)
    }
    if (name === "health") {
      setActiveStudent(false)
      setActiveHealth(true)
      setActiveParent(false)
    }
  }
  return (
    <CForm color='success'>
      <CCard className='p-4 shadow'>
        <div>
          <CAccordion activeItemKey={1} color='success' className='border-none'>
            <CAccordionItem itemKey={1} className='mt-4 mb-4 border-none'>
              <CAccordionHeader>Student Information</CAccordionHeader>
              <CAccordionBody className='border-none'>
              <CCard className='p-4'>
                <StudentForm studentData={studentDataHandler} />
                <CCol style={{
                  marginTop: "10px"
                }}>
                  <h6>Your Sibiling In This School</h6>
                  <CButton color="success" variant="outline"
                    className="mb-4"
                    onClick={yesHandler}
                    style={{
                      marginRight: "10px"
                    }}
                  >Yes</CButton>
                  <CButton color="danger" variant="outline"
                    onClick={noHandler}
                    className="mb-4"
                  >No</CButton>
                </CCol>
                </CCard>
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem className='border round'>
              <CAccordionHeader>Parent Information</CAccordionHeader>
              <CAccordionBody>
              <CCard className='p-4'>
                <ParentForm parentData={parentDataHandler} updataParentData={parent} />
              </CCard>
              </CAccordionBody>
            </CAccordionItem>

            <CAccordionItem className='mt-4 border round'>
              <CAccordionHeader>Health Information</CAccordionHeader>
              <CAccordionBody>
              <CCard className='p-4'>
                <CFormInput type='text' label="Blood Group" />
                </CCard>
              </CAccordionBody>
            </CAccordionItem>
          </CAccordion>
          <CButton type='submit'
            onClick={registrationFormSubmit}
            className='mt-4'
            disabled={false}>Submit</CButton>
        </div>
      </CCard>
    </CForm>
  )
}

export default RegistrationForm;
