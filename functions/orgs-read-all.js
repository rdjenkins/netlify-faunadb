/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query


exports.handler = (event, context) => {
  console.log('Function `orgs-read-all` invoked')
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  }) 
  return client.query(q.Paginate(q.Match(q.Ref('indexes/all_orgs'))))
    .then((response) => {
      const orgsRefs = response.data
      console.log('Orgs refs', orgsRefs)
      console.log(`${orgsRefs.length} Orgs found`)
      const getAllOrgsDataQuery = orgsRefs.map((ref) => {
        return q.Get(ref)
      })
      // then query the refs
      return client.query(getAllOrgsDataQuery).then((ret) => {
        return {
          statusCode: 200,
          body: JSON.stringify(ret)
        }
      })
    }).catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
