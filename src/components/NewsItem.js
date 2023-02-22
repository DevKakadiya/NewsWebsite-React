import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
     let {title,imgurl,desc,url,author,date_time} = this.props;
  
     
    return (
      <> 
           
      <div>
        <div className="card my-4" style={{width: "22rem"}}>
        {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {news_src}
    <span className="visually-hidden">unread messages</span>
  </span> */}
        <img src={imgurl} className="card-img-top" alt="This News Don't have an image"/>
        <div className="card-body">
        <h5 className="card-title">{title=""?"Undefined":title}</h5>
        <p className="card-text">{desc}</p>
        
        <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {date_time}</small></p>
        <a href={url} className="btn btn-primary">Read More</a>
         </div>
      </div>
      </div>
      </>

    )
  }
}
