import React from "react";
import WeatherTile from "./weatherTile";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const WeatherTiles = (props) => {
  let globalProps = props;
  if (props.forecast.length === 0) {
    props.refresh();
  }
  return (
    <Router>
      <div>
        <h1 style={{ fontSize: 36, fontFamily: "Roboto", textAlign: "left" }}>
          5 Day Forecast
        </h1>
        <ListGroup horizontal>
          {props.forecast.map((it) => (
            <WeatherTile
              key={it.date}
              day={it.date}
              description={it.description}
              temp={it.temp}
              temp_min={it.temp_min}
              temp_max={it.temp_max}
            />
          ))}
        </ListGroup>
        <Link to="/forecasts">Get Hourly Forecasts</Link>
        <Switch>
          <Route path="/forecasts">
            <Forecasts />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  function Forecasts() {
    let match = useRouteMatch();
    return (
      <div>
        <ul>
          Forecasts
          {globalProps.forecast.map((it) => (
            <li>
              <Link to={`${match.url}/${it.date}`}>{it.date}</Link>
            </li>
          ))}
        </ul>
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Forecast />
          </Route>
        </Switch>
      </div>
    );
  }
  // return hourly forcast based on the topicId (a.k.a. date)
  function Forecast() {
    let { topicId } = useParams();
    if (globalProps.forecast.length > 0) {
      let hourlyForecast = globalProps.forecast.filter(
        (it) => it.date === topicId
      )[0].weather;
      return (
        <div>
          {hourlyForecast.map((it) => (
            <span>
              {it.dt_txt.slice(10)}: {formatTemp(it.temp)}{" "}
            </span>
          ))}
        </div>
      );
    }

    return null;
  }
};

const formatTemp = (temp) =>
  Math.round((((temp - 273) * (9 / 5) + 32) * 10) / 10) + "˚";

function HourlyForecast() {
  return (
    <div>
      <Card>
        <Card.Header>Hourly Forecast</Card.Header>
        <Card.Body>
          <Table>
            <Table.Row
          </Table>
        </Card.Body>
      </Card>
    </div>
  )
}

export default WeatherTiles;
