import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="max-w-4xl mx-auto p-4 flex flex-col items-center justify-center min-h-screen text-center">
            <h2 className="text-3xl font-semibold mb-4">Not Found</h2>
            <p className="mb-6 text-gray-600">Could not find requested resource</p>
            <Link href="/" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md transition">
                Return Home
            </Link>
        </div>
    )
}
