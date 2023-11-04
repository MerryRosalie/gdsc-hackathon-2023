"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { PhoneIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { DbContext } from "~/app/context/FirebaseContext";

export default function Video() {
  const pcRef = useRef<RTCPeerConnection | null>(null);
  const localStream = useRef<MediaStream | null>(null);
  const remoteStream = useRef<MediaStream | null>(null);
  const localVideo = useRef<HTMLVideoElement | null>(null);
  const remoteVideo = useRef<HTMLVideoElement | null>(null);
  const db = useContext(DbContext);

  useEffect(async () => {
    pcRef.current = new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            "stun:stun1.1.google.com:19302",
            "stun:stun2.1.google.com:19302",
          ],
        },
      ],
      iceCandidatePoolSize: 10,
    });
    const media = await navigator.mediaDevices.getUserMedia(constraints);
    localStream.current.srcObject = media;
  }, []);

  return (
    <div className="absolute">
      <video className="mb-1 bg-black" ref={localVideo} autoPlay />
      <video className=" bg-black" ref={remoteVideo} autoPlay />
    </div>
  );
}
