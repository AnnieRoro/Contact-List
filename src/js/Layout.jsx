import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/Home.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { Create } from "./views/Create.jsx";
import { Contact } from "./views/Contact.jsx";
import { Edit } from "./views/Edit.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/create-contact" element={<Create />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/edit-contact/:info" element={<Edit/>} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>404 - Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
