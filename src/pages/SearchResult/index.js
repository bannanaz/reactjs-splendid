import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

import AdCard from "../../components/AdCard";

const FilteredAdsByCategory = () => {
  const { category } = useParams();
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/ads`)
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, [category]);

  return (
    <>
      <br></br>
      <br></br>
      <Typography variant="h2">{category}</Typography>
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
    </>
  );
};

export default FilteredAdsByCategory;
