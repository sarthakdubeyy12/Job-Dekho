import React, { useState } from "react";
import { Link } from "react-router-dom";
import companies from "../../data/Companies.json";
import faqData from "../../data/faq.json";
import { ChevronDown, ChevronUp } from "lucide-react";

// ✅ Accordion Components
const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b border-gray-700 transition-all duration-300">
    <button
      className="w-full flex justify-between items-center py-5 text-left text-white font-semibold text-xl hover:text-blue-300 focus:outline-none transition-colors duration-300"
      onClick={onClick}
    >
      {title}
      <span className="ml-4">
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </span>
    </button>
    <div
      className={`text-gray-300 text-base leading-relaxed pl-2 pr-2 transition-max-height duration-300 ease-in-out ${
        isOpen ? "max-h-screen pb-6" : "max-h-0 overflow-hidden"
      }`}
    >
      {content}
    </div>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full max-w-6xl mt-28 mx-auto px-6 sm:px-10">
      <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-white-400 to-blue-500 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 sm:p-10 space-y-6">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.question}
            content={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
};

// ✅ Home Page
const Home = () => {
  return (
    <main className="min-h-screen px-16 py-40 pb-44 flex flex-col items-center justify-start relative">


      <section className="text-center mb-12">
        <h1 className="text-5xl sm:text-8xl font-extrabold leading-tight">
          Find Your Dream Job
          <br />
          <span className="text-white">and get Hired</span>
        </h1>

        <p className="mt-14 text-lg sm:text-2xl font-bold text-white tracking-wide drop-shadow-lg italic font-[cursive]">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>

      <div className="flex flex-wrap gap-6 mb-30">
        <Link to="/jobs">
          <button className="bg-blue-500 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-blue-600 shadow-md transition duration-300">
            Explore Openings
          </button>
        </Link>
        <Link to="/post-job">
          <button className="bg-red-700 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-red-800 shadow-md transition duration-300">
            Post a Job
          </button>
        </Link>
      </div>

    {/* 🧾 About Us Section */}
<section className="w-full max-w-8xl mt-80 mb-48 px-4 sm:px-10 text-white">
  <h2 className="text-7xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent tracking-wide italic">
    About Job Dekho
  </h2>
  <p className="text-xl sm:text-2xl leading-relaxed text-gray-200 font-semibold italic tracking-wide">
    Welcome to <strong className="text-white font-bold">Job Dekho</strong>, a forward-thinking job portal that bridges the gap
    between opportunity and talent. Our platform is designed to empower companies and job seekers
    alike through a seamless and transparent hiring ecosystem.
  </p>
  <p className="text-xl sm:text-2xl leading-relaxed text-gray-200 font-semibold italic tracking-wide mt-6">
    At <strong className="text-white font-bold">Job Dekho</strong>, we collaborate directly with companies who share their job data with us.
    These listings are published on our platform in real-time, ensuring that job seekers have
    access to the most current opportunities across a wide range of industries.
  </p>
  <p className="text-xl sm:text-2xl leading-relaxed text-gray-200 font-semibold italic tracking-wide mt-6">
    Moreover, we offer companies complete autonomy to post job openings directly on our portal —
    no intermediaries, no delays, and no need to contact support. With our intuitive self-service
    tools, recruiters can quickly list positions, manage applications, and find the right candidates
    with ease. Whether you're an organization looking to hire or a candidate searching for the next big
    opportunity, <strong className="text-white font-bold">Job Dekho</strong> is your trusted partner in navigating the journey toward a better future.
  </p>
  
</section>

<section className="mt-10 px-4 sm:px-10 text-center max-w-5xl mx-auto">
  <p className="text-xl sm:text-2xl text-gray-300 italic font-[cursive]">
    This application is made with ❤️ by <span className="text-white font-bold">Sarthak Dubey</span>.
  </p>
  <p className="mt-4 text-lg sm:text-xl text-gray-400 italic font-[cursive]">
    My vision behind building <strong>Job Dekho</strong> was to create a transparent, real-time job portal that empowers both Companies and Users.
    I believe in tech as a bridge to opportunity — fast, direct, and human-centered.
  </p>
</section>




      {/* 🌆 Poster Section */}
      <section className="w-full max-w-7xl mx-auto px-4">
        <img
          src="/poster3.jpg"
          alt="Promotional Poster"
          className="w-full rounded-xl shadow-lg object-cover"
        />
      </section>

      

      {/* 📌 Fancy Accordion Section */}
      <Accordion />

      {/* 🔄 Company Logos Section */}
      <div className="fixed bottom-4 left-0 w-full z-50 px-10">
        <div className="overflow-hidden">
          <div className="flex gap-32 items-center animate-marquee whitespace-nowrap py-3">
            {[...companies, ...companies].map(({ id, name, path }, index) => (
              <img
                key={index}
                src={path}
                alt={name}
                className="h-16 object-contain mx-6"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
