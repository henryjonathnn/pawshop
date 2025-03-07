import { component$ } from '@builder.io/qwik';

export const MetaverseExperience = component$(() => {
  return (
    <div class="py-20 px-4 relative bg-indigo-900/50">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      <div class="container mx-auto relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Enter the MetaPets Experience</h2>
          <p class="text-purple-200 max-w-2xl mx-auto">Experience our virtual pet space where you can interact with products before purchasing and meet other pet owners.</p>
        </div>
        
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="md:w-3/5 relative">
            <div class="relative z-10 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30 shadow-xl">
              <img src="/api/placeholder/800/500" alt="Metaverse Experience" class="rounded-xl w-full" />
              <div class="absolute inset-0 flex items-center justify-center">
                <button class="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div class="md:w-2/5">
            <h3 class="text-2xl font-bold mb-4">Virtual Pet Shopping</h3>
            <p class="text-purple-200 mb-6">Our immersive 3D experience allows you to visualize pet products in a virtual space before you buy them.</p>
            
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="h-10 w-10 rounded-full bg-purple-500 flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold">Try Before You Buy</h4>
                  <p class="text-sm text-purple-200">See how products fit your pet's size and style in our virtual showroom.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <div class="h-10 w-10 rounded-full bg-purple-500 flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold">Pet Owner Community</h4>
                  <p class="text-sm text-purple-200">Meet other pet owners and share experiences in our virtual pet park.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <div class="h-10 w-10 rounded-full bg-purple-500 flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold">Live Events & Training</h4>
                  <p class="text-sm text-purple-200">Attend virtual pet training sessions and product launches in real-time.</p>
                </div>
              </div>
            </div>
            
            <button class="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              Enter Metaverse
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});