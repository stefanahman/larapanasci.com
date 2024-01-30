import React from 'react'

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from './section/Home';
import About from './section/About';

import Instructor from './section/Instructor';
import InstructorDetails from './section/InstructorDetails';
import Courses from './section/Course';
import CoursesDetails from './section/CourseDetails';
import Blog from './section/Blog';
import BlogDetails from './section/BlogDetails';
import Contact from './section/Contact';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/about"  element={<About />}/>
          <Route path="/instructor"  element={<Instructor />}/>
          <Route path="/instructordetails"  element={<InstructorDetails />}/>
          <Route path="/course"  element={<Courses />}/>
          <Route path="/coursedetails"  element={<CoursesDetails />}/>
          <Route path="/blog"  element={<Blog />}/>
          <Route path="/blogdetails"  element={<BlogDetails />}/>
          <Route path="/contact"  element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App