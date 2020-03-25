const path = require('path');
const fastify = require('fastify')({ logger: { prettyPrint: true } });

const PORT = process.env.PORT || 3011;

fastify.register(require('fastify-url-data'), (err) => {
	if (err) {
		console.log(err)
		throw err
	}
  })

function handleError(err) {
	fastify.log.error(err);
}

/**
 * Handling error emitted from assets loading plugin, so if the stats file is missing
 * then there is no point in initializing other plugins.
 *
 * `after` will be executed once the previous declared `register` has finished
 */
fastify.after(handleError);

fastify.register(require('./routes'), { prefix: 'promotions' });

fastify.listen(PORT, '0.0.0.0', function(err, address) {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
	fastify.log.info(`server listening on ${address}`);
});