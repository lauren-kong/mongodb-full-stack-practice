import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Button, Typography, Paper } from '@mui/material'
import { useTheme } from '@emotion/react'
import FileBase from 'react-file-base64'

import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {
  const initialPostData = {
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  }
  const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null))
  const dispatch = useDispatch()
  const theme = useTheme()
  const [postData, setPostData] = useState(initialPostData)

  useEffect(() => {
    if (post) {
      setPostData(post)
    } else {
      setPostData(initialPostData)
    }
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentId) {
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData))
    }
    clear()
  }

  const clear = (e) => {
    setCurrentId(null)
    setPostData(initialPostData)
  }

  return (
    <Paper sx={{ padding: theme.spacing(2) }}>
      <form
        sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          sx={{ margin: theme.spacing(1) }}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          sx={{ margin: theme.spacing(1) }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          sx={{ margin: theme.spacing(1) }}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          sx={{ margin: theme.spacing(1) }}
        />
        <div style={{ width: '97%', margin: '10px 0' }}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button sx={{ marginBottom: '10px' }} variant="contained" color="primary" size="large" type="submit" fullWidth>
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="small" type="submit" onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form
