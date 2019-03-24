const fastify = require ('fastify') ({ logger:true })

fastify.route({
  method: 'GET',
  url: '/',
  schema: {                     // request needs to have a querystring with a `name` parameter
    querystring: {
      name: {trype : 'string'}
    },
    response: {                 // the response needs to be an object with an `hello` property of type 'string'
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string'}
        }
      }
    }
  },

  beforeHandler: async (request, reply) => {            // this function is executed for every request before the handler is executed
  }, // E.g. check authentication
  handler: async (request, reply) => {
    return { hello:'world'}
  }
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info ( `Server running on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.info(err)
    process.exit(1)
  }
}
start()
