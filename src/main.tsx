import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="" element={<Layout />}>
			<Route path="" element={<Home />} />
			<Route path="/about" element={<About />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
