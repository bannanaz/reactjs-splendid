import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { TextBtn } from "../SmallComponents/Buttons";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
    textOverflow: "ellipsis",
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
          noWrap: "true",
        }}
        subheaderTypographyProps={{
          variant: "h7",
          fontFamily: "Poppins",
          fontWeight: "500",
        }}
      />
      <CardActionArea component={Link} to={`/ad/${ad.id}`}>
        <CardMedia
          image={ad.image}
          title={ad.title}
          alt={ad.title}
          component="img"
          height="220"
        />
      </CardActionArea>
      <CardActions>
        <TextBtn component={Link} to={`/ad/${ad.id}`}>
          HYR HÄR!
        </TextBtn>
      </CardActions>
    </Card>
  );
};

export default AdCard;
