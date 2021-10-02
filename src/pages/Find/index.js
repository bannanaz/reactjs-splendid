import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Find = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/ads")
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, []);

  return (
    <div>
      <Grid container>
        {ads.map((ad) => (
          <Grid item key={ad.id} xs={12} sm={6} md={3}>
            <Paper>{ad.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Find;
