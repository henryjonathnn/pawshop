import { component$, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { MenuIcon, CloseIcon } from './icons';

export const MobileMenu = component$(() => {
  const isOpen = useSignal(false);

  return (
    <div class="md:hidden">
      <button
        onClick$={() => isOpen.value = !isOpen.value}
        class="text-gray-700 hover:text-emerald-600"
        aria-label={isOpen.value ? 'Close menu' : 'Open menu'}
      >
        {isOpen.value ? <CloseIcon class="w-6 h-6" /> : <MenuIcon class="w-6 h-6" />}
      </button>

      {isOpen.value && (
        <div class="absolute top-16 inset-x-0 bg-white shadow-lg z-20 p-4 transition-all duration-300 ease-in-out">
          <nav class="flex flex-col space-y-4">
            <Link 
              href="/shop" 
              class="text-gray-700 hover:text-emerald-600 font-medium py-2 border-b border-gray-100"
              onClick$={() => isOpen.value = false}
            >
              Shop
            </Link>
            <Link 
              href="/services" 
              class="text-gray-700 hover:text-emerald-600 font-medium py-2 border-b border-gray-100"
              onClick$={() => isOpen.value = false}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              class="text-gray-700 hover:text-emerald-600 font-medium py-2 border-b border-gray-100"
              onClick$={() => isOpen.value = false}
            >
              About Us
            </Link>
            <Link 
              href="/blog" 
              class="text-gray-700 hover:text-emerald-600 font-medium py-2 border-b border-gray-100"
              onClick$={() => isOpen.value = false}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              class="text-gray-700 hover:text-emerald-600 font-medium py-2"
              onClick$={() => isOpen.value = false}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
});