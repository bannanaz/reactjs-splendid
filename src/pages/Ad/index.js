import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
  },
  title: {
    color: theme.palette.text.primary,
  },
  button: {
    color: theme.palette.secondary.dark,
    fontSize: 16,
    fontWeight: 700,
    fontStyle: "italic",
    textDecoration: "underline",
  },
}));

const Ad = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/ads/${id}`)
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, [id]);

  return (
    <div>
      <br></br>
      <Card
        elevation={2}
        sx={{
          margin: "auto",
          maxWidth: { xs: 500, sm: 600, md: 700, lg: 800 },
        }}
      >
        <CardMedia
          component="img"
          image={ads.image}
          alt={ads.title}
          sx={{ maxWidth: { xs: 500, sm: 600, md: 700, lg: 800 } }}
        />
        <CardHeader
          className={classes.title}
          title={ads.title}
          subheader={ads.price + " kr/dag, " + ads.zip}
          titleTypographyProps={{
            variant: "h6",
            fontFamily: "Poppins",
            fontWeight: "400",
          }}
          subheaderTypographyProps={{
            variant: "h7",
            fontFamily: "Poppins",
            fontWeight: "500",
          }}
        />
        <CardContent
          sx={{
            paddingTop: 0,
          }}
        >
          <Typography
            className={classes.title}
            variant="body2"
            sx={{
              fontFamily: "Poppins",
            }}
          >
            {ads.details}
          </Typography>
          <br></br>
          <Typography
            className={classes.title}
            variant="body2"
            sx={{
              fontFamily: "Poppins",
            }}
          >
            Pris:
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            sx={{
              fontFamily: "Poppins",
            }}
          >
            {ads.price} kr/dag
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default Ad;
