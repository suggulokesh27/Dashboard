import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    CCollapse,
    CCol,
    CFormInput,
    CButton,
} from '@coreui/react';

const SearchStudent = (props) => {
    const [students, setStudents] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const fetchStudentsResponse = await fetch('http://localhost:8081/student/getstudents');
                const studentsData = await fetchStudentsResponse.json();
                setStudents(studentsData);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    const filterValue = students?.filter((item) =>
        item.middleName?.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <div>
            <CCollapse visible>
                <CCol md={4}>
                    <CFormInput
                        type="search"
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
                        name="address"
                        id="address"
                        label="Student"
                    />
                </CCol>
            </CCollapse>
            {searchValue.length > 3 &&

                (filterValue.length !== 0 ?
                    filterValue.map((student, index) => (
                        <div key={index}>
                            <CButton variant='outline' onClick={props.onClick}>
                                {student.middleName}
                            </CButton>
                        </div>
                    )) :
                    <p>
                        Name is not matched
                    </p>
                )}
        </div>
    );
};

SearchStudent.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default SearchStudent;

