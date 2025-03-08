// src/routes/index.tsx
import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="min-h-screen bg-gray-50">
      <header class="bg-white border-b border-gray-200">
        <div class="container mx-auto px-4 flex items-center h-14">
          {/* Logo and site name with Vue-like spacing */}
          <div class="flex items-center mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zM19 2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zM5 2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2z" />
            </svg>
            <span class="ml-2 text-lg font-medium">PawParadise</span>
          </div>

          {/* Search bar with Vue-like styling */}
          <div class="relative mr-4 hidden md:block">
            <input type="text" placeholder="Search" class="w-60 px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
            <div class="absolute right-3 top-2.5 text-xs text-gray-400 px-1 py-0.5 bg-gray-100 rounded">Ctrl K</div>
          </div>

          {/* Main navigation links with Vue-like spacing and styling */}
          <div class="flex items-center space-x-5 ml-auto">
            <a href="#" class="text-gray-600 hover:text-gray-900 text-sm font-medium">Docs</a>
            <a href="#" class="text-gray-600 hover:text-gray-900 text-sm font-medium">API</a>
            <a href="#" class="text-gray-600 hover:text-gray-900 text-sm font-medium">Products</a>
            <a href="#" class="text-gray-600 hover:text-gray-900 text-sm font-medium">Services</a>
            <a href="#" class="text-gray-600 hover:text-gray-900 text-sm font-medium">About</a>

            {/* Sponsor button with Vue-like styling */}
            <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">Shop Now</a>

            {/* More menu icon */}
            <button class="p-1 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main class="container mx-auto px-4 py-16 text-center">
        <div class="max-w-6xl mx-auto">
          {/* Hero heading */}
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 tracking-tight">
            <span class="text-gray-800">The </span>
            <span class="bg-gradient-to-r from-blue-900 via-blue-500 to-sky-400 bg-clip-text text-transparent">Progressive</span>
          </h1>
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-gray-800 tracking-tight">Pet Care Solution</h1>

          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            An approachable, elegant, and comprehensive platform for all your pet care needs.
          </p>

          {/* Vue-like button layout */}
          <div class="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              Why PawParadise
            </a>

            <a href="#" class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg flex items-center transition duration-300">
              Get Started →
            </a>

            <a href="#" class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition duration-300">
              Our Products
            </a>

            <a href="#" class="border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg flex items-center transition duration-300">
              Get Updates
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Services section with modern cards */}
          <div class="relative py-12 mb-16">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-sky-50 transform -skew-y-3"></div>
            <div class="relative max-w-7xl mx-auto px-4">
              <h2 class="text-3xl font-bold mb-2">Our Services</h2>
              <p class="text-gray-600 mb-12 max-w-2xl mx-auto">Providing the best care for your beloved companions</p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <ServiceCard
                  icon="🐶"
                  title="Premium Pet Food"
                  description="Nutritious and delicious options for all your furry friends. We source only the best ingredients."
                />
                <ServiceCard
                  icon="🏠"
                  title="Stylish Accessories"
                  description="Comfortable beds, toys, and accessories to keep your pets happy and your home beautiful."
                />
                <ServiceCard
                  icon="💊"
                  title="Health & Wellness"
                  description="Top-quality healthcare products to ensure your pet stays healthy and active."
                />
              </div>
            </div>
          </div>

          {/* Pet Categories section with modern design */}
          <section class="py-16">
            <div class="container mx-auto px-4">
              <div class="flex flex-col md:flex-row justify-between items-center mb-12">
                <div>
                  <h2 class="text-3xl font-bold text-left">Find Your Perfect Companion</h2>
                  <p class="text-gray-600 text-left mt-2">Browse our selection of adorable pets ready for adoption</p>
                </div>
                <div class="mt-4 md:mt-0">
                  <a href="#" class="inline-flex items-center text-blue-500 hover:text-blue-700">
                    View all categories
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <CategoryCard icon="🐶" title="Dogs" count="42" />
                <CategoryCard icon="🐱" title="Cats" count="38" />
                <CategoryCard icon="🐟" title="Fish" count="24" />
                <CategoryCard icon="🐦" title="Birds" count="16" />
              </div>
            </div>
          </section>

          {/* Featured Pets section */}
          <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
              <div class="flex flex-col md:flex-row justify-between items-center mb-12">
                <div>
                  <h2 class="text-3xl font-bold text-left">Featured Pets</h2>
                  <p class="text-gray-600 text-left mt-2">Meet our adorable friends looking for a forever home</p>
                </div>
                <div class="mt-4 md:mt-0">
                  <a href="#" class="inline-flex items-center text-blue-500 hover:text-blue-700">
                    View all pets
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <PetCard
                  image="/api/placeholder/400/320"
                  name="Max"
                  type="Golden Retriever"
                  age="2 years"
                  price="$550"
                />
                <PetCard
                  image="/api/placeholder/400/320"
                  name="Bella"
                  type="Persian Cat"
                  age="1.5 years"
                  price="$450"
                />
                <PetCard
                  image="/api/placeholder/400/320"
                  name="Charlie"
                  type="French Bulldog"
                  age="3 years"
                  price="$750"
                />
                <PetCard
                  image="/api/placeholder/400/320"
                  name="Luna"
                  type="Maine Coon"
                  age="2 years"
                  price="$500"
                />
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section class="py-16 bg-gradient-to-r from-blue-50 to-sky-50">
            <div class="container mx-auto px-4">
              <h2 class="text-3xl font-bold mb-12">What Our Customers Say</h2>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <TestimonialCard
                  quote="PawParadise helped me find my perfect furry companion. The staff was incredibly helpful and caring throughout the adoption process."
                  author="Sarah J."
                  location="New York"
                />
                <TestimonialCard
                  quote="The quality of pet supplies is outstanding. My cat loves the premium food they recommended, and their health has improved significantly."
                  author="Michael T."
                  location="San Francisco"
                />
                <TestimonialCard
                  quote="The grooming service is top-notch! My dog always comes back looking and smelling amazing. Highly recommend their services."
                  author="Emma L."
                  location="Chicago"
                />
              </div>
            </div>
          </section>

          {/* Call to action */}
          <section class="py-16">
            <div class="container mx-auto px-4">
              <div class="bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl p-12 text-white text-center">
                <h2 class="text-3xl font-bold mb-4">Ready to Find Your Perfect Pet?</h2>
                <p class="text-lg mb-8 max-w-2xl mx-auto">Join thousands of happy pet owners who found their companions through PawParadise.</p>
                <div class="flex flex-wrap justify-center gap-4">
                  <a href="#" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition duration-300">Adopt Now</a>
                  <a href="#" class="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition duration-300">Browse Pets</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div class="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zM19 2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zM5 2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2z" />
                </svg>
                <span class="ml-2 text-xl font-bold">PawParadise</span>
              </div>
              <p class="text-gray-400">The progressive pet care solution for all your furry, feathery, and scaly friends.</p>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Shop</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-4">Pet Categories</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white">Dogs</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Cats</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Birds</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Fish</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Small Pets</a></li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-4">Stay Connected</h3>
              <p class="text-gray-400 mb-4">Subscribe to our newsletter for updates and special offers.</p>
              <div class="flex">
                <input type="email" placeholder="Your email" class="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-800" />
                <button class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">Subscribe</button>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-700 mt-12 pt-8 flex justify-between items-center flex-wrap">
            <p class="text-gray-400">&copy; 2025 PawParadise. All rights reserved.</p>
            <div class="flex space-x-4 mt-4 md:mt-0">
              <a href="#" class="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.045 10.045 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.214 2.19 4.1a4.904 4.904 0 01-2.23-.616v.06a4.923 4.923 0 003.946 4.8 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});

// Components
export const ServiceCard = component$(({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <div class="bg-white p-6 rounded-lg shadow-md text-left hover:shadow-lg transition duration-300">
      <div class="text-4xl mb-4">{icon}</div>
      <h3 class="text-xl font-bold mb-2">{title}</h3>
      <p class="text-gray-600">{description}</p>
    </div>
  );
});

export const CategoryCard = component$(({ icon, title, count }: { icon: string; title: string; count?: string }) => {
  return (
    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-left cursor-pointer group overflow-hidden relative">
      <div class="absolute -right-4 -top-4 bg-blue-100 w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="flex justify-between items-start relative">
        <div class="text-4xl mb-2 bg-blue-50 p-3 rounded-lg">{icon}</div>
        {count && (
          <span class="text-sm bg-gray-100 px-2 py-1 rounded-full text-gray-600">{count}</span>
        )}
      </div>
      <h3 class="text-lg font-medium mt-2">{title}</h3>
      <div class="mt-4">
        <a href="#" class="text-blue-500 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Browse {title}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
});

export const PetCard = component$(({ image, name, type, age, price }: { image: string; name: string; type: string; age: string; price: string }) => {
  return (
    <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden group">
      <div class="relative overflow-hidden">
        <img src={image} alt={name} class="w-full h-48 object-cover transition duration-300 group-hover:scale-105" />
        <div class="absolute top-3 right-3">
          <button class="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 hover:text-red-500 transition duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div class="p-4">
        <div class="flex justify-between items-start mb-1">
          <h3 class="text-lg font-semibold">{name}</h3>
          <span class="text-blue-600 font-medium">{price}</span>
        </div>
        <p class="text-gray-600 text-sm mb-2">{type}</p>
        <div class="flex items-center text-sm text-gray-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
          </svg>
          {age}
        </div>
        <div class="flex space-x-2">
          <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 flex-1 text-center">View Details</a>
          <button class="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 4H6.28l-.31-1.243A1 1 0 005 2H3z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
});

export const TestimonialCard = component$(({ quote, author, location }: { quote: string; author: string; location: string }) => {
  return (
    <div class="bg-white p-6 rounded-lg shadow-md relative">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-100 absolute top-4 left-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.053 2.3c-1.545.314-3.010.97-4.254 1.97C3.604 5.318 2.419 6.98 2.062 9.105c-.359 2.07.022 4.024.866 5.38.761 1.185 1.95 1.614 2.986 1.977.44.153.93.31 1.44.466-.022-.2-.014-.444.025-.731.57-4.499 3.858-5.95 3.858-5.95a7.66 7.66 0 00-2.13-7.835l-.106-.113z" />
        <path d="M17.553 2.3c-1.545.314-3.010.97-4.254 1.97-1.195 1.048-2.38 2.71-2.737 4.835-.359 2.07.022 4.024.866 5.38.761 1.185 1.95 1.614 2.986 1.977.44.153.93.31 1.44.466-.022-.2-.014-.444.025-.731.57-4.499 3.858-5.95 3.858-5.95a7.66 7.66 0 00-2.13-7.835l-.055-.066z" />
      </svg>
      <div class="relative z-10">
        <p class="text-gray-600 italic mb-4">{quote}</p>
        <div class="flex items-center">
          <div class="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center">
            <span class="text-gray-600 font-medium">{author.charAt(0)}</span>
          </div>
          <div class="ml-3">
            <h4 class="font-semibold">{author}</h4>
            <p class="text-gray-500 text-sm">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'PawParadise - The Progressive Pet Care Solution',
  meta: [
    {
      name: 'description',
      content: 'PawParadise is your one-stop solution for all pet care needs, providing premium products and services for your beloved companions.',
    },
  ],
};
