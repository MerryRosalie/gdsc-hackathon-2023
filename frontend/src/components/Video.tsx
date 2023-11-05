import { useEffect, useRef } from "react";
import Draggable from "react-draggable";

export default function Video() {
  const localVideo = useRef<HTMLVideoElement>(null);

  const servers = {
    iceServers: [
      {
        urls: [
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
        ],
      },
    ],
    iceCandidatePoolSize: 10,
  };

  useEffect(() => {
    const init = async () => {
      const pc = new RTCPeerConnection(servers);
      const localStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { min: 640, ideal: 1920, max: 1920 },
          height: { min: 480, ideal: 1080, max: 1080 },
        },
        audio: false,
      });

      localStream.getTracks().forEach((track) => {
        pc.addTrack(track, localStream);
      });

      if (localVideo.current) localVideo.current.srcObject = localStream;
    };
    init();
  }, []);

  return (
    <Draggable>
      <video
        className="absolute right-4 top-1/3 w-64 rounded-md border-white bg-black"
        ref={localVideo}
        autoPlay
      />
    </Draggable>
  );
}
