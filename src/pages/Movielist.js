import React from "react";
import {
  Container,
  Header,
  Appname,
  MovieImage,
  Searchbar,
  SearchIcon,
  MovielistContainer,
} from "../stylesheets/Cssmovielist";
import SearchInput from "../components/SearchInput";
import MovieComponent from "../components/MovieComp";

function Movielist() {
  return (
    <Container>
      <Header>
        <Appname>
          <MovieImage src="/clapperboard.png" alt="Clapperboard" />
          Movie Lists
        </Appname>
        <Searchbar>
          <SearchIcon src="/magnifying-glass.png" alt="MagnifyingGlass" />
          <SearchInput />
        </Searchbar>
      </Header>
      <MovielistContainer>
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
      </MovielistContainer>
    </Container>
  );
}

export default Movielist;
