import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials, CaseStudies, Contact, Footer, Hero, Process, Gallary, Team , CTA} from './container';
import  Aboutpage  from './pages/Aboutpage';
import   Project1     from './pages/projects/Project1';
import   Project2     from './pages/projects/Project_2';

import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import React from 'react';





const App = () => (
  <div className="container">
    {/* <Hero /> */}

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Gallary />} />
            <Route path="about" element={<Aboutpage />} />
            {/* map links*/}
            <Route path="Project_1" element={<Project1 />} />
            <Route path="eco-poster" element={<Project2 />} />
            {/* <Route path=":projectName" element={<ProjectPage />} /> */}
            {/* <Route path="register" element={<SignUp />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>

    {/* <Gallary /> */}
    {/* <Aboutpage /> */}

    {/* <CTA />
    <CaseStudies />
    <Process />
    <Team />
    <Testimonials />
    <Contact /> */}

  </div>
);

export default App;
