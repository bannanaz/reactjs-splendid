import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Card,
  CardHeader,
  CardActionArea,
  CardMedia,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
  },
  button: {
    color: theme.palette.secondary.dark,
    fontSize: 16,
    fontWeight: 700,
    fontStyle: "italic",
    textDecoration: "underline",
  },
}));

const AdCard = ({ ad }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader
        className={classes.title}
        title={ad.title}
        subheader={ad.price + " kr/dag, " + ad.zip}
        titleTypographyProps={{ variant: "h6" }}
        subheaderTypographyProps={{ variant: "h7" }}
      />
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          height="220"
          image={ad.image}
          title="Annas snabba cykel"
          alt="Annas snabba cykel"
        />
      </CardActionArea>
      <CardActions>
        <Button
          component={Link}
          to={`/ad/${ad.id}`}
          className={classes.button}
          size="large"
        >
          HYR HÄR!
        </Button>
      </CardActions>
    </Card>
  );
};

export default AdCard;
