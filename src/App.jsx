import "./App.css";

function App() {
  return (
    <>
      <div className="bg-black text-white font-sans">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-5">
          <h1 className="text-lg font-bold">JSK-VideoEditing</h1>
          <ul className="flex space-x-6">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </nav>

        {/* Hero Section */}
        <header className="text-center py-20">
          <h2 className="text-lg">KARAN PADHIYAR</h2>
          <h1 className="text-4xl font-bold">PROFESSIONAL VIDEO EDITOR</h1>
          <p className="mt-2">Making Your Videos Look More Cool.</p>
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded">
            LET'S TALK
          </button>
        </header>

        {/* About Section */}
        <section className="text-center p-10">
          <h2 className="text-3xl font-bold">ABOUT ME</h2>
          <p className="mt-4">
            Welcome to the cinematic realm of Karan, where creativity meets
            technology to craft visually stunning narratives.
          </p>
        </section>

        {/* Best Edits */}
        <section className="p-10">
          <h2 className="text-3xl font-bold">MY BEST EDITS</h2>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-800 p-4 text-center">Cash Cow</div>
            <div className="bg-gray-800 p-4 text-center">Reel</div>
            <div className="bg-gray-800 p-4 text-center">Vlog</div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="p-10">
          <h2 className="text-3xl font-bold">TESTIMONIALS</h2>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-purple-600 p-4 text-center">
              Marco - Co Founder
            </div>
            <div className="bg-purple-600 p-4 text-center">
              Salaar - Manager
            </div>
            <div className="bg-purple-600 p-4 text-center">Rocky - CEO</div>
          </div>
        </section>

        {/* Contact Section */}
        <footer className="p-10 text-center">
          <h2 className="text-3xl font-bold">I AM READY TO CONSULT YOU</h2>
          <form className="mt-4">
            <input className="p-2 m-2 bg-gray-700" placeholder="Your Name" />
            <input className="p-2 m-2 bg-gray-700" placeholder="Interest" />
            <input className="p-2 m-2 bg-gray-700" placeholder="Message" />
            <button className="p-2 bg-purple-600 text-white">SEND</button>
          </form>
        </footer>
      </div>
    </>
  );
}

export default App;
