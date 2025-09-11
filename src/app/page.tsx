export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 p-4 text-white" id="navbar">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-lg font-bold">
            My App
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300" id="home-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300" id="about-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300" id="services-link">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300" id="contact-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header
        className="bg-blue-600 text-white py-16 text-center"
        id="app-header"
      >
        <h1 className="text-4xl font-bold">Welcome to Our Awesome App!</h1>
        <p className="mt-4 text-lg">Your journey to success starts here.</p>
      </header>

      <main className="flex-grow container mx-auto p-8">
        <section className="mb-8" id="about-section">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4" id="our-services">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">Service One</h3>
              <p className="text-gray-600">Description for service one.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">Service Two</h3>
              <p className="text-gray-600">Description for service two.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">Service Three</h3>
              <p className="text-gray-600">Description for service three.</p>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="bg-gray-800 p-4 text-white text-center"
        id="app-footer"
      >
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  );
}
