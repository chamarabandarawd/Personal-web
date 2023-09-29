import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects/Project";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import FooterBottom from './components/footer/FooterBottom'


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-6">
      <Navbar />
      <div className="max-w-screen-xl mx-auto ">
        <Banner />
        <Features />
        <Project />
        <Resume />
        {/* <Testimonial/> */}
        <Contact/>
        <Footer/>
        <FooterBottom/>
      </div>
    </div>
  );
}

export default App;
