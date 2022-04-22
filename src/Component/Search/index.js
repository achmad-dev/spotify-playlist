import { useState } from "react";
import { searchTrack } from "../../lib/fetchApi";
import { useSelector } from "react-redux";
import { Div, Input } from "./searchStyled";
import Button from "@mui/material/Button";

const Search = ({ onSuccess }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);

  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await searchTrack(text, accessToken);

      const tracks = response.tracks.items;
      onSuccess(tracks);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <form className="form-search" onSubmit={onSubmit}>
      <Div>
        <Input
          type="text"
          placeholder="Search Songs..."
          className="search-input"
          required
          onChange={handleInput}
        />
        <Button variant="outlined" type="submit" className="btn-search">
          Search
        </Button>
      </Div>
      <br />
      <hr />
    </form>
  );
};

export default Search;
