function Header() {
    return (
    <div>
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-32" src="/cedarbrush.png" />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#about-us" className="mr-5 hover:text-gray-900">About Us</a>
            <a href="#our-services" className="mr-5 hover:text-gray-900">Our Services</a>
            <a href="#contact-us" className="mr-5 hover:text-gray-900">Contact Us</a>
          </nav>
        </div>
      </header>
      <div className="bg-hero bg-cover bg-center" id="about-us">
          <div className="container mx-auto flex flex-col items-center py-24 sm:py-24">
              <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-7 md:leading-10 animate-in fade-in zoom-in duration-1000">
                      Cedar Brush Site Services & Janitorial
                  </h1>
                  <p className="mt-5 sm:mt-10 lg:w-10/12 text-white font-normal text-center text-sm sm:text-lg animate-in fade-in zoom-in duration-1000">Cedar Brush Site Services & Janitorial is an <span className="text-lime-500">Indigenous-owned and operated</span> business from Chipewyan Prairie Dene First Nation which provides site services and janitorial services to Indigenous Organizations, Industrial and Commercial Clients throughout Metro Vancouver Region and beyond.</p>
              </div>
              <div className="flex justify-center items-center">
                  <a href="https://forms.gle/wYz2uzfQCKXbTZKw5" target="_blank" ><button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 bg-lime-500 transition duration-150 ease-in-out hover:bg-lime-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-lime-700 py-2 sm:py-4 text-sm">Service Request</button></a>
                  <a href="https://youtu.be/HkvXKOBdgyY" target="_blank"><button className="mx-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 bg-transparent transition duration-150 ease-in-out hover:bg-lime-600 lg:text-xl lg:font-bold rounded text-white px-4 sm:px-10 border border-lime-700 py-2 sm:py-4 text-sm" type="button" data-modal-toggle="default-modal"> Watch our Video</button></a>
              </div>
          </div>
      </div>
    </div>
    )
}
export default Header
