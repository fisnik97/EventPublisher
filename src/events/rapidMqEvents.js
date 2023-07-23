class RapidMqEvents {

    Exchanges = {
        IoT: "IoT"
    }

    Queued = {
        AlertQueue: "alert.queue", NotificationsQueue: "notifications.queue"
    }

    RoutingKeys = {
        IoTAlertReceived: "device.iot.alert.received", IoTNotificationReceived: "device.notification.received"
    }


    IoTAlertReceived = async (e) => {
        await e.publishEvent(this.Exchanges, this.RoutingKeys.IoTAlertReceived, {
            DeviceId: 3135,
            SerialNumber: "21A46234234",
            Alerts: [
                {
                    id: 1,
                    cause: "network failure"
                },
                {
                    id: 2,
                    cause: "unknown"
                },
                {
                    id: 3,
                    cause: "memory errors"
                }
            ]
        });
    }


    IoTDeviceNotificationReceived = async (e) => {
        await e.publishEvent(this.Exchanges.IoT, this.RoutingKeys.IoTNotificationReceived, {
            DeviceId: 3135,
            SerialNumber: "21A46234234",
            Alerts: [
                {
                    id: 1,
                    cause: "network failure"
                },
                {
                    id: 2,
                    cause: "unknown"
                },
                {
                    id: 3,
                    cause: "memory errors"
                }
            ]
        });
    }
}

module.exports = RapidMqEvents;