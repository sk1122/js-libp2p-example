"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const libp2p_1 = require("libp2p");
const tcp_1 = require("@libp2p/tcp");
const libp2p_noise_1 = require("@chainsafe/libp2p-noise");
const mplex_1 = require("@libp2p/mplex");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const node = yield (0, libp2p_1.createLibp2p)({
        addresses: {
            listen: ["/ip4/127.0.0.1/tcp/0"]
        },
        transports: [(0, tcp_1.tcp)()],
        connectionEncryption: [(0, libp2p_noise_1.noise)()],
        streamMuxers: [(0, mplex_1.mplex)()]
    });
    console.log("LOG - node is starting");
    yield node.start();
    console.log("LOG - node is started");
    console.log("LOG - listening on addresses");
    node.getMultiaddrs().map(addr => {
        console.log(addr.toString());
    });
    console.log("LOG - node is stopping");
    yield node.stop();
    console.log("LOG - node is stopped");
});
main().then().catch(e => console.error(e));
