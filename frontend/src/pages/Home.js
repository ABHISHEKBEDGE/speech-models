import React from 'react';

export default function HeroSection() {
  return (
    <>
      <section id="heroSection" className="grid grid-cols-2 gap-8 p-16 items-center justify-between bg-indigo-600">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <p className="text-3xl font-semibold text-white">Hey all, welcome to </p>
            <h1 className="text-7xl font-bold text-white">
              <span className="text-primary">Fake Speech</span>{" "}
              <br />
              Detection
            </h1>
            <p className="text-xl text-white">
              Voice is a Data, Data is Everything
              <br /> Wanna Engage With FSD?
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src="/images/1.png" alt="Hero Section" className="object-cover w-full h-full" />
        </div>
      </section>

      <section className="p-16">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-brown-600 text-black p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="max-w-4xl ml-auto mb-16">
          <div className="bg-brown-600 text-black p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-brown-600 text-black p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="max-w-4xl ml-auto">
          <div className="bg-brown-600 text-black p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
