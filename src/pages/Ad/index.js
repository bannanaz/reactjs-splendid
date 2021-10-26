import React, { useEffect, useState } from "react";
import * as ROUTES from "../../constants/routes";
import { useParams, useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { Button, Grid, Typography, Link } from "@material-ui/core";
import {
  CardHeaderGlbl,
  GoBackIcon,
  GridSingleCol,
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
      <Link variant="button" onClick={() => history.goBack()}>
        <GoBackIcon />
      </Link>
      <GridSingleCol>
        <br></br>
        <Grid item xs={12} sm={9} lg={8} margin="auto">
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
        </Grid>
        <br></br>
        <Box display="flex" justifyContent="center">
          <Button
            onClick={() => history.push({ pathname: "/request" })}
            variant="contained"
            color="primary"
          >
            Gör en förfrågan
          </Button>
        </Box>
        <br></br>
      </GridSingleCol>
    </>
  );
};
export default Ad;
