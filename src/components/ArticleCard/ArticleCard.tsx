import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import './ArticleCard.scss';
import {CustomLink} from "../UI/CustomLink";
import {Article} from "../../types/Article";
import {FC, useMemo} from "react";
import {sliceDescription} from "../../helpers/sliceDescription";
import Highlighter from "react-highlight-words";
import {useAppSelector} from "../../hooks/useAppSelector";
import {prepareDate} from "../../helpers/prepareDate";
import {customize} from "./customize";

type Props = {
  article: Article;
};

export const ArticleCard: FC<Props> = ({article}) => {
  const query = useAppSelector(state => state.query);
  
   const keywords = useMemo(() => {
     return query.toLowerCase().split(' ');
   }, [query])
  
  return (
    <Card className="article-card">
      <CardMedia
        image={article.imageUrl}
        title="card-img"
        className="article-card__media"
      />
      <CardContent className="article-card__content">
        <Typography
          variant="caption"
          className="article-card__date"
          sx={customize.cardDate}
        >
          <CalendarTodayOutlinedIcon sx={customize.calendarIcon} />
          {prepareDate(article.updatedAt)}
        </Typography>
        <Typography variant="h5" sx={customize.cardTitle}>
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={keywords}
            autoEscape={true}
            textToHighlight={article.title}
          />
        </Typography>
        <Typography>
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={keywords}
            autoEscape={true}
            textToHighlight={sliceDescription(article.summary, 140)}
          />
        </Typography>
      </CardContent>
      <CardActions sx={customize.cardActions}>
        <CustomLink link={`/article/${article.id}`}>
          <Button
            size="small"
            className="article-card__button"
            sx={customize.cardButton}
          >
            Read more
          </Button>
          <ArrowForwardIcon fontSize="small" sx={customize.arrowIcon}/>
        </CustomLink>
      </CardActions>
    </Card>
  );
};