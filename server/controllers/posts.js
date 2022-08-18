import PostMessage from '../models/postMessage.js'
import mongoose from 'mongoose'

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPost = async (req, res) => {
  const post = req.body
  const newPost = new PostMessage(post)
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params
  const post = req.body

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })

  res.json(updatedPost)
}

export const deletePost = async (req, res) => {
  const { id: _id } = req.params

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')
  const deletedPost = await PostMessage.findByIdAndDelete(_id)
  res.json({ _id })
}

export const likePost = async (req, res) => {
  const { id: _id } = req.params
  console.log(_id)

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

  const thePost = await PostMessage.findOne({ _id })
  const likedPost = await PostMessage.findOneAndUpdate(thePost, { likeCount: thePost.likeCount + 1 })
  res.json({ _id })
}
