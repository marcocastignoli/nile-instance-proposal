class InstanceHttpProtocol {
    constructor(resource) {
        this.resource = resource
    }
    async toNode(action, parameters) {
        return fetch(this.resource + "/instance/to/node", {
            body: {
                action: action,
                parameters: parameters
            }
        })
    }
    onNode(action) {
        return this.server.on("/node/to/instance?action==" + action)
    }
}