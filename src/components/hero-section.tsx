import { component$ } from '@builder.io/qwik';

export const HeroSection = component$(() => {
  return (
    <div class="relative pt-24 pb-32 px-4 overflow-hidden">
      <div class="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div class="lg:w-1/2 z-10">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to the <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">MetaPets</span> Universe
          </h1>
          <p class="text-lg text-purple-100 mb-8 max-w-lg">
            Experience the future of pet care in our immersive metaverse marketplace. Shop for your pets in a whole new dimension.
          </p>
          <div class="flex gap-4">
            <button class="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold hover:opacity-90 transition-opacity">
              Shop Now
            </button>
            <button class="px-8 py-3 bg-transparent border border-purple-400 rounded-full font-bold hover:bg-purple-800/30 transition-colors">
              Explore Metaverse
            </button>
          </div>
        </div>
        <div class="lg:w-1/2 relative">
          <div class="relative z-10 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30 shadow-xl">
            <img src="/api/placeholder/600/400" alt="Virtual Pet" class="rounded-xl w-full" />
          </div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>
      </div>
      
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-10"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
    </div>
  );
});