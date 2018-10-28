class InstanceApi {
    constructor(protocols) {
        this.protocols = protocols
    }
    toNodeRegistered(node) {
        if(node.protocol in this.protocols) {
            return this.protocols[node.protocol].toNode("registered", {
                token: node.token
            }, this.onNodeConfirm)
        }
    }
    onNodeRegister(protocol) {
        if(protocol in this.protocols) {
            return this.protocols[protocol].onNode("register")
        }
    }
    onNodeConfirm(protocol) {
        if(protocol in this.protocols) {
            return this.protocols[protocol].onNode("confirm")
        }
    }
}