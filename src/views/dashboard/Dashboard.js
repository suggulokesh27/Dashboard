import React from 'react'
import "../../scss/style.scss"

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CContainer,
  CProgress,
  CRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'New Joiner', value: "29%", percent: 29, color: 'info' },
    { title: 'Leave', value: "2%", percent: 2, color: 'danger' },
    {
      title: 'Total Students',
      value: 505,
      percent: 505,
      color: 'success',
    },
  ]

  function customTooltip(context) {
    const { datasetIndex } = context.tooltip;
    const visibleDatasets = [datasetIndex];

    return {
      opacity: 0.7,
      filter: function (item, data) {
        return visibleDatasets.indexOf(item.datasetIndex) !== -1;
      },
    };
  }

  const progressGroupExample1 = [
    { title: 'Class I', paid: 34, due: 78 },
    { title: 'Class II', paid: 56, due: 94 },
    { title: 'Class III', paid: 12, due: 67 },
    { title: 'Class IV', paid: 43, due: 91 },
    { title: 'Class V', paid: 22, due: 73 },
    { title: 'Class VI', paid: 53, due: 82 },
    { title: 'Class VII', paid: 9, due: 69 },
    { title: 'Class VIII', paid: 9, due: 69 },
    { title: 'Class IX', paid: 9, due: 69 },
    { title: 'Class X', paid: 9, due: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>
      {/* <WidgetsDropdown /> */}
      <Link to="/register/students" className="d-flex justify-content-end text-decoration-none">
  <CButton className='mb-3 custom-bg-color'>
    Add Student
  </CButton>
</Link>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Joining Details
              </h4>
              <div className="small text-medium-emphasis">
                2024
              </div>
            </CCol>
          </CRow>

          {/* ****************** School Student Graph  **************************** */}
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
              datasets: [
                {
                  label: 'Joining Students',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [121, 50, 100, 87, 34, 44, 33, 33, 55, 77, 88, 233],
                  fill: true,
                },
                // {
                //   label: 'Leaving Students',
                //   backgroundColor: 'transparent',
                //   borderColor: getStyle('--cui-danger'),
                //   pointHoverBackgroundColor: getStyle('--cui-danger'),
                //   borderWidth: 2,
                //   data: [0, 30, 20, 30, 40,44,55,33,66,33,66,1],
                // },
                // {
                //   label: 'Total Students',
                //   backgroundColor: 'transparent',
                //   borderColor: getStyle('--cui-success'),
                //   pointHoverBackgroundColor: getStyle('--cui-success'),
                //   borderWidth: 1,
                //   borderDash: [8, 5],
                //   data: [121, 233, 322, 433, 405],
                // },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  external: customTooltip,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(100 / 5),
                    max: 100,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  display: true,
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>


        <CCardFooter>
          <CRow xs={{ cols: 3 }} md={{ cols: 3 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value}
                </strong>
                <CProgress
                  thin
                  className="mt-2"
                  color={item.color}
                  value={item.percent}
                />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
      {/* ******************************************************************** */}

      {/* <WidgetsBrand withCharts /> */}

      {/* ****************** Fee Details ********************************* */}
      <CRow>
        <CCol>
          <CCard className="mb-4">
            <CCardHeader>Fee Details</CCardHeader>
            <CCardBody>
              <CContainer style={{
                backgroundColor: "white"
              }}>
                <CRow className="align-items-center" >
                  <CCol>
                    <CRow>
                      <CCol>
                        <div className="border-start border-start-4 border-start-info py-1 px-3">
                          <div className="text-medium-emphasis small">
                            Paid Candidates
                          </div>
                          <div className="fs-5 fw-semibold">40</div>
                        </div>
                      </CCol>
                    </CRow>
                    <hr className="mt-0" />

                    <CRow>
                      {progressGroupExample1.map((item, index) => (
                        <div className="progress-group mb-4" key={index}>
                          <div className="progress-group-prepend">
                            <span className="text-medium-emphasis small">
                              {item.title}
                            </span>
                          </div>
                          <div className="progress-group-bars">
                            <CProgress thin color="info" value={item.paid} />
                          </div>
                        </div>
                      ))}
                    </CRow>

                  </CCol>
                  <CCol>
                    <CRow>
                      <CCol>
                        <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                          <div className="text-medium-emphasis small">
                            Due Candidates
                          </div>
                          <div className="fs-5 fw-semibold">220</div>
                        </div>
                      </CCol>
                    </CRow>

                    <hr className="mt-0" />

                    <CRow>
                      {progressGroupExample1.map((item, index) => (
                        <div className="progress-group mb-4" key={index}>
                          <div className="progress-group-prepend">
                            <span className="text-medium-emphasis small">
                              {item.title}
                            </span>
                          </div>
                          <div className="progress-group-bars">
                            <CProgress thin color="danger" value={item.due} />
                          </div>
                        </div>
                      ))}
                    </CRow>

                  </CCol>
                </CRow>
              </CContainer>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
