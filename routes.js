

module.exports = function routes(instance, opts, done) {
	// Declaring a route
	instance.get('/:id', async (request, reply) => {
		const responseHTML = `<p>Hello World!!!!</p>`;
		reply.header('Content-Type', 'text/html').send(responseHTML);
	});

	instance.post('/posting', async () => 'Done');

	// done is the function to continue with fastify lifecycle
	done();
};