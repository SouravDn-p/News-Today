import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component" ;

const  News = (props)=> {

const [loading, setLoading] = useState(false);
const [articles, setArticles] = useState([]);
const [page, setPage] = useState(1);
const [totalResults, setTotalResults] = useState(0);
const [category, setCategory] = useState('in');
// document.title=`${capitalize(props.category)} - News Today`

useEffect(() => {
         updateNews();
}, [])

const updateNews = async ()=> {
      setLoading(true);
      props.setProgress(10);
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=eb83de9095d84b4ca59a314ff7769f00&page=${page}&pageSize=${props.pageSize}&category=${props.category}`;

      let data= await fetch(url);
      props.setProgress(40);
      let parsedData = await data.json()
      props.setProgress(70);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
}

const capitalize = (word)=>{
  let newText=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
  return newText;
}

const fetchMoreData = async () => {
  setLoading(true);
  let url=` https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}&category=${props.category}`;
  setPage(page+1);
      let data= await fetch(url);
      let parsedData = await data.json()
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
};

    return (
<>
        <h1 className='text-success text-center my-3'>{`News today -${category} headline`}</h1>
        {loading && <Spinner />}
        < InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={ articles.length !== totalResults}
            loader={ loading && < Spinner style={{height:'50px',marginBottom:'20px'}}/> }
            scrollableTarget="scrollableDiv" >
            
        <div className='container mt-3'>
        <div className="row my-3">
        {articles.map((element)=>{
         return  <div className="col-md-4 my-3" key={element.url} >
            <NewsItem title={element.title? element.title.slice(0,44):""} description={element.description ? element.description.slice(0,44):""} imageUrl={element.urlToImage} url={element.url} publishedAt={element.publishedAt} name={element.source.name} />
                </div>}
        )}    
        </div>
        </div>
        </ InfiniteScroll>  
</>
    )
}

News.defaultProps={
  country:'in',
  category:'general',
  pageSize:10,
  apiKey:""
}
News.propsTypes={
  country: PropTypes.string ,
  category: PropTypes.string ,
  apiKey: PropTypes.string ,
  pageSize: PropTypes.number,
}

export default News;