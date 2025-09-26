export default function ViewLoader() {
      return (
            <section className="relative min-h-[100dvh] w-full bg-white text-black">
                  {/* Fixed close button */}
                  <div className="fixed right-4 top-4 z-30">
                        <div aria-hidden className="h-10 w-10 rounded-full bg-black/10 animate-pulse" />
                  </div>

                  {/* Header: User info + Download */}
                  <header className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10 pt-16 md:pt-20">
                        <div className="flex items-center justify-between gap-4">
                              {/* User info */}
                              <div className="flex items-center gap-3">
                                    <div aria-hidden className="h-10 w-10 rounded-full bg-black/10 animate-pulse" />
                                    <div className="space-y-1">
                                          <div aria-hidden className="h-3 w-28 sm:w-40 rounded-full bg-black/10 animate-pulse" />
                                          <div aria-hidden className="h-2.5 w-16 sm:w-24 rounded-full bg-black/10 animate-pulse" />
                                    </div>
                              </div>

                              {/* Download button */}
                              <div className="flex items-center gap-2">
                                    <div aria-hidden className="hidden sm:block h-9 w-24 rounded-full bg-[rgb(31,71,69)]/10 animate-pulse" />
                                    <div aria-hidden className="h-10 w-32 rounded-lg bg-[rgb(31,71,69)]/20 animate-pulse" />
                              </div>
                        </div>
                  </header>

                  {/* Main image area */}
                  <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10 mt-6 md:mt-10">
                        <div className="relative w-full overflow-hidden rounded-xl">
                              {/* Large image placeholder: keep responsive ratio */}
                              <div aria-hidden className="w-full bg-black/5 animate-pulse" style={{ aspectRatio: "16/10" }} />
                              {/* Top-right overlay like button placeholder */}
                              <div className="absolute right-3 top-3">
                                    <div aria-hidden className="h-10 w-10 rounded-full bg-black/10 animate-pulse" />
                              </div>
                        </div>

                        {/* Stats row */}
                        <section className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                              {[...Array(4)].map((_, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                          <div aria-hidden className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-black/10 animate-pulse" />
                                          <div aria-hidden className="h-3 w-16 sm:w-20 rounded-full bg-black/10 animate-pulse" />
                                          <div aria-hidden className="h-3 w-10 sm:w-14 rounded-full bg-black/20 animate-pulse" />
                                    </div>
                              ))}
                        </section>

                        {/* Description */}
                        <section className="mt-8 space-y-2">
                              <div aria-hidden className="h-4 w-32 rounded-full bg-black/10 animate-pulse" />
                              <div aria-hidden className="h-3 w-full rounded-full bg-black/10 animate-pulse" />
                              <div aria-hidden className="h-3 w-[90%] rounded-full bg-black/10 animate-pulse" />
                              <div aria-hidden className="h-3 w-2/3 rounded-full bg-black/10 animate-pulse" />
                        </section>

                        {/* Details grid */}
                        <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                              {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-full flex items-center gap-2">
                                          <div aria-hidden className="h-4 w-4 rounded-full bg-black/10 animate-pulse" />
                                          <div aria-hidden className="h-3 w-24 sm:w-28 rounded-full bg-black/10 animate-pulse" />
                                          <div aria-hidden className="h-3 w-16 sm:w-24 rounded-full bg-black/20 animate-pulse" />
                                    </div>
                              ))}
                        </section>

                        {/* Tags */}
                        <section className="mt-8">
                              <div aria-hidden className="mb-3 h-4 w-16 rounded-full bg-black/10 animate-pulse" />
                              <div className="flex flex-wrap gap-2">
                                    {[...Array(10)].map((_, i) => (
                                          <span key={i} className="inline-block rounded-full bg-black/5 px-4 py-2">
                                                <span aria-hidden className="block h-3 w-16 rounded-full bg-black/10 animate-pulse" />
                                          </span>
                                    ))}
                              </div>
                        </section>

                        {/* Related images */}
                        <section className="mt-10 mb-20">
                              <div className="flex items-center justify-between">
                                    <div aria-hidden className="h-4 w-28 rounded-full bg-black/10 animate-pulse" />
                                    <div aria-hidden className="h-3 w-16 rounded-full bg-black/10 animate-pulse" />
                              </div>

                              {/* Masonry-like responsive grid */}
                              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                    {[...Array(12)].map((_, i) => (
                                          <div
                                                key={i}
                                                className="overflow-hidden rounded-xl bg-black/5 animate-pulse"
                                                style={{
                                                      // simulate varied heights like masonry
                                                      aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "1/1" : "4/3",
                                                }}
                                          />
                                    ))}
                              </div>
                        </section>
                  </main>

                  {/* Subtle brand-tinted footer stripe to echo theme color */}
                  <div className="pointer-events-none fixed inset-x-0 bottom-0 h-1 bg-[rgb(31,71,69)]/30" />
            </section>
      );
}
