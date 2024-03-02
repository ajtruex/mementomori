import { del } from "@vercel/blob"

export const runtime = "edge"

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const urlToDelete = searchParams.get("url") as string
  await del(
    "https://vfndtlleqhloumnf.public.blob.vercel-storage.com/videos/KanyeWestPerformsStrongerAndHeyMama-i9CjQLZaTwNIJ3OIu6VaPiaa1nFDue.mp4"
  )

  return new Response()
}
