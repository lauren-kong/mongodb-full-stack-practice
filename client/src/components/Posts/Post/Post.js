import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import { ThumbUpAlt, Delete, MoreHoriz } from '@mui/icons-material'
import moment from 'moment'

import styles from './styles'
import { deletePost, likePost } from '../../../actions/posts'
const Post = ({ post, setCurrentId, currentId }) => {
  const dispatch = useDispatch()

  const handleMoreButton = () => {
    if (!currentId) {
      setCurrentId(post._id)
    } else {
      setCurrentId(null)
    }
  }

  return (
    <Card sx={styles.card}>
      <CardMedia image={post.selectedFile} sx={styles.media} title={post.title} />
      <div style={styles.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div style={styles.overlay2}>
        <Button sx={{ color: 'white' }} size="small" onClick={handleMoreButton}>
          <MoreHoriz fontSize="default" />
        </Button>
      </div>
      <div style={styles.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography sx={styles.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAlt fontSize="small" />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <Delete fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
