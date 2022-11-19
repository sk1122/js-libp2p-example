import { createLibp2p } from "libp2p";
import { tcp } from "@libp2p/tcp"
import { noise } from "@chainsafe/libp2p-noise"
import { mplex } from "@libp2p/mplex"

const main = async () => {
    const node = await createLibp2p({
        addresses: {
            listen: ["/ip4/0.0.0.0/tcp/0"]
        },
        transports: [tcp()],
        connectionEncryption: [noise()],
        streamMuxers: [mplex()]
    })

    console.log("LOG - node is starting")
    await node.start()
    console.log("LOG - node is started")

    console.log("LOG - listening on addresses")
    node.getMultiaddrs().map(addr => {
        console.log(addr.toString())
    })

    console.log("LOG - node is stopping")
    await node.stop()
    console.log("LOG - node is stopped")
}

main().then().catch(e => console.error(e))