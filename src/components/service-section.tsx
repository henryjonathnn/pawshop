import { component$ } from '@builder.io/qwik';

export const ServiceSection = component$(() => {
  const services = [
    {
      id: 1,
      title: "Virtual Pet Check-ups",
      description: "Schedule AI-powered health assessments for your pets from the comfort of your home.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "AR Pet Training",
      description: "Train your pet with augmented reality modules designed by professional trainers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Digital Pet Passport",
      description: "Store all your pet's information securely on our blockchain-based digital passport.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Smart Feeding System",
      description: "Automate your pet's feeding schedule with our IoT-enabled feeding system.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];
  
  return (
    <div class="py-20 px-4">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Next-Gen Pet Services</h2>
          <p class="text-purple-200 max-w-2xl mx-auto">Leveraging cutting-edge technology to provide exceptional care for your beloved pets.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} class="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-md rounded-xl border border-purple-500/30 p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-shadow">
              <div class="h-14 w-14 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 class="text-xl font-bold mb-3">{service.title}</h3>
              <p class="text-purple-200 mb-4">{service.description}</p>
              <a href="#" class="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});