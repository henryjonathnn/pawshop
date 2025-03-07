import { component$ } from '@builder.io/qwik';

export const NavBar = component$(() => {
  return (
    <nav class="fixed w-full bg-black/30 backdrop-blur-md z-50 border-b border-purple-500/30">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <div class="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center">
            <span class="text-2xl font-bold">P</span>
          </div>
          <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            MetaPets
          </span>
        </div>
        
        <div class="hidden md:flex items-center space-x-8">
          <a href="#" class="hover:text-purple-400 transition-colors">Home</a>
          <a href="#" class="hover:text-purple-400 transition-colors">Shop</a>
          <a href="#" class="hover:text-purple-400 transition-colors">Services</a>
          <a href="#" class="hover:text-purple-400 transition-colors">Metaverse</a>
          <a href="#" class="hover:text-purple-400 transition-colors">About</a>
        </div>
        
        <div class="flex items-center gap-4">
          <button class="h-10 w-10 rounded-full bg-purple-800/50 border border-purple-500/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
          <button class="h-10 w-10 rounded-full bg-purple-800/50 border border-purple-500/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button class="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
});