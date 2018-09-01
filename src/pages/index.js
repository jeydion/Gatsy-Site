import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello!</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p> My name is Justin. I am passionate about
       the positive impact web development can have on 
       empowering communities. </p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
