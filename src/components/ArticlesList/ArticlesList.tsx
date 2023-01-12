import {Grid, Typography} from "@mui/material";
import './ArticlesList.scss';
import {ArticleCard} from "../ArticleCard";
import {Article} from "../../types/Article";
import {FC} from "react";
import {customize} from "./customize";

type Props = {
  articles: Article[];
};

export const ArticlesList: FC<Props> = ({articles}) => {
  return (
    <main>
      <div className="articles">
        <Typography
          variant="subtitle1"
          gutterBottom
          fontWeight="600"
          className="articles__result"
          sx={customize.articlesContainer}
        >
            Result: {articles.length}
          </Typography>
        <Grid container spacing={6}>
            {articles.map((article) => (
              <Grid key={article.id} item xs={12} sm={6} md={4}>
                <ArticleCard article={article} />
              </Grid>
            ))}
          </Grid>
      </div>
    </main>
  );
};