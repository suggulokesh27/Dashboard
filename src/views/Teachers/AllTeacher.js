import React from "react";
import { CRow, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText } from "@coreui/react";
import { Link } from "react-router-dom";
import imagePic from "../../assets/images/avatars/1.jpg"

const teacherData = [
    {
        fName: "John",
        lName: "Doe",
        dob: "1999-05-15",
        address: "123 Main Street, Cityville, State",
        roll: 1001,
        subject: "Telugu"
    },
    {
        fName: "Jane",
        lName: "Smith",
        dob: "2000-02-28",
        address: "456 Oak Avenue, Townsville, State",
        roll: 1002,
        subject: "Science"
    },
    {
        fName: "Bob",
        lName: "Johnson",
        dob: "1998-11-10",
        address: "789 Pine Road, Villageton, State",
        roll: 1003,
        subject: "Social"
    },
    {
        fName: "Emily",
        lName: "Williams",
        dob: "2001-08-20",
        address: "987 Cedar Lane, Hamletville, State",
        roll: 1004,
        subject: "Maths"
    },
    {
        fName: "Alex",
        lName: "Brown",
        dob: "2002-04-05",
        address: "654 Birch Street, Settlement City, State",
        roll: 1005,
        subject: "English"
    }
];

const AllTeacher = () => {
    return(
        <>
        <CRow>
            {teacherData?.map((data, index) => (
                <CCol md={3} xs={{ cols: 1 }} lg={{cols:4}} key={index} >
                    <Link to={`/parent/${index}`} style={{textDecoration: "none"}}>
                        <CCard className="h-100">
                            <CCardImage orientation="top" src={imagePic} />
                            <CCardBody>
                                <CCardTitle>{`${data.fName} ${data.lName}`}</CCardTitle>
                                <CCardText>
                                    <h6>{data.subject}</h6>
                                    <p>{data.address}</p>
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

export default AllTeacher;