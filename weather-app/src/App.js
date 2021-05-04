import React from 'react';
import './App.css';
import Weather from './app_component/weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

// npm i bootstrap
// npm i https://github.com/erikflowers/weather-icons.git

//api call api.openweathermap.org/data/2.5/weather?q=London&appid=
const Api_Key = "727fc0701eaff113b26258dcf5e7a208";

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description:"",
      error:false


    };
    this.getWeather();
  }

  calCelsius(temp){
    let cell = Math.floor(temp-273.15);
    return cell;
  }
  
  getWeather = async () => {
    const api_call = await fetch(
  
    `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${Api_Key}`
    );

    const response = await api_call.json();
    console.log(response);
    this.setState({
      city:response.name,
      country:response.sys.country,
      celsius:this.calCelsius

    });
  }
   render(){
    return (
      <div className="App">
        <Weather city={this.state.city}
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          />
      </div>
    );
      
   }
 
}
export default App;

