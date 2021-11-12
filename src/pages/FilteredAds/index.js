import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Grid, Typography, Link } from "@material-ui/core";
import BuildIcon from "@mui/icons-material/Build";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";

import AdCard from "../../components/AdCard";
import { GoBackIcon } from "../../components/DesignElements";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#09806d",
    margin: "0px 7px 0px 0px",
    verticalAlign: "sub",
  },
}));

const FilteredAds = () => {
  const { category } = useParams();
  const [ads, setAds] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch(`http://localhost:8000/ads`)
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, [category]);

  const history = useHistory();

  return (
    <section>
      <br></br>
      <Link variant="button" onClick={() => history.goBack()}>
        <GoBackIcon />
      </Link>
      <br></br>
      <br></br>
      <Typography variant="h2">
        {" "}
        {category === "Verktyg" ? (
          <BuildIcon className={classes.icon} />
        ) : (
          <SportsTennisIcon className={classes.icon} />
        )}
        {category}
      </Typography>
      <Grid container spacing={3}>
        {ads
          .filter((item) => item.category === category)
          .slice(0)
          .reverse()
          .map((ad) => (
            <Grid item key={ad.id} xs={12} sm={6} lg={4}>
              <AdCard ad={ad} />
            </Grid>
          ))}
      </Grid>
    </section>
  );
};

export default FilteredAds;
