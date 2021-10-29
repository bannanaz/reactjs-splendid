import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Typography } from "@material-ui/core";
import {
  CardHeaderGlbl,
  GoBack,
  MainContainerCenter,
} from "../../components/DesignElements";

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
      <MainContainerCenter>
        <Card elevation={2}>
          <CardMedia component="img" image={ads.image} alt={ads.title} />
          <CardHeaderGlbl
            title={ads.title}
            subheader={ads.price + " kr/dag, " + ads.city}
          />
          <CardContent>
            <Typography variant="body1">{ads.details}</Typography>
            <br></br>
            <Typography variant="body1">Pris:</Typography>
            <Typography variant="body1">{ads.price} kr/dag</Typography>
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
