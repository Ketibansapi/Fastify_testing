const fastify = require ('fastify') ({ logger: true }) // Require fastify framework

fastify.get ('/', async (request, reply) => {         // Routes
  return { hello: 'universe'}
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info (`Server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
