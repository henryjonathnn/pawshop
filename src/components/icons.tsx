// File: src/components/icons.tsx
import { component$ } from '@builder.io/qwik';

export const PawPrintIcon = component$(({ class: className }: { class?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M8.5 4A2.5 2.5 0 0 1 11 6.5c0 1.38-1.12 2.5-2.5 2.5S6 7.88 6 6.5 7.12 4 8.5 4m10 0c1.38 0 2.5 1.12 2.5 2.5S19.88 9 18.5 9 16 7.88 16 6.5 17.12 4 18.5 4M4 10c1.38 0 2.5 1.12 2.5 2.5S5.38 15 4 15s-2.5-1.12-2.5-2.5S2.62 10 4 10m16 0c1.38 0 2.5 1.12 2.5 2.5S21.38 15 20 15s-2.5-1.12-2.5-2.5S18.62 10 20 10m-8 2c1.38 0 2.5 1.12 2.5 2.5S13.38 17 12 17s-2.5-1.12-2.5-2.5S10.62 12 12 12m0 6c3.66 0 10 1.68 10 5v1H2v-1c0-3.32 6.34-5 10-5z" />
    </svg>
  );
});

export const ShoppingCartIcon = component$(({ class: className }: { class?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
});

export const UserIcon = component$(({ class: className }: { class?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
});

export const SearchIcon = component$(({ class: className }: { class?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
});

export const HeartIcon = component$(({ class: className }: { class?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
});

export const MenuIcon = component$(({ class: className }: { class?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
});

export const CloseIcon = component$(({ class: className }: { class?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
});

export const StarIcon = component$(({ class: className, filled }: { class?: string, filled?: boolean }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class={className} 
      viewBox="0 0 24 24" 
      fill={filled ? "currentColor" : "none"} 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
});

export const PhoneIcon = component$(({ class: className }: { class?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
});

export const EmailIcon = component$(({ class: className }: { class?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
});

export const LocationIcon = component$(({ class: className }: { class?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
});

export const FilterIcon = component$(({ class: className }: { class?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
});