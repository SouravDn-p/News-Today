import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps={
        country:'in',
        category:'general',
        pageSize:10
    }
    static propsTypes={
        country: PropTypes.string ,
        category: PropTypes.string ,
        pageSize: PropTypes.number
    }

  constructor (props){
        super(props);
        this.state={
          articles:[],
          loading:false,
          page:1,
          country:'in',
          category:'general',
          publishedAt:'',
          totalResults:0
        }
        document.title=`${this.capitalize(this.props.category)} - News Today`
    }

    async componentDidMount() {
      this.setState({page:this.state.page,})
      this.updateNews();
    }

  updateNews= async ()=> {
      this.setState({loading:true})
      let url=` https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=eb83de9095d84b4ca59a314ff7769f00&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
      let data= await fetch(url);
      let parsedData = await data.json()
      this.setState({
        articles: parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
      })
  }


  handlePrevious= async ()=> {
      this.setState({page:this.state.page-1,})
      this.updateNews();
  }

  handleNext= async ()=> {
      this.setState({page:this.state.page+1,})
      this.updateNews();
  }

capitalize = (word)=>{
  let newText=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
  return newText;
}

  render() {
    return (
<>
    <div className='container mt-3'>
        <h1 className='text-success text-center my-3'>News today - headline</h1>
        {this.state.loading && <Spinner />}
        <div className="row my-3">
        {!this.state.loading && this.state.articles.map((element)=>{
         return  <div className="col-md-4 my-3" key={element.url} >
            <NewsItem title={element.title? element.title.slice(0,44):""} description={element.description ? element.description.slice(0,44):""} imageUrl={element.urlToImage} url={element.url} publishedAt={element.publishedAt} name={element.source.name} />
        </div>}
        )}
            
            
        </div>
        <div className='d-flex justify-content-between' >
             {!this.state.loading && <button disabled={this.state.page<=1 } onClick={this.handlePrevious} type='button' className="btn btn-success">  &larr; Previous </button>}

             {!this.state.loading && <button disabled={Math.ceil(this.state.totalResults/20)<=this.state.page} onClick={this.handleNext} type='button' className="btn btn-success">  Next &rarr; </button>}
        </div>
    </div>
</>
    )
  }
}
