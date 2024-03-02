export default async function VideoComponent() {
  const src = "https://d34073qwlt06j3.cloudfront.net/bill.mp4"
  return <iframe src={src} frameborder="0" allowfullscreen />
}
