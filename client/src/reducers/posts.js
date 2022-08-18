const initialState = []

const posts = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'FETCH_ALL':
      return payload
    case 'CREATE':
      return [...state, payload]
    case 'UPDATE':
      return state.map((post) => (post._id === payload._id ? payload : post))
    case 'DELETE':
      return state.filter((post) => post._id !== payload._id)
    case 'LIKE':
      return state.map((post) => (post._id === payload._id ? { ...post, likeCount: post.likeCount + 1 } : post))
    default:
      return state
  }
}

export default posts
