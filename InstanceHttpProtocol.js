class InstanceHttpProtocol {
    constructor(resource) {
        this.resource = resource
    }
    async to(channel, action, parameters) {
        return fetch(this.resource + channel, {
            body: {
                action: action,
                parameters: parameters
            }
        })
    }
    on(channel, action) {
        return this.server.on("channel==" + channel + "&action==" + action)
    }
}