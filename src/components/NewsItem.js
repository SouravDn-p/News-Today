import React from 'react'
import { Link } from 'react-router-dom';

export default function NewsItem (props) {
    let {title,description, imageUrl , url,publishedAt,name} = props;
    return (
      <>
        <div>
            <div  className="card bg-dark bg-gradient my-3"   >
                    <div className='d-flex' style={{right:'0',position:'absolute',}} >
                    <span className=" badge bg-danger p-absolute" >{name ? name:'unknown'}</span>
                    </div>

                    <img src={imageUrl ? imageUrl :"https://www.hindustantimes.com/ht-img/img/2023/09/05/1600x900/KYLIE_1693916311994_1693916312633.jpg"}  className="card-img-top" alt="..." style={{width:"100%",height:'200px'}} />
                    
                  <div className="card-body">
                    <h5 className="card-title text-warning">{ title.slice(0,42)}...</h5>
                    <p className='card-text text-light'>{new Date(new Date(publishedAt)).toGMTString()}</p>
                    <p className="card-text text-light  ">{description ? description.slice(0,120) : "It's clear that the third quarter is still g"}...</p>
                    <Link to={url} target='_blank' rel='noreferrer' className="btn btn-sm btn-primary">Go Here</Link>
                  </div>
            </div>
        </div>
        
      </>
    )
}
