export const structureDate = (param) => {
  const dateOnly = param.slice(0, 10)
  return dateOnly
}

export const navLinks = [
  {label: 'Home', linkTo: '/'},
  {label: 'Categories', linkTo: '/categories'},
  {label: 'About', linkTo: '/about'},
  {label: 'Contact', linkTo: '/contact'},
]