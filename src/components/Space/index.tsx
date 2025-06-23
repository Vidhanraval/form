'use client'
import React, { useState } from 'react';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const navItems = ['home', 'destination', 'crew', 'technology'];

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <section className="min-h-screen bg-cover bg-center bg-no-repeat text-white px-8 py-20 md:px-24" style={{ backgroundImage: "url('/background-home-desktop.jpg')" }}>
            <h2 className="uppercase tracking-widest text-sm mb-4">So, you want to travel to</h2>
            <h1 className="text-7xl md:text-9xl font-serif mb-6">SPACE</h1>
            <p className="max-w-md text-lg text-gray-300">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
            <div className="mt-16">
              <button className="rounded-full bg-white text-black w-40 h-40 text-xl font-serif hover:scale-105 transition">EXPLORE</button>
            </div>
          </section>
        );
      case 'destination':
        return (
          <section className="min-h-screen bg-cover bg-center bg-no-repeat text-white px-8 py-20 md:px-24" style={{ backgroundImage: "url('/background-destination-desktop.jpg')" }}>
            <h2 className="uppercase tracking-widest text-sm mb-10">01 Pick Your Destination</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <img src="/image-mars.webp" alt="Mars" className="w-60 h-60 object-contain" />
              <div>
                <div className="flex gap-6 mb-4 text-gray-400 uppercase text-sm">
                  <span className="border-b-2 border-white text-white">Mars</span>
                  <span>Moon</span>
                  <span>Europa</span>
                  <span>Titan</span>
                </div>
                <h1 className="text-6xl font-serif mb-4">Mars</h1>
                <p className="max-w-md text-gray-300 mb-6">
                  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
                </p>
                <div className="flex gap-16 text-sm uppercase border-t border-gray-500 pt-4">
                  <div>
                    <p className="text-gray-400">Avg. Distance</p>
                    <p className="text-lg text-white">225 mil. km</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Est. travel time</p>
                    <p className="text-lg text-white">9 months</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case 'crew':
        return (
          <section className="min-h-screen bg-cover bg-center bg-no-repeat text-white px-8 py-20 md:px-24" style={{ backgroundImage: "url('/background-crew-desktop.jpg')" }}>
            <h2 className="uppercase tracking-widest text-sm mb-10">02 Meet Your Crew</h2>
            <div className="flex flex-col-reverse md:flex-row items-center gap-10">
              <div>
                <p className="uppercase text-gray-400 text-sm mb-2">Flight Engineer</p>
                <h1 className="text-4xl font-serif mb-4">Anousheh Ansari</h1>
                <p className="max-w-md text-gray-300">
                  Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.
                </p>
              </div>
              <img src="/image-anousheh-ansari.png" alt="Anousheh" className="w-72 h-auto object-contain" />
            </div>
          </section>
        );
      case 'technology':
        return (
          <section className="min-h-screen bg-cover bg-center bg-no-repeat text-white px-8 py-20 md:px-24" style={{ backgroundImage: "url('/background-technology-desktop.jpg')" }}>
            <h2 className="uppercase tracking-widest text-sm mb-10">03 Space Launch 101</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex flex-col items-center gap-4">
                <button className="rounded-full w-12 h-12 border text-lg">1</button>
                <button className="rounded-full w-12 h-12 border text-gray-400 text-lg">2</button>
                <button className="rounded-full w-12 h-12 border text-gray-400 text-lg">3</button>
              </div>
              <div>
                <p className="uppercase text-gray-400 text-sm mb-2">The Terminology…</p>
                <h1 className="text-4xl font-serif mb-4">Launch Vehicle</h1>
                <p className="max-w-md text-gray-300 mb-6">
                  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth’s surface to space. Our WEB-X carrier rocket is the most powerful in operation.
                </p>
              </div>
              <img src="/image-launch-vehicle-portrait.jpg" alt="Rocket" className="w-72 h-auto object-contain" />
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <header className="fixed top-0 w-full flex justify-center z-50 bg-black/40 backdrop-blur-md">
        <nav className="flex gap-8 px-10 py-4 uppercase text-sm text-white">
          {navItems.map((item, i) => (
            <button
              key={item}
              className={`tracking-widest ${
                activePage === item ? 'border-b-2' : ''
              }`}
              onClick={() => setActivePage(item)}
            >
              {String(i).padStart(2, '0')} {item}
            </button>
          ))}
        </nav>
      </header>

      <main className="pt-24">{renderContent()}</main>
    </div>
  );
};

export default App;
