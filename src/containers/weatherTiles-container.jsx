import * as actions from "../data/actionTypes";
import { connect } from "react-redux";
import WeatherTiles from "../components/weatherTiles";
import processData from "../data/processData";

const mapStateToProps = (state) => {
  return {
    forecast: state,
  };
};

const mapDispatchToProps = {
  refresh: () => {
    return (dispatch) => {
      fetch(
        "http://api.openweathermap.org/data/2.5/forecast?q=cupertino&appid=d494dbdc35259ea19d49e99fa36f7315"
      )
        .then((res) => res.json())
        .then((json) => processData(json))
        .then((json) => {
          dispatch({
            type: actions.REFRESH,
            payload: {
              data: json,
            },
          });
        });
    };
  },
  selectDay: (date) => ({
    type: actions.SELECT_DAY,
    payload: {
      date,
    },
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherTiles);
