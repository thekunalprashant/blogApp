import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Posts from "../components/Posts"
import { featuredPost, getPosts} from '../services/api'
function Home() {
  const[state, setState]=useState();
  const[Loading, setLoading]=useState(true);
  useEffect(()=>{
    Promise.all([getPosts(), featuredPost()]).then(res=>{
      setState(res);
      console.log(res);
      setLoading(false); 
    })
  },[])
  return (
    <>
    {!Loading?<>
      <Header data={true} state={state[1]?.featuredPosts}/>
      <Posts state={state[0]?.posts} stateObj={state} setState={setState} /></>:
      <div class="loading">Loading&#8230;</div>
    }</>
  )
}

export default Home