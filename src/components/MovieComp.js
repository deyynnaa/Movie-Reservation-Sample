import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 200px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;

const CoverImage = styled.img`
  height: 362px;
`;
const MovieComponent = (props) => {
  return (
    <MovieContainer>
      <CoverImage />
      ayyyshhh
    </MovieContainer>
  );
};

export default MovieComponent;
