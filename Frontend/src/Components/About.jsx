import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Navbar />

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        {/* Main Content Container */}
        <div className="w-full order-2 md:order-1 mt-28 md:mt-32">
          <div className="space-y-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              About <span className="text-pink-500">Us</span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300">
              Building a community of learners, one book at a time.
            </p>

            <div className="text-justify md:text-left leading-relaxed space-y-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                et totam. Tempora amet atque expedita, quae corrupti totam sed
                pariatur corporis at veniam est voluptas animi! Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>

              <p>
                We are dedicated to providing the best resources for developers
                and book lovers alike. Whether you are looking for free
                educational material or the latest bestsellers, we have
                something for everyone. Nostrum, reiciendis facere? Facere,
                minima nemo aspernatur iusto aut repellendus officiis molestiae
                praesentium.
              </p>
            </div>

            {/* Stats / Values Section */}
            <div className="flex flex-col md:flex-row justify-center gap-10 py-10">
              <div className="stat place-items-center">
                <div className="stat-title">Books Available</div>
                <div className="stat-value text-pink-500">31K</div>
                <div className="stat-desc">From 100+ Categories</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">Active Users</div>
                <div className="stat-value text-secondary">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>

            {/* Back Button */}
            <Link to="/">
              <button className="btn btn-secondary mt-6">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
