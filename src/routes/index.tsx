import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { PawPrintIcon, ShoppingCartIcon, UserIcon, SearchIcon, HeartIcon } from '~/components/icons';
import { MobileMenu } from '~/components/mobile-menu';
import { ProductCard } from '~/components/product-card';

export default component$(() => {
    // Sample product data
    const featuredProducts = [
      { 
        id: 1, 
        name: 'Premium Dog Food', 
        price: 45.99, 
        image: '/api/placeholder/300/300', 
        rating: 4.8,
        reviewCount: 124,
        badge: 'Best Seller' 
      },
      { 
        id: 2, 
        name: 'Interactive Cat Toy', 
        price: 19.99, 
        originalPrice: 24.99,
        image: '/api/placeholder/300/300',
        rating: 4.6,
        reviewCount: 86,
        isSale: true
      },
      { 
        id: 3, 
        name: 'Cozy Pet Bed', 
        price: 59.99, 
        image: '/api/placeholder/300/300', 
        rating: 4.9,
        reviewCount: 47,
        badge: 'New',
        isNew: true
      },
      { 
        id: 4, 
        name: 'Natural Pet Shampoo', 
        price: 14.99, 
        image: '/api/placeholder/300/300', 
        rating: 4.7,
        reviewCount: 63,
        badge: 'Organic' 
      },
    ];
  
    return (
      <>
        <header class="bg-white shadow-sm sticky top-0 z-10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
              {/* Logo */}
              <div class="flex items-center">
                <Link href="/" class="text-emerald-600 font-bold text-2xl flex items-center">
                  <PawPrintIcon class="w-8 h-8 mr-2" />
                  <span>PawParadise</span>
                </Link>
              </div>
              
              {/* Navigation */}
              <nav class="hidden md:flex space-x-8">
                <Link href="/shop" class="text-gray-700 hover:text-emerald-600 font-medium">Shop</Link>
                <Link href="/services" class="text-gray-700 hover:text-emerald-600 font-medium">Services</Link>
                <Link href="/about" class="text-gray-700 hover:text-emerald-600 font-medium">About Us</Link>
                <Link href="/blog" class="text-gray-700 hover:text-emerald-600 font-medium">Blog</Link>
                <Link href="/contact" class="text-gray-700 hover:text-emerald-600 font-medium">Contact</Link>
              </nav>
              
              {/* Actions */}
              <div class="flex items-center space-x-4">
                <button class="text-gray-700 hover:text-emerald-600 hidden md:block">
                  <SearchIcon class="w-6 h-6" />
                </button>
                <Link href="/wishlist" class="text-gray-700 hover:text-emerald-600 relative hidden md:block">
                  <HeartIcon class="w-6 h-6" />
                  <span class="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                </Link>
                <Link href="/cart" class="text-gray-700 hover:text-emerald-600 relative">
                  <ShoppingCartIcon class="w-6 h-6" />
                  <span class="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
                </Link>
                <Link href="/account" class="text-gray-700 hover:text-emerald-600 hidden md:block">
                  <UserIcon class="w-6 h-6" />
                </Link>
                
                {/* Mobile Menu */}
                <MobileMenu />
              </div>
            </div>
          </div>
        </header>
  
        <main>
          {/* Hero Section */}
          <section class="relative bg-emerald-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Treat Your Pets with the <span class="text-emerald-600">Best Care</span> They Deserve
                  </h1>
                  <p class="mt-4 text-lg text-gray-600">
                    Premium pet products, professional grooming services, and expert advice for your furry friends.
                  </p>
                  <div class="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                    <Link href="/shop" class="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg text-center transition duration-150 ease-in-out">
                      Shop Now
                    </Link>
                    <Link href="/services" class="bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium py-3 px-6 rounded-lg text-center transition duration-150 ease-in-out">
                      Our Services
                    </Link>
                  </div>
                </div>
                <div class="relative">
                  <img src="/api/placeholder/600/500" alt="Happy dog and cat" class="rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          </section>
  
          {/* Categories */}
          <section class="py-12 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900">Shop by Pet Category</h2>
                <p class="mt-4 text-lg text-gray-600">Find everything your pet needs in one place</p>
              </div>
              
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'Dogs', image: '/api/placeholder/300/300' },
                  { name: 'Cats', image: '/api/placeholder/300/300' },
                  { name: 'Birds', image: '/api/placeholder/300/300' },
                  { name: 'Fish', image: '/api/placeholder/300/300' },
                ].map((category) => (
                  <Link href={`/shop/${category.name.toLowerCase()}`} class="group">
                    <div class="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
                      <img src={category.image} alt={category.name} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <h3 class="text-white font-medium text-xl p-4">{category.name}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
          
          {/* Featured Products */}
          <section class="py-12 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl font-bold text-gray-900">Featured Products</h2>
                <Link href="/shop" class="text-emerald-600 hover:text-emerald-700 font-medium">
                  View All
                </Link>
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        {/* Services */}
        <section class="py-12 bg-emerald-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900">Our Premium Services</h2>
              <p class="mt-4 text-lg text-gray-600">Professional care for your beloved pets</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Grooming', description: 'Professional pet grooming services by certified experts', image: '/api/placeholder/400/300' },
                { name: 'Veterinary', description: 'Consultations and health check-ups by experienced veterinarians', image: '/api/placeholder/400/300' },
                { name: 'Training', description: 'Behavior training and socialization classes for pets of all ages', image: '/api/placeholder/400/300' },
              ].map((service) => (
                <div class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img src={service.image} alt={service.name} class="w-full h-48 object-cover" />
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p class="text-gray-600 mb-4">{service.description}</p>
                    <Link href={`/services/${service.name.toLowerCase()}`} class="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                      Learn more
                      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section class="py-12 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
              <p class="mt-4 text-lg text-gray-600">Don't just take our word for it</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Sarah M.', comment: 'The grooming service was exceptional. My poodle has never looked better!', rating: 5, image: '/api/placeholder/100/100' },
                { name: 'John D.', comment: 'Great selection of premium pet food. My cat is picky but loves everything I\'ve bought here.', rating: 5, image: '/api/placeholder/100/100' },
                { name: 'Maria T.', comment: 'The staff is so knowledgeable and helped me find the perfect supplements for my aging dog.', rating: 4, image: '/api/placeholder/100/100' },
              ].map((testimonial) => (
                <div class="bg-gray-50 rounded-lg p-6">
                  <div class="flex text-emerald-500 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p class="text-gray-600 italic mb-6">"{testimonial.comment}"</p>
                  <div class="flex items-center">
                    <img src={testimonial.image} alt={testimonial.name} class="w-10 h-10 rounded-full mr-3" />
                    <span class="font-medium text-gray-900">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section class="py-12 bg-emerald-600">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center text-white mb-8">
              <h2 class="text-3xl font-bold">Join Our Newsletter</h2>
              <p class="mt-4 text-emerald-100">Get the latest updates, tips and special offers straight to your inbox</p>
            </div>
            
            <form class="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                class="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
                required
              />
              <button type="submit" class="bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium transition duration-150 ease-in-out">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer class="bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" class="text-white font-bold text-xl flex items-center">
                <PawPrintIcon class="w-6 h-6 mr-2" />
                <span>PawParadise</span>
              </Link>
              <p class="mt-4 text-gray-400">Your one-stop shop for premium pet products and services.</p>
              <div class="mt-6 flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-white">
                  <span class="sr-only">Facebook</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                  <span class="sr-only">Instagram</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                  <span class="sr-only">Twitter</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-4">Shop</h3>
              <ul class="space-y-2">
                <li><Link href="/shop/dogs" class="text-gray-400 hover:text-white">Dogs</Link></li>
                <li><Link href="/shop/cats" class="text-gray-400 hover:text-white">Cats</Link></li>
                <li><Link href="/shop/birds" class="text-gray-400 hover:text-white">Birds</Link></li>
                <li><Link href="/shop/fish" class="text-gray-400 hover:text-white">Fish</Link></li>
                <li><Link href="/shop/new" class="text-gray-400 hover:text-white">New Arrivals</Link></li>
                <li><Link href="/shop/deals" class="text-gray-400 hover:text-white">Special Offers</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-4">Services</h3>
              <ul class="space-y-2">
                <li><Link href="/services/grooming" class="text-gray-400 hover:text-white">Grooming</Link></li>
                <li><Link href="/services/veterinary" class="text-gray-400 hover:text-white">Veterinary Care</Link></li>
                <li><Link href="/services/training" class="text-gray-400 hover:text-white">Training Classes</Link></li>
                <li><Link href="/services/boarding" class="text-gray-400 hover:text-white">Pet Boarding</Link></li>
                <li><Link href="/services/adoption" class="text-gray-400 hover:text-white">Adoption Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-4">Contact</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span class="text-gray-400">123 Pet Avenue, Animal City</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span class="text-gray-400">(123) 456-7890</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span class="text-gray-400">info@pawparadise.com</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-gray-400">Mon-Sat: 9AM-8PM<br />Sunday: 10AM-6PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="border-t border-gray-800 mt-12 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <p class="text-gray-400 text-sm">© 2025 PawParadise. All rights reserved.</p>
              <div class="mt-4 md:mt-0 flex space-x-6">
                <a href="#" class="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                <a href="#" class="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                <a href="#" class="text-gray-400 hover:text-white text-sm">Shipping Info</a>
                <a href="#" class="text-gray-400 hover:text-white text-sm">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
});