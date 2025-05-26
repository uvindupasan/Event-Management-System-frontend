"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="space-y-24 bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className=""></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
            About EventMaster
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-purple-100">
            Revolutionizing event experiences through innovative technology and
            passionate community building
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/events"
              className="px-8 py-4 bg-white text-purple-700 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Explore Events
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower event organizers and attendees with cutting-edge
              technology that makes every event experience seamless, memorable,
              and impactful. We're bridging the gap between physical and digital
              event spaces.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              A world where anyone can create, discover, and participate in
              extraordinary events without boundaries. Where technology enhances
              human connection and every gathering leaves a lasting impression.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "15,000+", label: "Events Hosted", icon: "🎪" },
              { number: "750K+", label: "Happy Attendees", icon: "👥" },
              { number: "150+", label: "Cities Worldwide", icon: "🌍" },
              { number: "4.9/5", label: "User Rating", icon: "⭐" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <p className="text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </p>
                <p className="text-lg text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              The Team
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Event Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to transforming your event
              experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                img: "/team/new-team-alex.jpg", // <-- Change the image path here
                bio: "Event industry veteran with 15+ years experience in large-scale event production.",
                social: {
                  twitter: "#",
                  linkedin: "#",
                },
              },
              {
                name: "Maria Garcia",
                role: "Tech Lead",
                img: "/team/new-team-james.jpg", // <-- Change the image path here
                bio: "Full-stack developer focused on creating seamless event experiences.",
                social: {
                  twitter: "#",
                  linkedin: "#",
                },
              },
              {
                name: "James Wilson",
                role: "Community Manager",
                img: "/team/new-team-maria.jpg", // <-- Change the image path here
                bio: "Connects organizers with attendees to build vibrant event communities.",
                social: {
                  twitter: "#",
                  linkedin: "#",
                },
              },
            ].map((member) => (
              <div
                key={member.name}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col"
              >
                <div className="relative h-110 overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-purple-300 font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.social.twitter}
                      className="text-purple-600 hover:text-purple-800"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-purple-600 hover:text-purple-800"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/team"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full shadow-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-colors duration-300"
            >
              Meet Full Team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 -mr-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Guides Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that shape every decision we make
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We embrace change and constantly seek new ways to improve the event experience.",
                icon: "🚀",
              },
              {
                title: "Community",
                description:
                  "Building meaningful connections between people is at the heart of everything we do.",
                icon: "🤝",
              },
              {
                title: "Excellence",
                description:
                  "We strive for the highest standards in quality, service, and technology.",
                icon: "🏆",
              },
              {
                title: "Integrity",
                description:
                  "We operate with transparency, honesty, and respect in all that we do.",
                icon: "🛡️",
              },
              {
                title: "Accessibility",
                description:
                  "We believe everyone should have equal opportunity to participate in amazing events.",
                icon: "🌍",
              },
              {
                title: "Sustainability",
                description:
                  "We’re committed to eco-friendly practices that protect our planet.",
                icon: "🌱",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Elevate Your Events?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of organizers creating unforgettable experiences with
            our platform
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-white text-purple-700 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Start Free Trial
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
