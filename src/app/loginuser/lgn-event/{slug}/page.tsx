interface EventDetail {
  title: string;
  date: string;
  image: string;
  description: string;
  fullDetails: string;
  location: string;
  price: string;
  category: string;
  organizer: string;
  schedule?: {
    time: string;
    activity: string;
  }[];
}

const eventDetails: Record<string, EventDetail> = {
  "summer-music-festival": {
    title: "Summer Music Festival",
    date: "July 15, 2024",
    image: "/new-music-festival.jpg",
    description: "A vibrant summer festival with music, food, and entertainment.",
    fullDetails: "The Summer Music Festival brings together top DJs, live bands, and food trucks for a full-day celebration. Families and friends will enjoy games, fireworks, and a sunset concert by the beach. Don't miss our special guest performance by Grammy-winning artist DJ Coastal at 8PM!",
    location: "Central Park, New York",
    price: "$45 - $120",
    category: "Music",
    organizer: "Urban Events Co.",
    schedule: [
      { time: "12:00 PM", activity: "Gates Open" },
      { time: "1:00 PM", activity: "Local Band Performances" },
      { time: "4:00 PM", activity: "Food Truck Fair" },
      { time: "8:00 PM", activity: "DJ Coastal Headline Show" },
      { time: "10:00 PM", activity: "Fireworks Finale" }
    ]
  },
  "tech-innovation-conference": {
    title: "Tech Innovation Conference",
    date: "March 5, 2024",
    image: "/new-tech-summit.jpg",
    description: "Exploring the future of technology with industry leaders.",
    fullDetails: "This year's Tech Innovation Conference features keynote talks from tech CEOs, live product demos, and workshops on AI, blockchain, and sustainable innovation. Network with over 1,000 professionals and discover cutting-edge technologies shaping our future.",
    location: "San Francisco Convention Center",
    price: "$299 - $899",
    category: "Conference",
    organizer: "Tech Futures Foundation",
    schedule: [
      { time: "9:00 AM", activity: "Registration & Breakfast" },
      { time: "10:00 AM", activity: "Opening Keynote" },
      { time: "12:00 PM", activity: "Lunch & Networking" },
      { time: "1:30 PM", activity: "Breakout Sessions" },
      { time: "5:00 PM", activity: "Closing Remarks" }
    ]
  },
  "charity-gala-night": {
    title: "Charity Gala Night",
    date: "December 10, 2023",
    image: "/new-food-expo.jpg",
    description: "An elegant evening to raise funds for community health.",
    fullDetails: "Join us at the Grand Ballroom for an unforgettable gala night filled with live music, silent auctions, and inspiring stories from beneficiaries. All proceeds will support rural healthcare initiatives, with a goal to raise $300,000 for medical equipment and facilities.",
    location: "The Grand Ballroom, Chicago",
    price: "$150 per person",
    category: "Charity",
    organizer: "Health for All Foundation",
    schedule: [
      { time: "9:00 AM", activity: "Registration & Breakfast" },
      { time: "10:00 AM", activity: "Opening Keynote" },
      { time: "12:00 PM", activity: "Lunch & Networking" },
      { time: "1:30 PM", activity: "Breakout Sessions" },
      { time: "5:00 PM", activity: "Closing Remarks" }
    ]
  },
};

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = eventDetails[params.slug];

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center py-20 max-w-md mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Event not found</p>
          <a
            href="/events" 
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Browse All Events
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end pb-10">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <div className="flex justify-between items-end">
              <div>
                <span className="inline-block bg-purple-600 text-white text-sm px-3 py-1 rounded-full mb-3">
                  {event.category}
                </span>
                <h1 className="text-4xl font-bold text-white mb-2">{event.title}</h1>
                <p className="text-lg text-purple-100">{event.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Event Details */}
          <div className="md:col-span-2">
            <div className="prose max-w-none text-gray-700 mb-8">
              <p className="text-lg">{event.fullDetails}</p>
            </div>

            {/* Schedule */}
            {event.schedule && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Schedule</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-4">
                    {event.schedule.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{item.time}</p>
                          <p className="text-gray-600">{item.activity}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Info Card */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Event Details</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Date & Time</p>
                    <p className="text-gray-600">{event.date}</p>
                    {event.schedule && (
                      <p className="text-gray-600 text-sm">{event.schedule[0].time} - {event.schedule[event.schedule.length - 1].time}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Price</p>
                    <p className="text-gray-600">{event.price}</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors">
                Get Tickets
              </button>
            </div>

            {/* Organizer */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Organizer</h2>
              <div className="flex items-center">
                <div className="bg-purple-100 text-purple-800 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
                  {event.organizer.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{event.organizer}</p>
                  <p className="text-gray-600 text-sm">Verified Organizer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}