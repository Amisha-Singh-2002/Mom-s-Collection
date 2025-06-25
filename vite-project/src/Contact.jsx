import React from 'react'
import Footer from './Footer'
const ContactSection = () => {
  return (
    <div className="w-[100vw]">
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          WE'D LOVE TO HEAR FROM YOU!
        </h1>
        <p className="text-gray-600 mb-8">
          Have a question about the services we provide? Send us the details on the type of
          project you're looking to hire for, and we'll be happy to get back to you with a free
          quote and information.
        </p>
        <a
          href="https://wa.me/8617751011" // Replace with your WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="mr-2"
          >
            <path d="M20.52 3.48A11.76 11.76 0 0012.04.5C6.17.5 1.25 5.42 1.25 11.29c0 1.91.49 3.78 1.42 5.45L.5 23.5l7.07-2.09a11.81 11.81 0 005.47 1.39c5.87 0 10.79-4.91 10.79-10.78a11.76 11.76 0 00-3.31-8.54zM12.04 21.3a9.85 9.85 0 01-5.03-1.36l-.36-.21-4.21 1.24 1.26-4.1-.23-.38A9.76 9.76 0 012.21 11.3c0-5.42 4.41-9.84 9.83-9.84 2.63 0 5.1 1.03 6.97 2.9a9.8 9.8 0 012.86 6.95c.01 5.44-4.4 9.95-9.83 9.95zm5.43-7.39c-.3-.15-1.78-.88-2.06-.97-.28-.1-.49-.15-.7.15-.2.3-.8.97-.98 1.17-.18.2-.36.23-.67.08a7.93 7.93 0 01-2.34-1.43 8.73 8.73 0 01-1.63-2.01c-.17-.3-.02-.47.13-.62.14-.14.3-.35.46-.52.15-.17.2-.29.3-.48.1-.2.05-.37-.02-.52-.07-.15-.7-1.68-.96-2.3-.25-.61-.5-.53-.7-.54l-.6-.01c-.2 0-.52.08-.8.37s-1.04 1.02-1.04 2.5 1.07 2.9 1.22 3.1c.15.2 2.11 3.25 5.1 4.56.71.3 1.27.48 1.7.61.71.23 1.36.2 1.87.12.57-.08 1.78-.73 2.03-1.44.25-.7.25-1.3.17-1.44-.07-.14-.26-.2-.55-.35z" />
          </svg>
          Message us on WhatsApp
        </a>
      </div>
     
    </section>
    <Footer/>
    </div>
  );
};

export default ContactSection;
