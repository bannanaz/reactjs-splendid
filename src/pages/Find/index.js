import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AdCard from "../../components/AdCard";

const Find = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/ads")
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, []);

  return (
    <Container>
      <br></br>
      <Grid container spacing={2}>
        {ads.map((ad) => (
          <Grid item key={ad.id} xs={12} sm={6} lg={4}>
            <AdCard ad={ad} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Find;
