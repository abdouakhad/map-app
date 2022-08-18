import React from 'react'

// function that returns the year
function getYear() {
  return new Date().getFullYear()
}

const Footer = () => {
  const year = getYear()
  return <footer>Footer </footer>
}

export default Footer
