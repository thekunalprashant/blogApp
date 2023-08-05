import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div className='banner'>
            <div className='layer'>
                <div className='overlay'>
                    <img src={"https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='Banner'/>
                </div>
            </div>
            <div className='featured-blogs-wrapper'>
                <div className='container'>
                 <div className='blogs-items'>
                 <div className='featured-blogs'>
                    <Link to={"/"} >
                      <div className='text-layer'>
                        <div className='badge'>
                          <span>Quotes</span>
                          <span>Books</span>
                          </div>
                          <h1>Title 1 see</h1>
                          <div className='authors-row'>
                            <img src={"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="avatar" />
                            <span>John Doe, Feburary 27, 2023</span>
                          </div>
                        
                      </div>
                      <img src='https://images.pexels.com/photos/1467217/pexels-photo-1467217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='post' />
                    </Link>
                  </div>
                  <div className='featured-blogs'>
                    <Link to={"/"} >
                      <div className='text-layer'>
                        <div className='badge'>
                          <span>Article</span>
                          </div>
                          <h2>Title 2 see</h2>
                          <div className='authors-row'>
                            <img src={"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="avatar" />
                            <span>John Doe, Feburary 27, 2023</span>
                          
                        </div>
                      </div>
                      <img src='https://images.pexels.com/photos/1467217/pexels-photo-1467217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='post' />
                    </Link>
                  </div>
                  <div className='featured-blogs'>
                    <Link to={"/"} >
                      <div className='text-layer'>
                        <div className='badge'>
                          <span>Article</span>
                          </div>
                          <h2>Title 3 see</h2>
                          <div className='authors-row'>
                            <img src={"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="avatar" />
                            <span>John Doe, Feburary 27, 2023</span>
                          
                        </div>
                      </div>
                      <img src='https://images.pexels.com/photos/1467217/pexels-photo-1467217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='post' />
                    </Link>
                  </div>
                 </div>
                </div>
            
           </div>
        </div>
    </header>
  )
}

export default Header