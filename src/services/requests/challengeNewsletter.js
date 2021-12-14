import POST from '../api/post'

const subscribe = async (data) => {
  const response = await POST('challenge-newsletter/', data)
  return response
}

export default subscribe
