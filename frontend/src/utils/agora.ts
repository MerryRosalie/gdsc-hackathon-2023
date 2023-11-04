const servers = {
    iceServers: [
        {
            urls: ['stun:stun1.1.google.com:19302', 'stun:stun2.1.google.com:19302']
        }
    ]
}

const joinRoom = async (roomId: string) => {
    await createChannel(roomId).join();
}

const createOffer = async () => {
    await createPeerConnection(MemberId);
    let offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    client.sendMessageToPeer({text: JSON.stringify({'type': 'offer', 'offer': offer})}, MemberId);
}