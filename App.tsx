import React, { useState } from 'react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root font-display text-[#111812] overflow-x-hidden w-full bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#f0f4f1]">
        <div className="layout-container flex justify-center w-full">
          <div className="flex max-w-[1280px] w-full items-center justify-between px-6 py-4 lg:px-10">
            <div className="flex items-center gap-3">
              <div className="text-primary">
                <span className="material-symbols-outlined !text-[32px]">forest</span>
              </div>
              <h2 className="text-forest-green text-xl font-bold tracking-tight">COMMUNITREE</h2>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex gap-6">
                <a className="text-[#111812] text-sm font-medium hover:text-primary transition-colors" href="#">Mission</a>
                <a className="text-[#111812] text-sm font-medium hover:text-primary transition-colors" href="#">Impact</a>
                <a className="text-[#111812] text-sm font-medium hover:text-primary transition-colors" href="#">Transparency</a>
                <a className="text-[#111812] text-sm font-medium hover:text-primary transition-colors" href="#">Contact</a>
              </nav>
              <button className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-all shadow-sm">
                Donate
              </button>
            </div>
            
            <div className="md:hidden">
              <button 
                className="p-2 text-[#111812]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
           <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-[#f0f4f1] p-4 flex flex-col gap-4 shadow-lg">
                <nav className="flex flex-col gap-4">
                <a className="text-[#111812] text-sm font-medium hover:text-primary transition-colors" href="#">Mission</a>
                <a className="text-[#111812] text-sm font-medium hover:text-primary transition-colors" href="#">Impact</a>
                <a className="text-[#111812] text-sm font-medium hover:text-primary transition-colors" href="#">Transparency</a>
                <a className="text-[#111812] text-sm font-medium hover:text-primary transition-colors" href="#">Contact</a>
              </nav>
              <button className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-all shadow-sm w-full">
                Donate
              </button>
           </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative w-full bg-forest-green">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat" 
            style={{
                backgroundImage: `linear-gradient(rgba(16, 34, 19, 0.7), rgba(16, 34, 19, 0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsrAVXRaqJtvqC87JWgCy5xm9AseyZp9oo4OChfwbJrt-I4AvBJpQ6R5Yf_a4JtxCDKyxGVZigER8-fVfB8bK8rUTd6CfcOqTdgajq5_bgha5DXBKXFUg1uRSCN2GWofdYrRmF5GqcSBod29NTDuXH_X-77d_kG21ee0DrAsbejF9NNf85VHSnwxPKhuZxAQMWVdQ_-ix_L0N5wnf0-84LCUu-hdwARQzuM-A5gOqUWJmgFIIZmV9_lNkevSHp5yBarnVTmZN8cGA")`
            }}
          >
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] px-6 py-20 text-center">
          <div className="max-w-[800px] flex flex-col items-center gap-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md border border-white/20">
              <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
              <span>Mission Barren to Green</span>
            </div>
            
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.02em] md:text-5xl lg:text-6xl drop-shadow-lg">
              Thank You for Planting a <span className="text-primary">Greener Future!</span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-[640px]">
              Your contribution is now a part of the "Mission Barren to Green". Together, we are restoring India's lost green cover, one native sapling at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <button className="flex items-center justify-center gap-3 bg-earthy-brown text-white h-14 px-8 rounded-lg text-base font-bold hover:bg-[#724b2f] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <span className="material-symbols-outlined">workspace_premium</span>
                Download Your Certificate of Impact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Organization Profile Section */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-primary rounded-full"></div>
                <span className="text-primary font-bold uppercase tracking-wider text-sm">Organization Profile</span>
              </div>
              <h2 className="text-[#111812] text-3xl md:text-4xl font-black leading-tight">
                Restoring the balance of nature through community-driven initiatives.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are committed to creating sustainable urban forests and increasing green cover across the nation. Transparency and scientific methodology are at the core of our operations.
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="group flex gap-5 rounded-xl border border-[#dbe6dd] bg-background-light p-6 hover:border-primary/50 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm text-primary">
                  <span className="material-symbols-outlined">policy</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111812] text-lg font-bold">Registered Trust</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Officially recognized entity dedicated to environmental preservation. (No. 113 of 2018, Adyar)</p>
                </div>
              </div>
              
              <div className="group flex gap-5 rounded-xl border border-[#dbe6dd] bg-background-light p-6 hover:border-primary/50 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm text-primary">
                  <span className="material-symbols-outlined">warning</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111812] text-lg font-bold">The Problem</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Addressing the critical deficit: India's green cover is currently &lt;21.71% compared to the 33% target, with Chennai falling below 17%.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Grid */}
      <section className="w-full bg-background-light py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="h-14 w-14 bg-green-50 rounded-full flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined !text-[32px]">forest</span>
              </div>
              <div>
                <p className="text-3xl font-black text-[#111812] mb-1">1.6 Million</p>
                <p className="text-gray-500 font-medium">Trees Planted</p>
              </div>
            </div>
            
            {/* Stat Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="h-14 w-14 bg-green-50 rounded-full flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined !text-[32px]">location_on</span>
              </div>
              <div>
                <p className="text-3xl font-black text-[#111812] mb-1">150+</p>
                <p className="text-gray-500 font-medium">Locations Restored</p>
              </div>
            </div>
            
            {/* Stat Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="h-14 w-14 bg-green-50 rounded-full flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined !text-[32px]">eco</span>
              </div>
              <div>
                <p className="text-3xl font-black text-[#111812] mb-1">#UNGoal13</p>
                <p className="text-gray-500 font-medium">Climate Action</p>
              </div>
            </div>
            
            {/* Stat Card 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="h-14 w-14 bg-green-50 rounded-full flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined !text-[32px]">landscape</span>
              </div>
              <div>
                <p className="text-3xl font-black text-[#111812] mb-1">#UNGoal15</p>
                <p className="text-gray-500 font-medium">Life On Land</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="rounded-3xl bg-forest-green overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              {/* Image Half */}
              <div className="lg:w-1/2 relative min-h-[400px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbYjFx2TgKnrzCLiJICEc1PJ-PQsJoP2A-eS4SSIe7fvvAxNQdKojdiOaU5qErNtdv9lfCGGSG4J7uFuBJ7eXZj04gp-ax9jOvwByhjuO0zclCR_LlGpMRKWM9sImS0HGV6ePl_Ldq-15i7jY2Pto3DR6cFn2rcbKxspkxmvP3T6gj5UUEPusSdW7_1N9tzk7IksfNgMMLAdpfTu3t1jPp9sXfrx2Nb-UGPNah8JFL9jSPVVObvMp7LnNfY2hQaJa3ORCvzHURaLE")`
                  }}
                >
                </div>
                {/* Overlay UI Mockup */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg border border-white/20 max-w-sm">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                      <span className="material-symbols-outlined">qr_code_scanner</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Live Tracking</p>
                      <h4 className="text-[#111812] font-bold text-sm mb-1">Sapling #48291</h4>
                      <p className="text-xs text-gray-600">Lat: 12.9716° N, Long: 77.5946° E</p>
                      <div className="mt-2 flex items-center gap-1 text-xs font-medium text-green-600">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Healthy &amp; Growing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Half */}
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider text-sm uppercase mb-4">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                  <span>Total Transparency</span>
                </div>
                
                <h2 className="text-white text-3xl md:text-4xl font-black leading-tight mb-6">
                  Real-Time Monitoring &amp; Tech-Driven Impact
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  We believe seeing is believing. Our advanced geo-tagging system allows for real-time monitoring of carbon offsets and tree height. Every sapling is tracked, ensuring your contribution creates a verified, lasting legacy.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="text-white font-bold text-lg">Geo-Tagged Saplings</h4>
                      <p className="text-gray-400 text-sm mt-1">Precise location data for every tree.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="text-white font-bold text-lg">Growth Tracking</h4>
                      <p className="text-gray-400 text-sm mt-1">Monitor height and health remotely.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#0a160c] text-white pt-16 pb-8 border-t border-[#1a2f1e] mt-auto">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Column 1: Brand */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="text-primary">
                  <span className="material-symbols-outlined !text-[32px]">forest</span>
                </div>
                <h2 className="text-white text-xl font-bold tracking-tight">COMMUNITREE</h2>
              </div>
              <p className="text-gray-400 max-w-xs leading-relaxed">
                Restoring India's green cover through community action, transparency, and sustainable forestry practices.
              </p>
            </div>
            
            {/* Column 2: Contact */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-bold">Contact Us</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">person</span>
                  <div>
                    <p className="text-sm font-medium text-gray-300">Hafiz Khan</p>
                    <p className="text-xs text-gray-500">Founder</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="tel:+919876543210">+91 98765 43210</a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="mailto:contact@communitree.org">contact@communitree.org</a>
                </div>
              </div>
            </div>
            
            {/* Column 3: Social & Newsletter */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-bold">Connect With Us</h3>
              <div className="flex gap-4">
                <a className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-300" href="#">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                </a>
                <a className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-300" href="#">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                </a>
                <a className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-300" href="#">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.584.016 4.849.075 1.17.058 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.265.07 1.646.07 4.85s-.015 3.585-.074 4.849c-.058 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.419.42-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.265.057-1.646.07-4.85.07s-3.585-.015-4.849-.074c-1.17-.058-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.265-.07-1.646-.07-4.85s.015-3.585.074-4.849c.058-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.419-.42.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.265-.057 1.646-.07 4.849-.07M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                </a>
              </div>
            </div>
            
          </div>
          
          <div className="pt-8 border-t border-[#1a2f1e] flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <p>© 2024 Communitree. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;