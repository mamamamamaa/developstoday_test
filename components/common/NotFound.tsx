type NotFoundProps = {
  message?: string
}

export const NotFound = ({ message = "No data available." }: NotFoundProps) => (
  <div className="flex h-40 w-full flex-col items-center justify-center rounded-lg bg-gray-100 p-4">
    <p className="text-lg font-semibold text-gray-600">{message}</p>
    <button
      type="button"
      onClick={() => window.location.reload()}
      className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
    >
      Retry
    </button>
  </div>
)
