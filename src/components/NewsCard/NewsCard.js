import React, { useState, useEffect, createRef } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import classNames from "classnames";

import useStyles from "./styles.js";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
  activeArticle,
}) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <Card
      ref={elRefs[i]}
      className={classNames(
        classes.card,
        activeArticle === i ? classes.activeCard : null
      )}
    >
      <CardActionArea href={url} target='_blank'>
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "https://www.google.com/search?q=news+image&sxsrf=APq-WBvPqYPWsEaNoCS7PMMaby6GjTCagg:1646686192157&tbm=isch&source=iu&ictx=1&vet=1&fir=XlNUUTIE6mDTZM%252CDw7deD5gVl67SM%252C_%253Bj-OELYCyOs-wsM%252C9GEcrP2J-MjsjM%252C_%253BMqNTj2iTJQottM%252CX0QFcdLWHbSUVM%252C_%253BhdjKO5lL3_4IVM%252Ci48omoxss6ud0M%252C_%253BfnNq5KLf0sNliM%252CHA2b7PRcHJ1uIM%252C_%253BoOPhj0Gd-tj7KM%252CX0QFcdLWHbSUVM%252C_%253B2LgZCYrt1oac2M%252CDw7deD5gVl67SM%252C_%253BREbHB3wstkZIKM%252CHA2b7PRcHJ1uIM%252C_%253B7yrWD-Qg-R8lGM%252C1gYbcB7GyYobOM%252C_%253BHcypQgnUlMMomM%252CLW5nsJWDlvtIpM%252C_%253BNGtHitqlkOE4pM%252CCTLI5F699QdrbM%252C_%253BiMpPE9tgmVeE7M%252CoCNuxnf5XWbleM%252C_&usg=AI4_-kTRvR9dAZ_Sr1A0d_QWQeLHESunyA&sa=X&ved=2ahUKEwiJyaiM8LT2AhUOWs0KHRHoC8oQ9QF6BAgkEAE#imgrc=HcypQgnUlMMomM"
          }
        />
        <div className={classes.details}>
          <Typography variant='body2' color='textSecondary' component='h2'>
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='h2'>
            {source.name}
          </Typography>
        </div>
        <Typography classname={classes.title} gutterBottom variant='h5'>
          {title}
        </Typography>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button size='small' color='primary'>
          Learn More
        </Button>
        <Typography variant='h5' color='textSecondary'>
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
