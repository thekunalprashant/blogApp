import React from 'react'
import { Link } from 'react-router-dom'
import {BiLinkExternal} from "react-icons/bi"
import PostCategories from './PostCategories'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'

function Posts({state, stateObj, setState}) {
  return (
    <section>
        <div className='container'>
          <br /><br /><br />
          <div className="post-categories-wrapper">
            <div className="post-cards-categories">
              {state.map((item, index)=>(
                <div key={index} className="card">
                <Link to={`post/${item.slug}`}><img className="imgcover" src={item.coverPicture.url} alt="post" /></Link>
                <div className="text-span">
                  <br />
                  <div className="card-author-row">
                    <img src={item.author.avatar.url} alt="author" />
                    <small>{moment(item.createdTimeAndDate).format('MMMM Do YYYY, h:mm a')}</small>
                    <small className="author-name">{item.author.name}</small>
                  </div>
                  <h2>{item.title}</h2>
                  <RichText 
                    content={item.description.raw}
                    renderers={{
                      p:({children}) => <p>{children}</p>
                    }}
                  />
                  <Link to={`post/${item.slug}`}>Read more <BiLinkExternal/> </Link>
                </div>
              </div>
              ))}
            </div>
            <PostCategories stateObj={stateObj} setState={setState}/>
          </div>
        </div>
    </section>
  )
}

export default Posts