import { useRef } from 'react';

import ScrollTop from './ScrollTop';
import { BiDownArrow } from 'react-icons/bi';
import About from "./about"
import Contact from "./contact"
import Project from "./project"
function App() {
	const homeSection = useRef(null)
	const aboutSection = useRef(null);
	const servcesSection = useRef(null);
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
			<div className="section section1">
				<div className="link btn" onClick={() => scrollDown(homeSection)}>
					<BiDownArrow />
				</div>
				<ul className="nav-links">
					<li className="link" onClick={() => scrollDown(aboutSection)}>
						About Me
					</li>
					<li className="link" onClick={() => scrollDown(servcesSection)}>
						Services
					</li>
					<li className="link" onClick={() => scrollDown(contactSection)}>
						Contact
					</li>
				</ul>
			</div>
			<div className="section section2" ref={homeSection}>
				<h2>Home</h2>
        
			</div>
			<div className="section section3" ref={aboutSection}>
				<h2>About Me</h2>
        <About>

        </About>
			</div>
			<div className="section section4" ref={servcesSection}>
				<h2>Projects</h2>
        <Project>

        </Project>
			</div>
			<div className="section section5" ref={contactSection}>
				<h2>Contact</h2>
        <Contact>

        </Contact>
			</div>
			
		</div>
	);
}

export default App;