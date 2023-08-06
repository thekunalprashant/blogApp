import React, { useEffect, useState } from 'react'
import { getFeaturedPost } from '../services/api';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Header from '../components/Header';

function FeaturedPost() {
  const[post, setPost]= useState();
  const[Loading, setLoading]=useState(true);
  const {id}=useParams();
  useEffect(()=>{
    getFeaturedPost(id).then(res=>{
      setPost(res.featuredPost);
      setLoading(false);
    })
  },[id])

  return (
    <>{!Loading?<div className='blog-post'>
    <Header data={false}/>
    <div className='container'>
    {post && <div className="single-post">
      <h1 className="title">{post?.title}</h1>
      <div className="inline-text">
        <p>{moment(post?.createdTimeAndDate).format("MMM Do YYYY, HH:MM a")}{" "}
        {post?.categories?.map((cat, ind)=>(
          <span className='categories' key={ind}>{cat?.categoryName}</span>
        ))}
        </p>

      </div>
      <img src={post.coverPicture.url} alt="post-imag" />
      <div className="richText">
        <RichText
        content={post.description.raw}
        />
      </div>
    </div>}
    </div>
    </div>:<div class="loading">Loading&#8230;</div>
  }</>
  )
}

export default FeaturedPost