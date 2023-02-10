function Home(): JSX.Element {
  return (
    <div className="container py-36 px-10 mx-0 min-w-full flex flex-col items-center">
      <h1 className="text-5xl text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
        The Next.js Progressive Web App Template
      </h1>
      <br />
      <h2 className="text-center">A Complete Foundation for Building Robust PWA Apps</h2>
      <br />
      <div>
        <button
          type="button"
          className="text-white hover:bg-blue-700 font-bold py-2 px-4 mt-3 rounded items-center"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
