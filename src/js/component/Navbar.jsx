import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, action} = useContext(Context)


	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/contact">
					<button className="btn btn-primary me-3">Contact</button>
				</Link>
				<Link to="/create-contact">
					<button className="btn btn-success me-3">
						Create a contact
					</button>
				</Link>
			</div>
		</nav>
	);
};
