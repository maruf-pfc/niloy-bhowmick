export function CategorySkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-8 w-48 rounded-md bg-gray-800 animate-pulse" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-video rounded-lg bg-gray-800 animate-pulse" />
        ))}
      </div>
    </div>
  )
}

export function VideoSkeleton() {
  return <div className="aspect-video rounded-lg bg-gray-800 animate-pulse" />
}
