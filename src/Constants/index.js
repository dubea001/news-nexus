export const structureDate = (param) => {
  const dateOnly = param.slice(0, 10);
  return dateOnly;
};

export const reduceText = (text, maxLength) => {
  if (text <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

export const navLinks = [
  { label: 'Home', linkTo: '/' },
  { label: 'Categories', linkTo: '/categories' },
  { label: 'About', linkTo: '/about' },
  { label: 'Contact', linkTo: '/contact' },
];

export const categories = (apiKey) => [
  {
    title: 'business',
    params: { apiKey, country: 'us', pageSize: 3, category: 'business' },
  },
  {
    title: 'science',
    params: { apiKey, country: 'us', pageSize: 3, category: 'science' },
  },

  {
    title: 'entertainment',
    params: {
      apiKey,
      country: 'us',
      pageSize: 3,
      category: 'entertainment',
    },
  },
  {
    title: 'sports',
    params: { apiKey, country: 'us', pageSize: 3, category: 'sports' },
  },
  {
    title: 'health',
    params: { apiKey, country: 'us', pageSize: 3, category: 'health' },
  },

  {
    title: 'technology',
    params: { apiKey, country: 'us', pageSize: 3, category: 'technology' },
  },
];
