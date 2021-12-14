import POST from '../api/post'

const subscribe = async (data) => {
  const response = await POST('challenge-newsletter/', data)
  console.log(response)
  return response
}

export default subscribe
