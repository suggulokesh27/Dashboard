import React, { useState } from "react";


const AdminRegForm = () => {

    const [formData, setFormData] = useState({
        userId: "",
        password: "",
        orgId: "",
        branchId: "",
        userType: "",
        status: "",
        passwordUpdated: "",
        mobileNo: "",
        email: ""
    })

    const handlerChangeInput = e => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }
    return (
        <div className="container-fluid" >
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                <div className="col">
                    <label htmlFor="userId" className="form-label">User Name<span className="text-danger">*</span></label>
                    <input type="text" className="form-control mb-4" id="userId" name="userId" onChange={handlerChangeInput} />
                </div>
                <div className="col">
                    <label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label>
                    <input type="text" className="form-control mb-4" id="password" name="password" onChange={handlerChangeInput} />
                </div>
                <div className="col">
                    <label htmlFor="email" className="form-label">Email<span className="text-danger">*</span></label>
                    <input type="text" className="form-control mb-4" id="email" name="email" onChange={handlerChangeInput} />
                </div>
                <div className="col">
                    <label htmlFor="orgId" className="form-label">Organisation ID<span className="text-danger">*</span></label>
                    <input type="text" className="form-control mb-4" id="orgId" name="orgId" onChange={handlerChangeInput} />
                </div>
                <div className="col">
                    <label htmlFor="mobileNo" className="form-label">Phone<span className="text-danger">*</span></label>
                    <input type="text" className="form-control mb-4" id="mobileNo" name="usemobileNorId" onChange={handlerChangeInput} />
                </div>
            </div>
        </div >
    )

}
