import React from "react";
import { Link } from "react-router-dom";
import { CardActions, CardActionArea } from "@material-ui/core";

import {
  SmallCard,
  SmallCardHeader,
  SmallCardMedia,
  TextBtn,
} from "../DesignElements";

const AdCard = ({ ad }) => {
  return (
    <SmallCard>
      <SmallCardHeader
        title={ad.title}
        subheader={ad.price + " kr/dag, " + ad.zip}
      />
      <CardActionArea component={Link} to={`/ad/${ad.id}`}>
        <SmallCardMedia image={ad.image} title={ad.title} alt={ad.title} />
      </CardActionArea>
      <CardActions>
        <TextBtn component={Link} to={`/ad/${ad.id}`}>
          Hyr här!
        </TextBtn>
      </CardActions>
    </SmallCard>
  );
};

export default AdCard;
