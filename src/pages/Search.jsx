import React from "react";
import "./Search.css";
import SearchBar from "../components/Search";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../Response";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Search() {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL, commented out for testing
  const { data } = useGoogleSearch(term);

  // This is a real response from an api call, but we saved the data inorder to save our quotas on daily searches
  // const data = Response;

  console.log(data);
  return (
    <div className="search__page">
      <div className="search__page--header">
        <Link to="/">
          <img
            className="search__page--logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
          ></img>
        </Link>
        <div className="search__page--header-body">
          {<SearchBar hideButtons={true} />}
          <div className="search__page--options">
            <div className="options__left">
              <div className="search__page--option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="search__page--option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="search__page--option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="search__page--option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="search__page--option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="search__page--option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="options__right">
              <div className="search__page--option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="search__page--option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="search__page--results">
          <p className="search__page--result-count">
            About {data?.searchInformation.formattedTotalResults} results{" "}
            {data?.searchInformation.formattedSearchTime} seconds for {term}
          </p>
          {data?.items.map((item) => (
            <div className="search__page--result-container">
              <a href={item.link} className="search__page--results-web">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                      className="search__page--results-img"
                    />
                  )}
                {item.displayLink}
              </a>
              <a href={item.link} className="search__page--results-title">
                <h2>{item.title}</h2>
              </a>
              <p className="search__page--results-snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
