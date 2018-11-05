class InstanceWsProtocol {
    constructor(ws) {
        this.ws = ws
        this.socket = null
    }
    setSocket(socket) {
        this.socket = socket
    }
    to(channel, action, parameters, confirm) {
        this.socket.emit(channel, {
            action: action,
            parameters: parameters
        })
        return confirm()
    }
    on(channel, action) {
        return new Promise((resolve, reject) => {
            this.socket.on(channel, data => {
                if (data.action === action) {
                    resolve(data.parameters)
                }
            })
        })
    }
}
