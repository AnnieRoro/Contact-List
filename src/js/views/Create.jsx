
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext.js";

export const Create = () => {
    const { store, actions } = useContext(Context);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [agenda, setAgenda] = useState("annie")
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const dataToSend = {
            "full_name": name,
            "email": email,
            "agenda_slug": agenda,
            "address": address,
            "phone": phone
        }
        actions.createContacts(dataToSend);
        navigate("/contact");
    }

    return (
        <div>
            <h1 className="text-center">Create Contact</h1>
            <form onSubmit={handleSubmit} className="col-sm-6 col-md-4 col-lg-4 m-auto">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="name" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Phone" className="form-label">Phone</label>
                    <input onChange={(e) => setPhone(e.target.value)} value={phone} type="number" className="form-control" id="phone" placeholder="+34 000 00 00 00" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" className="form-control" id="address" placeholder="Address" />
                </div>
                <button type="submit" className="btn btn-primary me-3">Add</button>
                <button type="reset" className="btn btn-secondary">Cancel</button>
            </form>
        </div>
    )
}