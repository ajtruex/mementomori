"use client"
import Image from "next/image"
import Hero from "@/components/hero"
import Video from "next-video"
import { upload } from "@vercel/blob/client"
import { useState, useRef } from "react"
// import awesomeVideo from "https://d34073qwlt06j3.cloudfront.net/bill.mp4"
import billVid from "/videos/d34073qwlt06j3.cloudfront.net_bill.mp4"
import { Suspense } from "react"
import VideoComponent from "@/components/ui/video-component.jsx"

export default function Home() {
  return (
    <div>
      <Video src={billVid} />
      {/* <Video src={awesomeVideo} /> */}
      <Suspense fallback={<p>Loading video...</p>}>
        <VideoComponent />
      </Suspense>
      <Hero />
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  )
}
