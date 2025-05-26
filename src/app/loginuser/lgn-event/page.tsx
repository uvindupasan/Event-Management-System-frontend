import Link from "next/link";
import Image from "next/image";

const pastEvents = [
  {
    id: 1,
    slug: "summer-music-festival",
    title: "Summer Music Festival",
    date: "July 15, 2024",
    image: "/images/summer-festival.jpg",
    description:
      "A vibrant summer festival with music, food, and entertainment.",
    category: "Music",
    location: "Central Park, New York",
  },
  {
    id: 2,
    slug: "tech-innovation-conference",
    title: "Tech Innovation Conference",
    date: "March 5, 2024",
    image: "/images/tech-conference.jpg",
    description: "Exploring the future of technology with industry leaders.",
    category: "Conference",
    location: "San Francisco Convention Center",
  },
  {
    id: 3,
    slug: "charity-gala-night",
    title: "Charity Gala Night",
    date: "December 10, 2023",
    image: "/images/gala-night.jpg",
    description: "An elegant evening to raise funds for community health.",
    category: "Charity",
    location: "The Ritz-Carlton, Chicago",
  },
];

export default function EventsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 animate-fade-in-up">
          Our Past Events
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Relive the memorable moments from our spectacular past events
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pastEvents.map((event) => (
          <Link key={event.id} href={`/loginuser/lgn-event/${event.slug}`} passHref>
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 h-full flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {event.category}
                </div>
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <svg
                    className="w-4 h-4 mr-1"
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
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg
                    className="w-4 h-4 mr-1"
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
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-purple-600 font-medium group-hover:text-purple-800 transition-colors">
                    View event details
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/lodinuser/events" passHref>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all">
            View All Events
            <svg
              className="ml-3 -mr-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}
