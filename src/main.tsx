import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
	Navigate,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Github, { getData } from "./components/Github/Github.tsx";
import Notfound from "./components/NotFound/Notfound.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="" element={<Layout />}>
			<Route index element={<Navigate to="/home" />}></Route>
			<Route path="/home" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route loader={getData} path="/Github" element={<Github />} />
			<Route path="*" element={<Notfound />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
