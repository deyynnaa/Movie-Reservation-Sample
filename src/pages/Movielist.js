import React from "react";
import {
  Container,
  Header,
  Appname,
  MovieImage,
} from "../stylesheets/Cssmovielist";

function Movielist() {
  return (
    <Container>
      <Header>
        <Appname>
          <MovieImage src="/clapperboard.png" alt="Clapperboard" />
          Movie Lists
        </Appname>
      </Header>
      Some stuffs
    </Container>
  );
}

export default Movielist;
