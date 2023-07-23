const {Connections} = require("./constants/rabbitmq");
const {connect} = require("amqplib");
const RapidMqEvents = require("./events/rapidMqEvents");
const EventAgent = require("./EventAgent");

(async () => {

    const connection = await connect(Connections.Local, "heartbeat=60");

    let e = new EventAgent(connection);

    const rapidMqEvents = new RapidMqEvents();

    await rapidMqEvents.IoTDeviceNotificationReceived(e);

})();