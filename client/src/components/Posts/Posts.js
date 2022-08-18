import { CircularProgress, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Post from './Post/Post'

const Posts = ({ currentId, setCurrentId }) => {
  const posts = useSelector((state) => state.posts)
  useEffect(() => {
    console.log(posts)
  }, [posts])

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} currentId={currentId} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Posts
