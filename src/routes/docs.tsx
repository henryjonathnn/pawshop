// src/routes/index.tsx
import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="min-h-screen bg-white">
      <header class="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div class="container mx-auto px-4 flex items-center h-16">
          {/* Logo and site name */}
          <div class="flex items-center mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zM19 2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zM5 2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2z" />
            </svg>
            <span class="ml-2 text-lg font-medium">MomentumUI</span>
          </div>

          {/* Search bar */}
          <div class="relative mr-4 hidden md:block">
            <input type="text" placeholder="Search docs" class="w-60 px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
            <div class="absolute right-3 top-2.5 text-xs text-gray-400 px-1 py-0.5 bg-gray-100 rounded">⌘K</div>
          </div>

          {/* Main navigation links */}
          <div class="flex items-center space-x-5 ml-auto">
            <a href="#" class="text-gray-600 hover:text-gray-900 text-sm font-medium">Docs</a>
            <a href="#" class="text-gray-600 hover:text-gray-900 text-sm font-medium">Components</a>
            <a href="#" class="text-gray-600 hover:text-gray-900 text-sm font-medium">Examples</a>

            {/* GitHub button */}
            <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>

            {/* Theme toggle button */}
            <button class="p-1 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main class="container mx-auto px-4 py-16">
        <div class="max-w-6xl mx-auto">
          {/* Hero section */}
          <div class="text-center mb-16">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span class="text-gray-800">Build better with </span>
              <span class="bg-gradient-to-r from-blue-900 via-blue-500 to-sky-400 bg-clip-text text-transparent">MomentumUI</span>
            </h1>
            
            <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              A lightweight, intuitive UI component library for modern web applications. 
              Open source and designed with developer experience in mind.
            </p>

            {/* Button layout */}
            <div class="flex flex-wrap justify-center gap-4 mb-12">
              <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                Get Started
              </a>

              <a href="#" class="border border-blue-500 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg flex items-center transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
                npm install momentum-ui
              </a>
            </div>

            {/* Code example */}
            <div class="bg-gray-900 rounded-lg p-6 text-left mb-16 shadow-lg overflow-hidden max-w-2xl mx-auto">
              <div class="flex items-center justify-between mb-4">
                <div class="flex space-x-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="text-gray-400 text-sm">Example usage</div>
              </div>
              <pre class="text-blue-300 font-mono text-sm md:text-base overflow-x-auto">
{`import { Button, Card } from 'momentum-ui';

function App() {
  return (
    <Card>
      <h1>Hello, World!</h1>
      <p>Start building amazing interfaces</p>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}`}
              </pre>
            </div>
          </div>

          {/* Features grid */}
          <section class="mb-24">
            <h2 class="text-3xl font-bold text-center mb-12">Why MomentumUI?</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                title="Lightweight & Fast"
                description="Minimal bundle size with no unnecessary dependencies. Optimized for performance and speed."
              />
              
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                }
                title="Customizable"
                description="Designed to be styled and customized easily with your brand. Works great with Tailwind CSS."
              />
              
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                  </svg>
                }
                title="Accessible"
                description="Built with accessibility in mind. All components follow WAI-ARIA standards and are keyboard navigable."
              />
            </div>
          </section>

          {/* Component preview */}
          <section class="mb-24">
            <h2 class="text-3xl font-bold text-center mb-4">Beautiful Components</h2>
            <p class="text-center text-gray-600 mb-12">A collection of essential UI components for your next project</p>
            
            <div class="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl shadow-sm">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <ComponentPreview name="Buttons" />
                <ComponentPreview name="Cards" />
                <ComponentPreview name="Forms" />
                <ComponentPreview name="Modals" />
              </div>
            </div>
          </section>

          {/* Code example */}
          <section class="mb-24">
            <div class="max-w-4xl mx-auto">
              <h2 class="text-3xl font-bold text-center mb-4">Intuitive API</h2>
              <p class="text-center text-gray-600 mb-12">Simple, predictable, and easy to learn</p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CodeExample
                  title="Button Component"
                  code={`import { Button } from 'momentum-ui';

function Example() {
  return (
    <div className="space-x-2">
      <Button variant="primary">
        Primary
      </Button>
      
      <Button variant="secondary">
        Secondary
      </Button>
      
      <Button variant="outline">
        Outline
      </Button>
    </div>
  );
}`}
                />
                
                <CodeExample
                  title="Modal Component"
                  code={`import { Modal, Button } from 'momentum-ui';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      
      <Modal 
        open={open} 
        onClose={() => setOpen(false)}
        title="Example Modal"
      >
        <p>Modal content goes here</p>
        
        <Button onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal>
    </>
  );
}`}
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer class="bg-gray-50 py-12 mt-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div>
              <div class="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zM19 2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zM5 2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2z" />
                </svg>
                <span class="ml-2 text-xl font-bold">MomentumUI</span>
              </div>
              <p class="text-gray-600">Open source UI components for modern web applications.</p>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-4">Resources</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-600 hover:text-blue-600">Documentation</a></li>
                <li><a href="#" class="text-gray-600 hover:text-blue-600">Components</a></li>
                <li><a href="#" class="text-gray-600 hover:text-blue-600">Examples</a></li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-4">Community</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-600 hover:text-blue-600">GitHub</a></li>
                <li><a href="#" class="text-gray-600 hover:text-blue-600">Discord</a></li>
                <li><a href="#" class="text-gray-600 hover:text-blue-600">Twitter</a></li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-4">Stay Updated</h3>
              <p class="text-gray-600 mb-4">Subscribe for updates.</p>
              <div class="flex">
                <input type="email" placeholder="Your email" class="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                <button class="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300">Subscribe</button>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2025 MomentumUI. Released under the MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  );
});

// Components
export const FeatureCard = component$(({ icon, title, description }: { icon: any; title: string; description: string }) => {
  return (
    <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-left">
      <div class="mb-4">{icon}</div>
      <h3 class="text-xl font-bold mb-2">{title}</h3>
      <p class="text-gray-600">{description}</p>
    </div>
  );
});

export const ComponentPreview = component$(({ name }: { name: string }) => {
  return (
    <div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300 text-center">
      <div class="w-full h-32 bg-gradient-to-br from-blue-100 to-indigo-50 rounded-md mb-4 flex items-center justify-center">
        <span class="text-blue-500 font-medium">{name}</span>
      </div>
      <p class="text-gray-800 font-medium">{name}</p>
    </div>
  );
});

export const CodeExample = component$(({ title, code }: { title: string; code: string }) => {
  return (
    <div class="bg-gray-900 rounded-lg p-5 text-left overflow-hidden">
      <div class="flex items-center justify-between mb-4">
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div class="text-gray-400 text-sm">{title}</div>
      </div>
      <pre class="text-gray-300 font-mono text-sm overflow-x-auto">{code}</pre>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'MomentumUI - Modern UI Component Library',
  meta: [
    {
      name: 'description',
      content: 'MomentumUI is a lightweight, accessible, and customizable UI component library for building modern web applications.',
    },
  ],
};