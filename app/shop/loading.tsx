export default function ShopLoading() {
  return (
    <div className="animate-pulse">
      <div className="bg-dark-950 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <div className="skeleton mx-auto h-3 w-16 !bg-dark-800" />
          <div className="skeleton mx-auto h-10 w-48 !bg-dark-800" />
          <div className="skeleton mx-auto h-4 w-64 !bg-dark-800" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          <div className="hidden lg:block w-64 shrink-0 space-y-6">
            <div className="skeleton h-4 w-16" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="skeleton h-4 w-4 !rounded-sm" />
                <div className="skeleton h-4 w-24" />
              </div>
            ))}
            <div className="h-px bg-neutral-100 my-4" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="skeleton h-4 w-4 !rounded-sm" />
                <div className="skeleton h-4 w-28" />
              </div>
            ))}
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-neutral-200">
              <div className="skeleton h-4 w-24" />
              <div className="skeleton h-8 w-32" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white overflow-hidden border border-neutral-200">
                  <div className="skeleton aspect-[4/5] !rounded-none" />
                  <div className="p-5 space-y-3">
                    <div className="skeleton h-5 w-3/4" />
                    <div className="skeleton h-4 w-full" />
                    <div className="skeleton h-4 w-2/3" />
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-neutral-100">
                      <div className="skeleton h-5 w-20" />
                      <div className="skeleton h-4 w-16" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
