import { Component } from "react";
import Event from "./Event";
import { Input } from "../../Component/Form/formStyled";
import { DivStyle } from "./style";
import { Button } from "@mui/material";

export default class SearchConcert extends Component {
  state = {
    cityID: "",
    city: "",
    eventData: [],
    term: "Jakarta",
    loading: false,
    error: "",
  };

  componentDidMount() {
    this.getLocationID();
  }

  handleChange = (e) => {
    this.setState({ term: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getLocationID();
  };

  getEventData = (id) => {
    const url = `https://api.songkick.com/api/3.0/metro_areas/${id}/calendar.json?apikey=pk8dcHXeCupj6Kxr&per_page=24`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ eventData: data, loading: false });
      })
      .catch((err) => {
        alert(err);
        console.log(err);
        this.setState({ error: err, loading: false });
      });
  };

  getLocationID = () => {
    this.setState(() => {
      return { loading: true };
    });
    const city = this.state.term;
    const url = `https://api.songkick.com/api/3.0/search/locations.json?query=${city}&apikey=pk8dcHXeCupj6Kxr&per_page=24`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cityID = data.resultsPage.results.location[0].metroArea.id;
        this.setState({ cityID });
        this.getEventData(cityID);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
        this.setState({ error: err, loading: false });
      });
    this.setState({ city, term: "" });
  };

  render() {
    const earlyTwenties =
      this.state.eventData.resultsPage &&
      this.state.eventData.resultsPage.results.event?.map((event) => {
        return (
          <Event
            name={event.displayName}
            venue={event.venue.displayName}
            date={event.start.date}
            time={event.start.time}
            city={event.location.city}
            key={event.id}
          />
        );
      });
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              onChange={this.handleChange}
              value={this.state.term}
              placeholder="type a city name..."
              id="userInput"
            />
            <Button variant="outlined" type="submit" className="btn-search">
              search
            </Button>
          </form>
        </div>
        <div>
          <h1>Concerts in {this.state.city}</h1>
          <div className={DivStyle}>
            <p id="loading">{this.state.loading && "Loading..."}</p>
            <h2 id="cityName">{this.state.city}</h2>
            <ul id="list">
              {this.state.eventData.resultsPage && earlyTwenties}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
