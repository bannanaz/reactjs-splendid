import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { CardHeaderGlbl, GridSingleCol } from "../../components/DesignElements";

const Ad = () => {
  const { id } = useParams();
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/ads/${id}`)
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, [id]);

  return (
    <Container>
      <GridSingleCol>
        <br></br>
        <Grid item xs={12} sm={9} lg={8} margin="auto">
          <Card elevation={2}>
            <CardMedia component="img" image={ads.image} alt={ads.title} />
            <CardHeaderGlbl
              title={ads.title}
              subheader={ads.price + " kr/dag, " + ads.zip}
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
            variant="contained"
            color="primary"
            target="_top"
            rel="noopener noreferrer"
            href={`mailto:${ads.email}`}
          >
            gör en förfrågan
          </Button>
        </Box>
        <br></br>
      </GridSingleCol>
    </Container>
  );
};
export default Ad;
