import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/KeyboardVoice";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionsTypes } from "../Reducer";

export default function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (event) => {
    event.preventDefault();

    // DO SOMETHING WITH INPUT
    navigate("/search");
    dispatch({
      type: actionsTypes.SET_SEARCH_TERM,
      term: input,
    });
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__input--icon" />
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <div className="mic__icon">
          <MicIcon />
        </div>
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttons--hidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttons--hidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}
