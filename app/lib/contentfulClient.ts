const contentful = require('contentful')
const client = contentful.createClient({
  space:process.env.SPACE_ID ,
  accessToken: process.env.CONTENT_DELIVERY_TOKEN
})
export default client 