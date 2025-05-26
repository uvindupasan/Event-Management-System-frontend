"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-24 bg-gray-50">
      {/* Header
      <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
            EM
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            EventMaster
          </span>
        </Link>
        <div className="space-x-4">
          <Link href="/login">
            <button className="text-purple-600 border border-purple-600 px-6 py-2 rounded-full hover:bg-purple-50 transition-all duration-300 font-medium shadow-sm hover:shadow-md">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium shadow-sm hover:shadow-md">
              Sign Up
            </button>
          </Link>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="relative text-center py-32 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className=""></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Create Unforgettable Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            The all-in-one platform to plan, promote, and host spectacular
            events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events">
              <button className="bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
                Browse Events
              </button>
            </Link>
            <Link href="/create-event">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
                Create Event
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 -mt-16 relative z-20">
        {[
          ["10,000+", "Events Hosted"],
          ["500K+", "Happy Attendees"],
          ["100+", "Cities Worldwide"],
          ["24/7", "Customer Support"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="bg-white rounded-xl p-6 text-center shadow-lg"
          >
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {value}
            </div>
            <div className="text-gray-600">{label}</div>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 text-center py-20">
        <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          Simple Steps
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How EventMaster Works
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          From planning to execution, we've got you covered
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            [
              "Plan",
              "Create your event page in minutes with our intuitive builder",
              "1",
            ],
            ["Promote", "Use our marketing tools to reach your audience", "2"],
            ["Host", "Manage check-ins, payments, and more on event day", "3"],
          ].map(([title, desc, num]) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                <span className="text-3xl font-bold text-purple-600">
                  {num}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {title}
              </h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Events */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Upcoming Events
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Events
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Discover exciting events happening near you
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tech Innovators Summit",
                date: "June 15, 2023",
                location: "San Francisco, CA",
                category: "Conference",
                image: "/new-tech-summit.jpg",
              },
              {
                title: "Summer Music Festival",
                date: "July 22, 2023",
                location: "New York, NY",
                category: "Music",
                image: "/new-music-festival.jpg",
              },
              {
                title: "Food & Wine Expo",
                date: "August 5, 2023",
                location: "Chicago, IL",
                category: "Food",
                image: "/new-food-expo.jpg",
              },
            ].map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-500 mb-3">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {event.location}
                  </div>
                  <Link
                    href={`/events/${event.title.toLowerCase().replace(/ /g, "-")}`}
                  >
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
                      Get Tickets
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/loginuser/lgn-event">
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                View All Events
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Event Organizers
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Hear what our community has to say
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Music Festival Organizer",
                quote:
                  "EventMaster helped us sell out our festival in record time. The ticketing system is flawless!",
                avatar: "/team/new-team-alex.jpg",
              },
              {
                name: "Michael Chen",
                role: "Tech Conference Host",
                quote:
                  "From registration to analytics, this platform has everything we need to run successful events.",
                avatar: "/team/new-team-james.jpg",
              },
              {
                name: "Emma Rodriguez",
                role: "Community Manager",
                quote:
                  "Our attendees love the seamless experience. It's made event management so much easier.",
                avatar: "/team/new-team-maria.jpg",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-left"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-purple-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-900 to-pink-800 py-20 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')]"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Create Your Next Event?
          </h2>
          <p className="mb-8 text-purple-100 text-xl max-w-2xl mx-auto">
            Join thousands of organizers who trust EventMaster for their events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create-event">
              <button className="bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
                Start Creating
              </button>
            </Link>
            <Link href="/demo">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
                Request Demo
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
