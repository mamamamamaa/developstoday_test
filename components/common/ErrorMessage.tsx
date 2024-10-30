import Link from "next/link"

type ErrorMessageProps = {
  message: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <section className="flex flex-col items-center rounded-lg border border-red-300 bg-red-100 p-4 text-red-700">
    <p className="mb-4 text-center">{message}</p>
    <Link href="/" passHref>
      <button
        type="button"
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Go Home
      </button>
    </Link>
  </section>
)
