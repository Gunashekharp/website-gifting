export default function HomeLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-dark-950 min-h-[90vh] flex items-center justify-center">
        <div className="text-center space-y-6 px-6">
          <div className="skeleton mx-auto h-3 w-32 !bg-dark-800" />
          <div className="skeleton mx-auto h-12 w-[400px] max-w-full !bg-dark-800" />
          <div className="skeleton mx-auto h-12 w-[320px] max-w-full !bg-dark-800" />
          <div className="skeleton mx-auto h-4 w-[250px] max-w-full !bg-dark-800 mt-6" />
          <div className="flex gap-4 justify-center mt-8">
            <div className="skeleton h-14 w-44 !bg-dark-800 !rounded-none" />
            <div className="skeleton h-14 w-44 !bg-dark-800 !rounded-none" />
          </div>
        </div>
      </div>

      {/* Section skeleton */}
      <div className="py-24 max-w-7xl mx-auto px-6">
        <div className="skeleton mx-auto h-3 w-16 mb-4" />
        <div className="skeleton mx-auto h-10 w-64 mb-16" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border border-neutral-200 p-12 space-y-4">
              <div className="skeleton mx-auto h-12 w-12" />
              <div className="skeleton mx-auto h-5 w-20" />
            </div>
          ))}
        </div>
      </div>

      {/* Product cards skeleton */}
      <div className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="skeleton mx-auto h-3 w-16 mb-4" />
          <div className="skeleton mx-auto h-10 w-56 mb-16" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white overflow-hidden border border-neutral-200">
                <div className="skeleton aspect-[4/5] !rounded-none" />
                <div className="p-5 space-y-3">
                  <div className="skeleton h-6 w-3/4" />
                  <div className="skeleton h-4 w-full" />
                  <div className="skeleton h-4 w-2/3" />
                  <div className="skeleton h-5 w-20 mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
