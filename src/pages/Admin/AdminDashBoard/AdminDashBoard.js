import React, { useState } from "react";
import ManageOrders from "../ManageOrder/ManageOrders";
import ManagePackage from "../ManagePackage/ManagePackage";
import './AdminDashBoard.css'

const AdminDashboard = () => {
    const [control, setControl] = useState("manageOrder");

    console.log(control);
    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <h6 className='text-center mt-5 fw-bold fs-3 text-warning'>Dashboard</h6>
                                <div className="all-menu mt-5 ms-5 fw-bold fs-5">
                                    <li
                                        onClick={() => setControl("manageOrder")}
                                        className="admin-menu p-2"
                                    >
                                        All Orders
                                    </li>
                                    <li
                                        onClick={() => setControl("managePackage")}
                                        className="admin-menu p-2"
                                    >
                                        Manage Package
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">
                            {control === "manageOrder" && <ManageOrders></ManageOrders>}
                            {control === "managePackage" && <ManagePackage></ManagePackage>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;