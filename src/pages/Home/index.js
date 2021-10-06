import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AdCard from "../../components/AdCard";
import Bottomnav from "../../components/Bottomnav";
import Categories from "../../components/Categories";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headers: {
    fontFamily: "Poppins",
    fontWeight: "500",
  },
}));

const Home = () => {
  const [ads, setAds] = useState([]);
  const classes = useStyles();

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
        <Typography variant="h2" className={classes.headers}>
          våra kategorier:
        </Typography>
        <br></br>
        <Categories />
        <br></br>
        <br></br>
        <Typography variant="h2" className={classes.headers}>
          nya annonser:
        </Typography>
        <br></br>
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

export default Home;
