export const PRODUCT_CATEGORIES = [
  {
    label: "Fresh Fish",
    value: "fresh_fish" as const,
    featured: [
      {
        name: 'Editors pick',
        href: '#',
        image: '/nav/processed_fish/mixed.jpg'
      },
      {
        name: 'New Arrivals',
        href: '#',
        image: '/nav/processed_fish/blue.jpg'
      },
      {
        name: 'Best Sellers',
        href: '#',
        image: '/nav/processed_fish/purple.jpg'
      }
    ]
  },
  {
    label: "Processed Fish",
    value: "processed_fish" as const,
    featured: [
      {
        name: 'Favorite Picks',
        href: '#',
        image: '/nav/processed_fish/picks.jpg'
      },
      {
        name: 'New Arrivals',
        href: '#',
        image: '/nav/processed_fish/new.jpg'
      },
      {
        name: 'Best Selling processed fish',
        href: '#',
        image: '/nav/processed_fish/bestsellers.jpg'
      }
    ]
  },
];
