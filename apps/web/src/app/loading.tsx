export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-beige-700 mb-4"></div>
            <p className="text-gray-600 text-lg">Loading...</p>
        </div>
    );
}
