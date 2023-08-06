import React, { useEffect, useState } from 'react'
import { getAllCategories, getAllCategoryPosts, getPosts } from '../services/api';

function PostCategories({stateObj, setState}) {
  const[categories, setCategories] =useState();
  useEffect(()=>{
    getAllCategories().then(res=>{
      setCategories(res)
    })
  },[])
  const handleCategoriesClick=(id)=>{
    getAllCategoryPosts(id).then(res=>{
      let temp={...stateObj}
      temp[0].posts=res.category.posts;
      setState(temp);
    })
  }
  const getAllPosts=()=>{
    getPosts().then(res=>{
      let temp={...stateObj}
      temp[0].posts=res.posts;
      setState(temp);
    }).catch(err=>console.log(err))
  }
  
  return (
    <>
        <div className="post-categories">
            <h2>Categories</h2>
            <span onClick={()=>getAllPosts()}>All</span>
            {categories?.categories.map((cat, index)=>(
              <span key={index} onClick={()=> handleCategoriesClick(cat.id)}>{cat.categoryName}</span>
            ))}
        </div>
    </>
  )
}

export default PostCategories