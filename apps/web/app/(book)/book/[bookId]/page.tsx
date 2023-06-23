import { authOptions } from "@/lib/auth/auth"
import { getCurrentUser } from "@/lib/auth/session"
import axios from "axios"
import { redirect, notFound } from "next/navigation"

interface BookPageProps {
  params: { bookId : string }
}

export default async function BookPage({ params }: BookPageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }
  const url = `https://www.googleapis.com/books/v1/volumes/${params.bookId}?key=${process.env.GOOGLE_BOOKS_API_KEY}`
  const book = await axios.get(url)
  // const processedBook = book.data
  if (!book) {
    notFound()
  }

  return (
    <div className="grid w-full gap-10">
   Book Contnet test
  </div>
  )
}
