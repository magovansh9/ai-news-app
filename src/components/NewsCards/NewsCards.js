import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles.js";

const infoCards = [
  {
    color: "white",
    title: "Articles by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology Articles",
  },
  {
    color: "white",
    title: "Articles by Terms",
    info: "Bitcoin, Web 3.0, Endoplasty...",
    text: "What's up with Bitcoin",
  },
  {
    color: "white",
    title: "Articles by Sources",
    info: "BBC News, Buzzfeed, ABC News, Wired...",
    text: "Give me the news from ABC News",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems='stretch'
          spacing={3}
        >
          <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: "white" }}
              >
                <Typography variant='h5'>Talk to ResearchAid!</Typography>
                  <Typography variant='h6'>
                    <strong>Some Sample Commands </strong>
                    <br />
                    1) What's up with Tesla?<br/>
                    2) Open Article #4 <br/>
                    3) Good job!<br/>
                    4) Go back to the homepage
                  </Typography>
                <Typography variant='h6'>
                  Try saying: <br />
                  <i>Give me the latest Sports news. Open Article #2. Go back please. Thank you!</i>
                </Typography>
              </div>
            </Grid>
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant='h5'>{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant='h6'>
                    <strong>{infoCard.title.split(" ")[2]}</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant='h6'>
                  Try saying: <br />
                  <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems='stretch'
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
