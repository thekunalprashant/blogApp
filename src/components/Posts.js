import React from 'react'
import { Link } from 'react-router-dom'
import {BiLinkExternal} from "react-icons/bi"
import PostCategories from './PostCategories'

function Posts() {
  return (
    <section>
        <div className='container'>
          <br /><br /><br />
          <div className="post-categories-wrapper">
            <div className="post-cards-categories">
              <div className="card">
                <img src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="post" />
                <div className="text-span">
                  <br />
                  <div className="card-author-row">
                    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="author" />
                    <small>26th June, 2023, 10 AM</small>
                    <small className="author-name">John Doe</small>
                  </div>
                  <h2>Lorem ipsum dolor sit</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo.</p>
                  <Link>Read more <BiLinkExternal/> </Link>
                </div>
              </div>
              <div className="card">
                <img src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="post" />
                <div className="text-span">
                  <br />
                  <div className="card-author-row">
                    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="author" />
                    <small>26th June, 2023, 10 AM</small>
                    <small className="author-name">John Doe</small>
                  </div>
                  <h2>Lorem ipsum dolor sit</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo.</p>
                  <Link>Read more <BiLinkExternal/> </Link>
                </div>
              </div>
              <div className="card">
                <img src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="post" />
                <div className="text-span">
                  <br />
                  <div className="card-author-row">
                    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="author" />
                    <small>26th June, 2023, 10 AM</small>
                    <small className="author-name">John Doe</small>
                  </div>
                  <h2>Lorem ipsum dolor sit</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo.</p>
                  <Link>Read more <BiLinkExternal/> </Link>
                </div>
              </div>
              <div className="card">
                <img src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="post" />
                <div className="text-span">
                  <br />
                  <div className="card-author-row">
                    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="author" />
                    <small>26th June, 2023, 10 AM</small>
                    <small className="author-name">John Doe</small>
                  </div>
                  <h2>Lorem ipsum dolor sit</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo.</p>
                  <Link>Read more <BiLinkExternal/> </Link>
                </div>
              </div>
            </div>
            <PostCategories />
          </div>
        </div>
    </section>
  )
}

export default Posts