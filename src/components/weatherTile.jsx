import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class WeatherTile extends Component {
  style = { fontSize: 20, fontFamily: "Roboto", color: "gray" };

  getImageUrl = (state) => {
    switch (state) {
      case "clear sky":
        return "https://pngimg.com/uploads/sun/sun_PNG13449.png";
      case "broken clouds":
        return "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather03-512.png";
      case "few clouds":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Weather-few-clouds.svg/1200px-Weather-few-clouds.svg.png";
      case "scattered clouds":
        return "https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_SunCloudy.png";
      case "overcast clouds":
        return "https://cdn.iconscout.com/icon/free/png-512/cloudy-cloud-snow-weather-38920.png";
      case "light rain":
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPoOkINZLSjvDfV--Dzu22JWbVk8UdvrvRy9nIoWGFObdMElI7&usqp=CAU";
      default:
        return "";
    }
  };

  render() {
    return (
      <div>
        <Card
          border="secondary"
          onClick={this.props.onClick}
          style={{ width: "10rem", height: "10rem" }}
        >
          <Card.Body>
            <Card.Title style={this.style}>{this.props.day}</Card.Title>
            <img
              src={this.getImageUrl(this.props.description)}
              alt="weather logo"
              width={60}
              height={60}
            ></img>
            <Card.Text>
              <span>{this.props.temp_max}</span>
              <span style={{ color: "grey" }}>{this.props.temp_min}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default WeatherTile;
