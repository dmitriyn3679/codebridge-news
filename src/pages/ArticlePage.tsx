import {ArticleDetails} from "../components/ArticleDetails";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getArticleById} from "../api/getArticleById";
import {Article} from "../types/Article";
import {Loader} from "../components/UI/Loader";
import {LoadingError} from "../components/UI/LoadingError";
import {MainContainer} from "../components/MainContainer";

export const ArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    async function fetchArticleById() {
      try {
        if (articleId) {
          const loadedArticle = await getArticleById(articleId);
          setArticle(loadedArticle);
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoaded(true);
      }
    }
    
    fetchArticleById();
  }, []);
  
  return (
    <>
      {!isLoaded ? (
        <Loader />
      ) : (
        <>
          {isError ? (
            <MainContainer>
              <LoadingError />
            </MainContainer>
          ) : (
            <ArticleDetails article={article} />
          )}
        </>
      )}
    </>
  );
};