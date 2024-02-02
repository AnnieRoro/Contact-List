import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Contact = () => {

    const { store, actions } = useContext(Context);
    const [itemToDelete, setItemToDelete] = useState("");


    const confirmDelete = () => {
         
            actions.deleteContacts(itemToDelete.id);
            setItemToDelete(""); 
        
    }

    return (
        <div>
            {store.contacts.map((item, index) =>
                <div key={index} className="card col-sm-6 col-md-6 col-lg-6 m-auto mb-3">
                    <div className="row g-0 ">
                        <div className="col-md-4">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" className="img-fluid p-4 rounded-circle" alt="..." />
                        </div>
                        <div className="col-md-8 d-flex justify-content-between">
                            <div  className="card-body">
                                <h5 className="card-title">{item.full_name}</h5>
                                <h6 className="card-text text-secondary"><b><i className="fas fa-map-marker-alt "></i> {item.address}</b></h6>
                                <p className="card-text text-secondary"><b><i className="fas fa-phone"></i></b> {item.phone}</p>
                                <p className="card-text "><small className="text-body-secondary text-secondary"><i className="fas fa-envelope"></i> {item.email}</small></p>
                            </div>
                            <div className="m-3">
                                <Link to={"/edit-contact/" + item.id} ><span><i className=" fas fa-pen text-dark me-3"></i></span></Link>
                                
                                <span><i onClick={() => setItemToDelete(item)} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn fas fa-trash-alt"></i>
                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    This will be delete forever! Do you want to continue?
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                    <button onClick={confirmDelete} type="button" className="btn btn-primary" data-bs-dismiss="modal">Yes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}


