import Image from "next/image"
import Hero from "@/components/hero"
import Video from "next-video"
import awesomeVideo from "https://d34073qwlt06j3.cloudfront.net/KanyeWestPerformsStrongerAndHeyMama.mp4"
import billVid from "/videos/bill.mp4"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Video src={billVid} />
      <Video src={awesomeVideo} />
      <Hero />
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  )
}
