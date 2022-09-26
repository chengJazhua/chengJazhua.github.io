import { useRef } from 'react';
import logo from './background.png';
import ScrollTop from './ScrollTop';
import { BiDownArrow } from 'react-icons/bi';
import About from "./about"
import Contact from "./contact"
import Project from "./project"
import React from "react"

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

function App() {
	const homeSection = useRef(null)
	const aboutSection = useRef(null);
	const projectSection = useRef(null);
	const contactSection = useRef(null);

	const scrollDown = (ref) => {
		window.scrollTo({
			top: ref.current.offsetTop,
			behavior: 'smooth',
		});
	};

	/*const scrollToBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth',
		});
	};*/

	return (
		<div className="App">
			
			<ScrollTop />
			<div className="section section1"
				style={{
					backgroundImage: `url(${logo})`,
					backgroundPosition: "center",
 				 	backgroundSize: "cover",}}>
						<div style = {{size: 510}}>
						<h1> Hi! :) </h1>
						</div>
				
				<div className="link2 btn" onClick={() => scrollDown(homeSection)}>
					<BiDownArrow size = "50" />
				</div>
				
			</div>
			<div className="bar section2" ref={homeSection} style = {{display: 'flex', alignText: "center", justifyContent: 'space-around',
  alignItems: 'center'}}>
				<FadeInSection>
				<ul className="nav-links" >
					
					<li className="link" onClick={() => scrollDown(aboutSection)} style = {{color: "white", fontStyle: 'italic'}}>
						ABOUT ME
					</li>
					
					<li className="link" onClick={() => scrollDown(projectSection)} style = {{color: "white", fontStyle: 'italic'}}>
						PROJECTS
					</li>
					<li className="link" onClick={() => scrollDown(contactSection)} style = {{color: "white", fontStyle: 'italic'}}>
						CONTACT ME
					</li>
				</ul>
				</FadeInSection>
			</div>
			
			<div className="section section3" ref={aboutSection} >
			<FadeInSection>
			<div style = {{ color: "black", fontStyle: 'italic', }}>
				<h2 >ABOUT ME</h2>
				</div>
        <About>

        </About>
		</FadeInSection>
			</div>
			
			<div className="section section4" ref={projectSection}>
				<FadeInSection>
				<div style = {{ color: "black", fontStyle: 'italic'}}>
				<h2>PROJECTS</h2>
				</div>
        <Project>

        </Project>
		</FadeInSection>
			</div>
			
			<div className="footer section5" ref={contactSection}>
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


export default App;