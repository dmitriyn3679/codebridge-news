import {ArticlesList} from "../components/ArticlesList";
import {Filter} from "../components/Filter";
import {MainContainer} from "../components/MainContainer";
import {useEffect, useMemo, useState} from "react";
import {getArticles} from "../api/getArticles";
import {Article} from "../types/Article";
import {Loader} from "../components/UI/Loader";
import {LoadingError} from "../components/UI/LoadingError";
import {useAppSelector} from "../hooks/useAppSelector";
import {filterByKeywords} from "../helpers/filterByKeywords";
import {sortByKeywords} from "../helpers/sortByKeywords";
import {getKeyWords} from "../helpers/getKeyWords";

export const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const query = useAppSelector(state => state.query)
  
  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoaded(false);
      setIsError(false);
      try {
        const loadedData = await getArticles(100);
        setArticles(loadedData);
      } catch {
        setIsError(true)
      } finally {
        setIsLoaded(true);
      }
    }

    fetchArticles();
  }, []);
  
  const visibleArticles = useMemo(() => {
    const keywords = getKeyWords(query);
    
    if (!keywords.length) {
      return articles;
    }
    
    const filteredArticles = filterByKeywords(articles, keywords);
    const sortedArticles = sortByKeywords(filteredArticles, keywords);
    
    return sortedArticles;
  }, [query, articles]);
  
  return (
    <div>
      <MainContainer>
        {!isLoaded ? (
          <Loader />
        ) : (
          <>
            {isError ? (
              <LoadingError />
            ) : (
              <>
                <Filter />
                <ArticlesList articles={visibleArticles} />
              </>
            )}
          </>
        )}
      </MainContainer>
    </div>
  );
};