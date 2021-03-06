const OfflineMessage = require("./OfflineMessage");
const MessageIdentifiers = require("./MessageIdentifiers");

class OpenConnectionRequest2 extends OfflineMessage {
    static getId(){
        return MessageIdentifiers.ID_OPEN_CONNECTION_REQUEST_2;
    }

    constructor(buffer){
        super();
        this.buffer = buffer;
        this.clientId = -1;
        this.serverAddress = "";
        this.serverPort = -1;
        this.mtuSize = -1;
    }

    decode(){
        this.readMagic();
        let addr = this.readAddress();
        this.serverAddress = addr.ip;
        this.serverPort = addr.port;
        this.mtuSize = this.getByteBuffer().readShort();
        this.clientId = this.getByteBuffer().readLong();
        this.getByteBuffer().flip();
    }
}

module.exports = OpenConnectionRequest2;