import React, { Component } from "react";
import "./App.css";

import {TweenMax } from "gsap/TweenMax";
import Youtube from "./components/Youtube";
import APICaller from "./API/APICaller";

class App extends Component {
	constructor(props){
		super(props);

		this.elem = null;
		this.tween = null;

	}

	componentDidMount() {
		this.tween = TweenMax.to(this.elem, 1 , {y:250});
	}

	render() {
		return (
			<div className="App" >
				<div className="TemperatureOutput" ref={div => this.elem = div}>
					<APICaller />
				</div>

				<div className="YoutubePlayerBack">
					<div className="YoutubePlayer">
						<Youtube id="9hoO8cKWyT4"/>
					</div>
				</div>
			
			</div>
		);
	}
}

export default App;
