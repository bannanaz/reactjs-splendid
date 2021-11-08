import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import styled from "styled-components";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Typography } from "@material-ui/core";
import {
  CardHeaderGlbl,
  GoBack,
  MainContainerCenter,
} from "../../components/DesignElements";

const StyledLink = styled(Link)`
  color: #258a70;
`;

const Ad = () => {
  const { id } = useParams();
  const [ads, setAds] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:8000/ads/${id}`)
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, [id]);

  return (
    <>
      <br></br>
      <GoBack />
      <br></br>
      <MainContainerCenter>
        <Card elevation={2}>
          <CardMedia
            component="img"
            image={ads.image}
            alt={ads.title}
            sx={{ mb: "15px" }}
          />
          <CardHeaderGlbl
            title={ads.title}
            subheader={ads.price + " kr/dag, " + ads.city}
          />
          <CardContent>
            <Typography variant="body1">{ads.details}</Typography>
            <br></br>
            <Typography variant="h4">
              Pris: <span>{ads.price} kr/dag + bokningsvagift 25 kr</span>
            </Typography>
            <br></br>
            <hr></hr>
            <Typography variant="body2">
              Plats:
              <span>
                {" "}
                {ads.city}, {ads.zip}
              </span>
            </Typography>
            <Typography variant="body2">
              Annonsnummer:<span> {ads.id}</span>
            </Typography>
            <br></br>
            <Typography variant="body2">
              Uthyrare:<span> {ads.name} </span>
            </Typography>
            <Typography variant="body2">
              Email:<span> {ads.email} </span>
            </Typography>
            <Typography variant="body2">
              Tfn:<span> {ads.phone} </span>
            </Typography>
            <br></br>
            <StyledLink to="/terms">Hyresvillkor</StyledLink>
          </CardContent>
          <br></br>
        </Card>
        <br></br>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            history.push({
              pathname: "/ad/" + id + "/request",
            })
          }
        >
          Gör en förfrågan
        </Button>
        <br></br>
        <br></br>
        <br></br>
      </MainContainerCenter>
    </>
  );
};
export default Ad;
