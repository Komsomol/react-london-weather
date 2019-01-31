import React, { Component } from "react";

const APIKEY = process.env.REACT_APP_ID;
const URL = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&&APPID=" + APIKEY;

class APICaller extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			error:null,
			isLoaded : false,
			items : [],
			temp: null
		};
	}

	componentDidMount() {
		this.intervalID = setInterval(() => {
			this.loadData();
		}, 600000);
		this.loadData();
	}

	componentDidUpdate(prevProps,prevState) {
		if(prevState.temp !== this.state.temp){
			console.log("update");
			this.setState({
				isLoaded:true,
				items : this.state.items,
				temp: this.state.temp
			});
		}
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	loadData(){
		console.log("loadData");
		fetch(URL)
			.then(res => res.json())
			.then( (result) => {
				
				if(result.cod === 200){
					console.log(result);
					console.log(new Date(result.dt * 1000));
					this.setState({
						isLoaded:true,
						items : result,
						temp: result.main.temp
					});
					
				} else if (result.cod === 429){
					this.setState({
						isLoaded:true,
						error : "API limit exceeed. Please wait 10 mins"
					});
				}
			}, (error) => {
				this.setState({
					isLoaded:true,
					error
				});
			}).catch(error =>{
				this.setState({
					isLoaded:true,
					error
				});
			});
	}

	render() { 
		const {error, isLoaded, items} = this.state;
		console.log(error);

		if(error){
			return <div>Error : {error.message}</div>;
		} else if (!isLoaded){
			return <div>Loading...</div>;
		} else {
			return (
				<div>
					
					<p>{items.name}</p>
					<p>{items.main.temp} &#176;</p>
					<p className="TemperatureConditions" >{items.weather[0].description}</p>
					
				</div>
			);
		}
	}
}
 
export default APICaller;