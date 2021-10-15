import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";

import AdCard from "../../components/AdCard";
import Bottomnav from "../../components/Bottomnav";
import Categories from "../../components/Categories";

const Find = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/ads")
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, []);

  return (
    <>
      <br></br>
      <br></br>
      <section>
        <Typography variant="h2">Kategorier</Typography>
        <Categories />
      </section>
      <br></br>
      <br></br>
      <section>
        <Typography variant="h2">Nya annonser</Typography>
        <Grid container spacing={3}>
          {ads
            .slice(Math.max(ads.length - 6, 0))
            .reverse()
            .map((ad) => (
              <Grid item key={ad.id} xs={12} sm={6} lg={4}>
                <AdCard ad={ad} />
              </Grid>
            ))}
        </Grid>
      </section>
      <Bottomnav />
    </>
  );
};

export default Find;
