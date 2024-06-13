import React, { useState } from 'react'


const Register = () => {

  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    mobileNo: "",
    email: ""
  })

  const handlerChangeInput = e => {
    const { name, value } = e.target;
    setFormData((formData)=>({
      ...formData,
      [name]: value
    }))
  }

  const regFormSubmitHandler = event => {
    event.preventDefault();
    console.log(formData);
  }

  return (
      <div className="container h-100" style={{ backgroundColor: "white" }}>
        <div className="row p-3 d-flex justify-content-center align-items-center h-60">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registration</p>

                    <form className="mx-1 mx-md-4" onSubmit={regFormSubmitHandler}>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="userId">User Name</label>
                          <input type="text" id="userId" name="userId" className="form-control" onChange={handlerChangeInput} />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="email"> Email</label>
                          <input type="email" id="email" name='email' className="form-control" onChange={handlerChangeInput} />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="password">Password</label>
                          <input type="password" id="password" name='password' className="form-control" onChange={handlerChangeInput} />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="mobileNo">Phone</label>
                          <input type="text" id="mobileNo" name='mobileNo' className="form-control" onChange={handlerChangeInput} />
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                      </div>

                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid" alt="Sample image" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )

}

export default Register
