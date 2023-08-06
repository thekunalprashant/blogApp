import moment from 'moment/moment';
import React from 'react'
import { Link } from 'react-router-dom'
function FeaturedPosts({state}) {
    console.log(state);
  return (
    <div className='featured-blogs-wrapper'>
                <div className='container'>
                 <div className='blogs-items'>
                    {state.map((item, index)=>(
                        <div key={index} className='featured-blogs'>
                        <Link to={`featured/${item.slug}`} >
                          <div className='text-layer'>
                            <div className='badge'>
                                {item.categories.map((catName, catId)=>(
                                    <span key={catId}>{catName.categoryName}</span>
                                ))}
                              
                              </div>
                              {index<1? <h1>{item.title}</h1>: <h2>{item.title}</h2>}
                              <div className='authors-row'>
                                <img src={item.author.avatar.url} alt="avatar" />
                                <span>{item.author.name}, {moment(item.createdTimeAndDate).format("Do of MMM YYYY")}</span>
                              </div>
                            
                          </div>
                          <img src={item.coverPicture.url} alt='post' />
                        </Link>
                      </div>
                    ))}
                 </div>
                </div>
            
           </div>
  )
}

export default FeaturedPosts