import { gql } from "graphql-request"

export const featuredPostsQuery=()=>{
    const query= gql`
    query featuredPostsQuery {
        featuredPosts {
          id
          title
          coverPicture {
            url
          }
          slug
          createdTimeAndDate
          author {
            name
            avatar {
              url
            }
          }
          categories {
            categoryName
          }
        }
      }
      `
      return query
}
export const getPostsQuery=()=>{
    const query= gql`
        query getPostsQuery {
        posts {
          id
          title
          description{
            raw
          }
          coverPicture {
            url
          }
          slug
          createdTimeAndDate
          author {
            name
            avatar {
              url
            }
          }
          category {
            categoryName
          }
        }
      }      
      `
      return query
}
export const getCategoriesQuery=()=>{
  const query= gql`
  query categoriesQuery {
    categories {
      id
      categoryName
    }
  }        
    `
    return query
}
export const getCategoryQuery=()=>{
  const query= gql`
    query getCategoryQuery($id: ID!) {
    category(where: {id: $id}) {
      posts {
      id
      title
      description{
        raw
      }
      coverPicture {
        url
      }
      slug
      createdTimeAndDate
      author {
        name
        avatar {
          url
        }
      }
    }
    } 
  }     
    `
    return query
}
export const getPostQuery=()=>{
  const query= gql`
    query getPostQuery($slug: String!) {
      post(where: {slug: $slug}){
        title
        description{
          raw
        }
        coverPicture {
          url
        }
        slug
        createdTimeAndDate
        author {
          name
          avatar {
            url
          }
        }
        category {
          categoryName
        }
      }
    }
    
    `
    return query
}
export const getFeaturedPostQuery=()=>{
  const query= gql`
    query getFeaturedPostQuery($slug: String!) {
      featuredPost(where: {slug: $slug}){
            title
        description{
          raw
        }
        coverPicture {
          url
        }
        slug
        createdTimeAndDate
        author {
          name
          avatar {
            url
          }
        }
        categories {
          categoryName
        }
      }
    }
    
    `
    return query
}