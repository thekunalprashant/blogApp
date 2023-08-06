import {request} from "graphql-request";
import * as gqlQuery from './gql'
export const featuredPost=async()=>{
    const url=process.env.REACT_APP_URL;
    
      const res= await request(url, gqlQuery.featuredPostsQuery());
      return res;
}
export const getPosts=async()=>{
    const url=process.env.REACT_APP_URL;
      const res= await request(url, gqlQuery.getPostsQuery());
      return res;
}
export const getAllCategories=async()=>{
  const url=process.env.REACT_APP_URL;
    const res= await request(url, gqlQuery.getCategoriesQuery());
    return res;
}
export const getAllCategoryPosts=async(id)=>{
  const idObject={
    id:id
  }
  const url=process.env.REACT_APP_URL;
    const res= await request(url, gqlQuery.getCategoryQuery(), idObject);
    return res;
}
export const getPost=async(id)=>{
  const idObject={
    slug:id
  }
  const url=process.env.REACT_APP_URL;
    const res= await request(url, gqlQuery.getPostQuery(), idObject);
    return res;
}
export const getFeaturedPost=async(id)=>{
  const idObject={
    slug:id
  }
  const url=process.env.REACT_APP_URL;
    const res= await request(url, gqlQuery.getFeaturedPostQuery(), idObject);
    return res;
}