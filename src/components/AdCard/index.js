import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
  },
  title: {
    color: theme.palette.text.primary,
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
      <CardActionArea component={Link} to={`/ad/${ad.id}`}>
        <CardMedia
          component="img"
          height="220"
          image={ad.image}
          title="Annas snabba cykel"
          alt="Annas snabba cykel"
        />
      </CardActionArea>
      <CardActions>
        <Button
          className={classes.button}
          component={Link}
          to={`/ad/${ad.id}`}
          size="large"
          sx={{
            color: "#E37969",
            fontStyle: "italic",
            textDecoration: "underline",
            fontWeight: "700",
          }}
        >
          HYR HÄR!
        </Button>
      </CardActions>
    </Card>
  );
};

export default AdCard;
