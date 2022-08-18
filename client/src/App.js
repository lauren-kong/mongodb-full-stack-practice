import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memories from './images/memories.png'
import { appbarStyle, headingStyle, imageStyle } from './styles'

const App = () => {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" sx={appbarStyle}>
        <Typography variant="h2" align="center" sx={headingStyle}>
          Memories
        </Typography>
        <img src={memories} alt="memories" height="60" style={imageStyle} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} currentId={currentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
