import { CBadge, CButton, CCard, CCardBody, CCardTitle, CCol, CForm, CFormCheck, CFormInput, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import React, { useState } from "react"

const usersData = [
  {
    roll: 1,
    name: 'Samppa Nori',
    class: '1',
    section: 'A',
    totalAmount: '20000',
    status: 'Paid',
    message: "Send A Message",
    lastPay: '20/02/2024',

  },
  {
    roll: 2,
    name: 'Estavan Lykos',
    class: '2',
    section: 'B',
    totalAmount: '43000',
    status: 'Unpaid',
    message: "Send A Message",
    lastPay: '20/02/2024',
  },
  {
    roll: 3,
    name: 'Chetan Mohamed',
    class: '2',
    section: 'B',
    totalAmount: '34888',
    status: 'Unpaid',
    message: "Send A Message",
    lastPay: '20/02/2024',
  },
  {
    roll: 4,
    name: 'Derick Maximinus',
    class: '4',
    section: 'A',
    totalAmount: '89000',
    feeDue : "3432",
    paidAmount : "34242",
    status: 'Unpaid',
    message: "Send A Message",
    lastPay: '20/02/2024',
  },
  {
    roll: 5,
    name: 'Frrollerik Dávroll',
    class: '5',
    section: 'B',
    totalAmount: '23000',
    feeDue : "3432",
    paidAmount : "34242",
    status: 'Paid',
    message: "Send A Message",
    lastPay: '20/02/2024',
  },
  {
    roll: 6,
    name: 'Yiorgos Avraamu',
    class: '6',
    section: 'A',
    totalAmount: '89000',
    feeDue : "3432",
    paidAmount : "34242",
    status: 'Paid',
    message: "Send A Message",
    lastPay: '20/02/2024',
  },
  {
    roll: 7,
    name: 'Avram Tarasios',
    class: '7',
    section: 'A',
    totalAmount: '23000',
    feeDue : "3432",
    paidAmount : "34242",
    status: 'Unpaid',
    message: "Send A Message",
    lastPay: '20/02/2024',
  },
  {
    roll: 8,
    name: 'Quintin Ed',
    class: '8',
    section: 'A',
    totalAmount: 'Admin',
    feeDue : "3432",
    paidAmount : "34242",
    status: 'Unpaid',
    message: "Send A Message",
    lastPay: '20/02/2024',
  },
  {
    roll: 9,
    name: 'Enéas Kwadwo',
    class: '9',
    section: 'B',
    totalAmount: '89000',
    feeDue : "3432",
    paidAmount : "34242",
    status: 'Unpaid',
    message: "Send A Message",
    lastPay: '20/02/2024',
  },
  {
    roll: 10,
    name: 'Agapetus Tadeáš',
    class: '10',
    section: 'C',
    totalAmount: '23000',
    feeDue : "3432",
    paidAmount : "34242",
    status: 'Unpaid',
    message: "Send A Message",
    lastPay: '20/02/2024',
  },
  {
    roll: 11,
    name: 'Carwyn Fachtna',
    class: '11',
    section: 'C',
    totalAmount: '89000',
    feeDue : "3432",
    paidAmount : "34242",
    status: 'Paid',
    message: "Send A Message",
    lastPay: '20/02/2024',
  },
  {
    roll: 12,
    name: 'Nehemiah Tatius',
    class: '12',
    section: 'A',
    totalAmount: '23000',
    feeDue : "3432",
    paidAmount : "34242",
    status: 'Unpaid',
    message: "Send A Message",
    lastPay: '20/02/2024',
  },
  {
    roll: 13,
    name: 'Ebbe Gemariah',
    class: '13',
    section: 'A',
    totalAmount: 'Admin',
    feeDue : "3432",
    paidAmount : "34242",
    status: 'Paid',
    message: "Send A Message",
    lastPay: '20/02/2024',
  },
  {
    roll: 14,
    name: 'Eustorgios Amulius',
    class: '14',
    section: 'C',
    totalAmount: '89000',
    feeDue : "3432",
    paidAmount : "34242",
    status: 'Unpaid',
    message: "Send A Message",
    lastPay: '20/02/2024',
  },
  {
    roll: 15,
    name: 'Leopold Gáspár',
    class: '15',
    section: 'A',
    totalAmount: '23000',
    feeDue : "3432",
    paidAmount : "34242",
    status: 'Paid',
    message: "Send A Message",
    lastPay: '20/02/2024',
  },
]

const paidCandidates = usersData.filter((data) => data.status === "Paid");
const unpaidCandidates = usersData.filter((data) => data.status === "Unpaid");
let seperateCandidates = [...unpaidCandidates, ...paidCandidates];


const FeeDetails = () => {
  const [checked, setChecked] = useState(false);
  const [searchCandidate, setSearchCandidate] = useState(seperateCandidates);
  const [searchValue, setSearchValue] = useState({
    roll: "",
    name: "",
    class: ""
  });

  const checkedHandler = () => {
    setChecked(!checked);
  }

  const searchHandler = (e) => {
    const { name, value } = e.target;
    setSearchValue(
      {
        ...searchValue,
        [name]: value
      })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchValue.roll !== "") {
      console.log(searchValue.roll);
      const filterValue = usersData.filter((data) => {
        return data.roll == searchValue.roll.trim()
      });
      setSearchCandidate(filterValue)

    }else setSearchCandidate(seperateCandidates)
    setSearchValue({
      roll: "",
      name: "",
      class: ""
    })
  }
  console.log("outside", seperateCandidates)
  return (
    <>
      <h2>All Fees Collection</h2>
      <CCard className="p-3 overflow-auto">
        <CForm md={3} onSubmit={submitHandler} >
          <CRow>
            <CCol md={3} className="mb-2">
              <CFormInput placeholder="Search By Roll Number"
                name="roll" value={searchValue.roll}
                onChange={searchHandler}
              />
            </CCol>
            <CCol md={3} className="mb-2">
              <CFormInput placeholder="Search By Name"
                name="name" value={searchValue.name}
                onChange={searchHandler} />
            </CCol>
            <CCol md={3} className="mb-2">
              <CFormInput placeholder="Search By class"
                name="class" value={searchValue.class}
                onChange={searchHandler} />
            </CCol>
            <CCol>
              <CButton type="submit">Search</CButton>
            </CCol>
          </CRow>
        </CForm>

        <CTable hover border={1} className="mt-3 text-center" >
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">
                <CFormCheck checked={checked} onChange={checkedHandler} />
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">Roll</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">class</CTableHeaderCell>
              <CTableHeaderCell scope="col">section</CTableHeaderCell>
              <CTableHeaderCell scope="col">Paid</CTableHeaderCell>
              <CTableHeaderCell scope="col">Fee Due</CTableHeaderCell>
              <CTableHeaderCell scope="col">Total totalAmount</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              <CTableHeaderCell scope="col">Message</CTableHeaderCell>
              <CTableHeaderCell scope="col">Last Pay</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          {searchCandidate && searchCandidate?.map((student) => (
            <CTableBody key={student.roll}>
              <CTableRow>
                <CTableHeaderCell scope="col">
                  <CFormCheck
                    defaultChecked={student.status === "Unpaid" && checked}
                    className="cursor"
                  />
                </CTableHeaderCell>
                <CTableHeaderCell scope="row">{student.roll}</CTableHeaderCell>
                <CTableDataCell>{student.name}</CTableDataCell>
                <CTableDataCell>{student.class}</CTableDataCell>
                <CTableDataCell>{student.section}</CTableDataCell>
                <CTableDataCell>{student.totalAmount}</CTableDataCell>
                <CTableDataCell >
                  <CBadge color={student.status == "Paid" ? "success" : "danger"} className="p-2">{student.status}</CBadge>
                </CTableDataCell>
                <CTableDataCell>
                  <CBadge color="info" className="p-2 cursor"
                  >{student.message}</CBadge>
                </CTableDataCell>
                <CTableDataCell>{student.lastPay}</CTableDataCell>
              </CTableRow>
            </CTableBody>
          ))}

        </CTable>

      </CCard>
    </>
  )
}

  