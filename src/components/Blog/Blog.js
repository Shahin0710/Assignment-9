import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Blog.css';

const Blog = () => {
  return (
    <div className='blog'>
        <Header />
        <h1>
            Blog
        </h1>
            <CardGroup className='blog-card'>
              <Card>
                <Card.Body>
                  <Card.Title>What is the purpose of React Router?</Card.Title>
                  <Card.Text>
                    React Router is a standard library for routing in React. It enables the navigation
                    among views of various components in a React Application, allows changing the browser
                    URL, and keeps the UI in sync with the URL. Let us create a simple application to 
                    React to understand how the React Router works. The application will contain three 
                    components: home component, about a component, and contact component. We will use 
                    React Router to navigate between these components.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            <CardGroup className='blog-card'>
              <Card>
                <Card.Body>
                  <Card.Title>How dose context API work?</Card.Title>
                  <Card.Text>
                    The React Context API is a way for a React app to effectively produce global 
                    variables that can be passed around. This is the alternative to "prop drilling" or 
                    moving props from grandparent to child to parent, and so on. Context is also touted 
                    as an easier, lighter approach to state management using Redux.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            <CardGroup className='blog-card'>
              <Card>
                <Card.Body>
                  <Card.Title>What is useRef?</Card.Title>
                  <Card.Text>
                        useRef returns a mutable ref object whose .current property is initialized 
                        to the passed argument ( initialValue ). The returned object will persist 
                        for the full lifetime of the component. Essentially, useRef is like a “box” 
                        that can hold a mutable value in its .current property.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            <div className='footer'>
                <Footer />
            </div>
    </div>
  )
}

export default Blog;