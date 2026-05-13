export default function ProductLoading() {
  return (
    <div className="animate-pulse max-w-7xl mx-auto px-6 py-12">
      <div className="flex gap-2 mb-8">
        <div className="skeleton h-3 w-12" />
        <div className="skeleton h-3 w-12" />
        <div className="skeleton h-3 w-32" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-3">
          <div className="skeleton aspect-[4/5] !rounded-none" />
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="skeleton aspect-square !rounded-none" />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="skeleton h-3 w-16" />
          <div className="skeleton h-10 w-3/4" />
          <div className="skeleton h-7 w-32" />
          <div className="h-px bg-neutral-200" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-2/3" />

          <div className="border border-neutral-200 p-6 space-y-3 mt-8">
            <div className="skeleton h-3 w-24" />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex gap-3">
                <div className="skeleton h-1.5 w-1.5 !rounded-none" />
                <div className="skeleton h-4 flex-1" />
              </div>
            ))}
          </div>

          <div className="space-y-3 mt-8">
            <div className="skeleton h-12 w-full !rounded-none" />
            <div className="skeleton h-12 w-full !rounded-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
