'use client';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    alert('Form submitted! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto animate-fade-in-up">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden animate-float">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
            <h2 className="text-3xl font-bold animate-fade-in-right">Plan Your Dream Event</h2>
            <p className="mt-2 opacity-90 animate-fade-in-right animate-delay-100">
              Fill out the form below and we'll help bring your vision to life
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (123) 456-7890' },
                { id: 'eventType', label: 'Event Type', type: 'select', options: [
                  { value: '', label: 'Select Event Type' },
                  { value: 'Birthday', label: 'Birthday' },
                  { value: 'Anniversary', label: 'Anniversary' },
                  { value: 'Get-Together', label: 'Get-Together' },
                  { value: 'Corporate', label: 'Corporate Event' },
                  { value: 'Wedding', label: 'Wedding' }
                ]},
                { id: 'date', label: 'Event Date', type: 'date' },
                { id: 'guests', label: 'Number of Guests', type: 'number', placeholder: '50' }
              ].map((field, index) => (
                <div 
                  key={field.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 50 + 200}ms` }}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label} <span className="text-red-500">*</span>
                  </label>
                  {field.type === 'select' ? (
                    <select
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none hover:shadow-md"
                    >
                      {field.options?.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all hover:shadow-md"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Event Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Tell us about your expectations, theme preferences, special requirements..."
                value={formData.description}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all hover:shadow-md"
              />
            </div>

            <div className="pt-4 animate-fade-in-up" style={{ animationDelay: '550ms' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ${
                  isSubmitting 
                    ? 'opacity-75 cursor-not-allowed' 
                    : 'hover:from-purple-700 hover:to-blue-700 hover:shadow-xl hover:scale-[1.01]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Submit Event Request"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Add these to your global CSS or Tailwind config */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.5s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-delay-100 {
          animation-delay: 100ms;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;