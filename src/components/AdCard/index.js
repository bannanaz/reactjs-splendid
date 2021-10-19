import React from "react";
import { Link } from "react-router-dom";

import { CardActions, CardActionArea, Button } from "@material-ui/core";
import { CardHeaderGlbl, SmallCard, SmallCardMedia } from "../DesignElements";

const AdCard = ({ ad }) => {
  return (
    <SmallCard>
      <CardHeaderGlbl
        title={ad.title}
        subheader={ad.price + " kr/dag, " + ad.city}
      />
      <CardActionArea component={Link} to={`/ad/${ad.id}`}>
        <SmallCardMedia image={ad.image} title={ad.title} alt={ad.title} />
      </CardActionArea>
      <CardActions>
        <Button
          component={Link}
          to={`/ad/${ad.id}`}
          variant="text"
          color="secondary"
        >
          HYR HÄR!
        </Button>
      </CardActions>
    </SmallCard>
  );
};

export default AdCard;
