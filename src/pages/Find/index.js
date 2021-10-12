import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import AdCard from "../../components/AdCard";
import Bottomnav from "../../components/Bottomnav";
import Categories from "../../components/Categories";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const Find = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/ads")
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, []);

  return (
    <>
      <Container>
        <br></br>
        <br></br>
        <Typography variant="h2">sök bland kategorier</Typography>
        <Categories />
        <br></br>
        <br></br>
        <Typography variant="h2">våra nyaste annonser</Typography>
        <Grid container spacing={3}>
          {ads
            .slice(0)
            .reverse()
            .map((ad) => (
              <Grid item key={ad.id} xs={12} sm={6} lg={4}>
                <AdCard ad={ad} />
              </Grid>
            ))}
        </Grid>
      </Container>
      <Bottomnav />
    </>
  );
};

export default Find;
