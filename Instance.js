require("./InstanceApi")

class Instance {
    constructor(protocols) {
        this.api = new InstanceApi(protocols)
    }
    loadListeners(protocol) {
        this.api.onNodeRegister(protocol).then(this.onRegisterNode)
    }
    onRegisterNode({ information, hash }) {
        let ws_id_confirm = ws_id
        // register node then send confirmation
        this.api.toNodeRegistered(token)
            // check if confirmation was received
            .then(({ ws_id, confirm }) => {
                if (ws_id == ws_id_confirm) {
                    if (confirm) {
                        console.log(`Node "${ws_id}" confirmed registration`)
                    } else {
                        console.log(`Node "${ws_id}" didn't confirm registration`)
                    }
                }
            })
    }
}