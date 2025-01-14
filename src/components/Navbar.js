import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>
    <nav id="navbar" className="fixed w-full z-50 top-0 bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="el-esfkexja">
            <div className="flex items-center justify-between h-16" id="el-vgivlnq7">
                <div className="flex-shrink-0" id="el-6j89czvv">
                    <Link href="/" className="text-white font-bold text-xl" id="el-5lkw0tls">AI Tools</Link>
                </div>
                
                <div className="hidden md:block" id="el-qzgd583u">
                    <div className="ml-10 flex items-baseline space-x-4" id="el-k09l91sk">
                        <Link href="/hero" className="text-neutral-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" id="el-k7urh2sq">Home</Link>
                        <Link href="/features" className="text-neutral-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" id="el-ltjskxek">Features</Link>
                        <Link href="/toolsShowcase" className="text-neutral-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" id="el-qodnqv2f">Tools</Link>
                        <Link href="/pricing" className="text-neutral-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" id="el-cqhyp4i5">Pricing</Link>
                        <Link href="/testimonials" className="text-neutral-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" id="el-76fbbaa8">Testimonials</Link>
                        <Link href="/integration" className="text-neutral-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" id="el-mnxr1agc">Integration</Link>
                    </div>
                </div>
                
                <div className="hidden md:block" id="el-062s74z4">
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity animate__animated animate__pulse animate__infinite" id="el-xksadm17">
                        Get Started
                    </button>
                </div>
                
                <div className="md:hidden" id="el-kcnm1k89">
                    <button id="mobile-menu-button" className="text-neutral-300 hover:text-white">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-b8j05cn3">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" id="el-9qoh4ad8"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
        <div id="mobile-menu" className="hidden md:hidden bg-neutral-900 border-b border-neutral-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" id="el-t7you7qc">
                <Link href="/hero" className="text-neutral-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" id="el-mcdvepvf">Home</Link>
                <Link href="/features" className="text-neutral-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" id="el-wnwz0itf">Features</Link>
                <Link href="/toolsShowcase" className="text-neutral-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" id="el-07v8e5tu">Tools</Link>
                <Link href="/pricing" className="text-neutral-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" id="el-qa2jd2jz">Pricing</Link>
                <Link href="/testimonials" className="text-neutral-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" id="el-3vyw4ewj">Testimonials</Link>
                <Link href="/integration" className="text-neutral-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" id="el-vlye16ft">Integration</Link>
                <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity" id="el-zzasn9jr">
                    Get Started
                </button>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar