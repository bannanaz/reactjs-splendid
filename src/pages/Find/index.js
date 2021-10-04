import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AdCard from "../../components/AdCard";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import BuildIcon from "@mui/icons-material/Build";
import Bottomnav from "../../components/Bottomnav";

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
        <p>Kategorier:</p>
        <p>Sport &amp; fritid</p>
        <p>Verktyg</p>
        <Grid container spacing={2}>
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
