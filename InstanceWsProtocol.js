class InstanceWsProtocol {
    constructor(ws) {
        this.ws = ws
        this.socket = null
    }
    setSocket(socket) {
        this.socket = socket
    }
    toNode(action, parameters, confirm) {
        this.socket.emit("instance.to.node", {
            action: action,
            parameters: parameters
        })
        return confirm()
    }
    onNode(action) {
        return new Promise((resolve, reject) => {
            this.socket.on("node.to.instance", data => {
                if (data.action === action) {
                    resolve(data.parameters)
                }
            })
        })
    }
}
