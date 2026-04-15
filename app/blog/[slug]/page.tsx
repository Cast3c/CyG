import React from 'react'

type Props = {
    params : { 
        slug: string
    }
}

const BlogPostPage = ({params}: Props) => {
  return (
    <div>
        <h1>Post: {params.slug} </h1>        
    </div>
  )
}

export default BlogPostPage