import React from "react";

import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";

import bike from "../../assets/bike.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    width: 250,
  },
  media: {
    height: 190,
  },
  button: {
    color: theme.palette.secondary.main,
  },
}));

const AdCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        title="Annas snabba cykel"
        subheader="500kr/dag, Gröndal"
      />
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={bike}
          title="Annas snabba cykel"
        />
      </CardActionArea>
      <CardActions>
        <Button
          className={classes.button}
          size="large"
          href="https://unsplash.com/photos/Z05GiksmqYU"
        >
          HYR HÄR!
        </Button>
      </CardActions>
    </Card>
  );
};

export default AdCard;
