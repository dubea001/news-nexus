export const structureDate = (param) => {
  const dateOnly = param.slice(0, 10)
  return dateOnly
}

export const reduceText = (text, maxLength) => {
  if (text <= maxLength) {
    return text
  }
  return text.slice(0, maxLength) + '...';
}

export const navLinks = [
  {label: 'Home', linkTo: '/'},
  {label: 'Categories', linkTo: '/categories'},
  {label: 'About', linkTo: '/about'},
  {label: 'Contact', linkTo: '/contact'},
]

export const categories = (apiKey) => [
  { title: 'sports', params: { apiKey, country: 'us', pageSize: 4, category: 'sports' } },
  { title: 'business', params: { apiKey, country: 'us', pageSize: 4, category: 'business' } },
  { title: 'entertainment', params: { apiKey, country: 'us', pageSize: 4, category: 'entertainment' } },
  { title: 'health', params: { apiKey, country: 'us', pageSize: 4, category: 'health' } },
  { title: 'science', params: { apiKey, country: 'us', pageSize: 4, category: 'science' } },
  { title: 'technology', params: { apiKey, country: 'us', pageSize: 4, category: 'technology' } },
];
