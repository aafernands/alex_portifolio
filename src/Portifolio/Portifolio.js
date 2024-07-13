import React from "react";
import "../PortifolioPage/Portifolio.css";
import Projects from "./Projects.js";

export default function Portifolio() {
	return (
		<div className="container">
			<h1 className="display-4">PORTIFOLIO</h1>
			<p className="lead">
				{" "}
				<i>HERE YOU CAN HAVE A GLIMPSE OF MY WORK </i>
			</p>
			<div>
				<Projects />
			</div>
		</div>
	);
}
