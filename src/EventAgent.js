class EventAgent {
    connection;

    constructor(connection) {
        this.connection = connection;
    }

    async publishEvent(exchange, routingKey, body){
        const channel = await this.connection.createChannel();

        channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(body)));

        channel.close();

        console.log(`Message published in exchange: '${exchange.toUpperCase()}', routing-key: '${routingKey}' `);

    }
}

module.exports = EventAgent;