import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CImage, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import imagePic from '../../assets/images/avatars/childImage.jpeg';
import { Link, useLocation } from "react-router-dom";
import { useGet } from "src/services/api";

// const studentData = [
//     {
//         fName: "John",
//         lName: "Doe",
//         dob: "1999-05-15",
//         address: "123 Main Street, Cityville, State",
//         roll: 1001,
//         class: "12th Grade",
//         gender: "Male"
//     },
//     {
//         fName: "Jane",
//         lName: "Smith",
//         dob: "2000-02-28",
//         address: "456 Oak Avenue, Townsville, State",
//         roll: 1002,
//         class: "11th Grade",
//         gender: "Female"
//     },
//     {
//         fName: "Bob",
//         lName: "Johnson",
//         dob: "1998-11-10",
//         address: "789 Pine Road, Villageton, State",
//         roll: 1003,
//         class: "10th Grade",
//         gender: "Male"
//     },
//     {
//         fName: "Emily",
//         lName: "Williams",
//         dob: "2001-08-20",
//         address: "987 Cedar Lane, Hamletville, State",
//         roll: 1004,
//         class: "9th Grade",
//         gender: "Female"
//     },
//     {
//         fName: "Alex",
//         lName: "Brown",
//         dob: "2002-04-05",
//         address: "654 Birch Street, Settlement City, State",
//         roll: 1005,
//         class: "11th Grade",
//         gender: "Male"
//     }
// ];

const Class_I = () => {

    const [studentData, setStudentData] = useState([])

    const FetchStudents = async() => {
        const res = await useGet("http://localhost:8081/api/v1/students");
        console.log(res);
        setStudentData(res);
    }

    useEffect(()=>{
        FetchStudents()
    },[])

    return (
        <>
            <CRow>
                {studentData?.map((data, index) => (
                    <CCol md={3} xs={{ cols: 1 }} lg={{cols:4}} key={index} >
                        <Link to={`/students/${data.id}`} style={{textDecoration: "none"}}>
                            <CCard className="h-100">
                                <CCardImage orientation="top" src={imagePic} />
                                <CCardBody>
                                    <CCardTitle>{`${data.firstName} ${data.lastName}`}</CCardTitle>
                                    <CCardText>
                                        <h6>{data.grade}</h6>
                                        <p>{data.birthDate}</p>
                                    </CCardText>
                                </CCardBody>
                            </CCard>
                        </Link>
                    </CCol>
                ))}

            </CRow>
        </>
    )
}

export default Class_I;