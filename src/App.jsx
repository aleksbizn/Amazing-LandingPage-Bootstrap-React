import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials, CaseStudies, Contact, Footer, Hero, Process, Gallary, Team , CTA} from './container';
import  Aboutpage  from './pages/Aboutpage';
import  Project_1  from './pages/projects/Project_1';
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";





const App = () => (
  <div className="container">
    {/* <Hero /> */}

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Gallary />} />
            <Route path="about" element={<Aboutpage />} />
            <Route path="project_1" element={<Project_1 />} />
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
