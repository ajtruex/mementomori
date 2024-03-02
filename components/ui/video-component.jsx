export default async function VideoComponent() {
  const src = "https://drbq6f6k64oj8.cloudfront.net/bill.mp4"
  return (
    <iframe
      src={src}
      height={300}
      allowFullScreen
      className="justify-center items-center
mx-auto"
    />
  )
}
