import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Navigation',
      links: [
        {
          text: 'Features',
          href: getPermalink('/#features'),
        },
        {
          text: 'Preise',
          href: getPermalink('/preise'),
        },
        {
          text: 'Über Uns',
          href: getPermalink('/about'),
        },
        {
          text: 'Kontakt',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
      ],
    },
  ],
  actions: [
    { text: 'Blog', href: '/blog', target: '' },
    { text: 'Kontakt', href: '/contact', target: '_blank' },
  ],
};

export const footerData = {
  secondaryLinks: [{ text: 'Terms', href: getPermalink('/terms') }],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://bsky.app/profile/einfachspanien.com' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://einfachspanien.com"> EinfachSpanien</a> · Alle Rechte vorbehalten.
  `,
};
