import * as api from '../api'

// Action Creators
// const getPosts = () => {
//   return {
//     type: 'FETCH_ALL',
//     payload: [],
//   }
// }
// To make it use thunk
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost()
    dispatch({ type: 'FETCH_ALL', payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost)
    dispatch({ type: 'CREATE', payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const updatePost = (id, updatePost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatePost)
    dispatch({ type: 'UPDATE', payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id)
    dispatch({ type: 'DELETE', payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)
    dispatch({ type: 'LIKE', payload: data })
  } catch (error) {
    console.log(error)
  }
}
