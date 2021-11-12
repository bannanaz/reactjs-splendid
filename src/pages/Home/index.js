import React from "react";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { PaperAdUpload } from "../../components/DesignElements";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 900px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;

const Home = () => {
  const history = useHistory();
  return (
    <>
      <br></br>
      <PaperAdUpload>
        <StyledDiv>
          <img
            src="https://raw.githubusercontent.com/bannanaz/images/main/img/people.png"
            alt="Människor som utför olika sportaktiviteter"
          />
          <br></br>
          <Typography variant="h5" component="h1">
            Splendid att du är här!
          </Typography>
          <br></br>
          <Typography variant="body1">
            Om du vill hyra sportutrustning och andra smarta prylar istället för
            att köpa så har du kommit rätt. Du kan också hyra ut dina saker till
            andra – tryggt och säkert!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() =>
              history.push({
                pathname: "/find",
              })
            }
          >
            Börja leta
          </Button>
        </StyledDiv>
      </PaperAdUpload>
    </>
  );
};

export default Home;
