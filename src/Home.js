import Contact from "./contact"
import React from "react"
import { useRef } from 'react';
import ScrollTop from './ScrollTop';


function FadeInSection(props) {
	const [isVisible, setVisible] = React.useState(true);
	const domRef = React.useRef();
	React.useEffect(() => {
	  const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => setVisible(entry.isIntersecting));
	  });
	  observer.observe(domRef.current);
	  return () => observer.unobserve(domRef.current);
	}, []);
	return (
	  <div
		className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
		ref={domRef}
	  >
		{props.children}
	  </div>
	);
  }

const Home = () => {
    const contactSection = useRef(null);

    
    return (  
        <div className="home">
            <ScrollTop />
            <h2 className="home-title">Software Engineer</h2>
            <div className="home-desc">Idk how to format this</div>
            <div className="footer" ref={contactSection}>
				<FadeInSection>
					<div style = {{ color: "#EFF0F1", fontStyle: 'italic'}}>
					<h2>CONTACT ME</h2>
					</div>
					<Contact>

					</Contact>
				</FadeInSection>
			</div>
        </div>
    );
}
 
export default Home;