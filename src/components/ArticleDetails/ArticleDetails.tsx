import {MainContainer} from "../MainContainer";
import {Box, Card, CardContent, Typography} from "@mui/material";
import './ArticleDetails.scss';
import {Article} from "../../types/Article";
import {FC} from "react";
import {BackButton} from "../UI/BackButton";
import {customize} from "./customize";

type Props = {
  article: Article | null;
};

export const ArticleDetails: FC<Props> = ({article}) => {
  return (
    <div className="details">
      <Box
        component="img"
        className="details__card-media"
        alt="The house from the offer."
        src={article?.imageUrl}
      />
      <MainContainer>
        <div className="details__card-container">
          <Card className="details__card">
            <CardContent className="details__card-content" sx={customize.cardContent}>
              <Typography variant="h5" className="details__card-title" align="center">
                {article?.title}
              </Typography>
              <Typography paragraph className="details__card-description" sx={customize.cardSummary}>
                {article?.summary}
              </Typography>
            </CardContent>
          </Card>
          <BackButton title="Back to homepage" />
        </div>
      </MainContainer>
    </div>
  );
};