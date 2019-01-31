import React, { Component } from "react";
import YouTube from "react-youtube";

class Youtube extends Component {
	constructor(props){
		super(props);
		this.options = {
			width:"1920",
			height:"1080",
			playerVars:{
				autoplay: 1,
				controls: 0,
				disablekb: 0,
				iv_load_policy: 3,
				modestbranding:1,
				rel:0		
			}
		};
	}
	render() { 
		return ( 
			<div> 
				<YouTube videoId={this.props.id} opts={this.options}/>
			</div>
		
		);
	}
}
 
export default Youtube;