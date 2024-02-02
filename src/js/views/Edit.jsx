import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Context } from "../store/appContext.js";

export const Edit = () => {
    const { store, actions } = useContext(Context)
    //const [details, setDetails] = useState(store.currentContact)

    // const [name, setName] = useState(details.full_name);
    // const [email, setEmail] = useState(details.email);
    // const [agenda, setAgenda] = useState("annie")
    // const [address, setAddress] = useState(details.address);
    // const [phone, setPhone] = useState(details.phone);
    
    const [details, setDetails] = useState({
        full_name: "",
        email: "",
        address: "",
        phone: "",
        agenda_slug: "",
    });

    const navigate = useNavigate();
    const params = useParams();

    const handleInputChange = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value })
     };

    const handleSubmit = (event) => {
        event.preventDefault();

        const dataToSend = {
            "full_name": details.full_name,
            "email": details.email,
            "agenda_slug": "annie",
            "address": details.address,
            "phone": details.phone
        }
        console.log('details',details,' data',dataToSend)
        actions.updateContact(params.info, dataToSend);
        navigate("/contact");
    }
    console.log(details)

    const fetchData = async () => {
        setDetails(await actions.getContactInfo(params.info))
    }

    useEffect (() => {      
        fetchData();
    },[])

    return (
        <form onSubmit={handleSubmit} className="card col-sm-6 col-md-6 col-lg-6 m-auto mb-3">
            <div className="col-md-4">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" className="img-fluid p-4 rounded-circle" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title"> <input onChange={handleInputChange} name="full_name" value={details.full_name} type="text" className="form-control" id="name" placeholder="Name" /></h5>
                <h6 className="card-text text-secondary"><b><i className="fas fa-map-marker-alt "></i> <input onChange={handleInputChange} name="email" value={details.email} type="email" className="form-control" id="email" placeholder="Email" /></b></h6>
                <p className="card-text text-secondary"><b><i className="fas fa-phone"></i></b> <input onChange={handleInputChange} name="phone" value={details.phone} type="number" className="form-control" id="phone" placeholder="+34 000 00 00 00" /></p>
                <p className="card-text "><small className="text-body-secondary text-secondary"><i className="fas fa-envelope"></i> <input onChange={handleInputChange} name="address" value={details.address} type="text" className="form-control" id="address" placeholder="Address" /></small></p>
                <button type="submit" className="btn btn-primary me-3">Save</button>
            </div>
        </form>
    )
}