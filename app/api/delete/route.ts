import { del } from "@vercel/blob"

export const runtime = "edge"

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const urlToDelete = searchParams.get("url") as string
  await del(
    "https://vfndtlleqhloumnf.public.blob.vercel-storage.com/02-10-2008%20-%202008%20Grammy%20Awards%20-%20Kanye%20West%20Performs%20Stronger%20&%20Hey%20Mama-NyJbbnqiZGPbjjSIqOGrgXR3sO355l.mpg"
  )

  return new Response()
}
