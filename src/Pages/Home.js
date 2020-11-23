import React, { useState, useEffect } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import Section from '../Components/Section'
import Scrollspy from 'react-scrollspy'
import Projects from './Projects'
import { ReactComponent as MenuButton } from '../Assets/menu-button-wide.svg'
import Headshot from '../Assets/Headshot.png'
import Typed from 'typed.js'
import { ReactComponent as AzureIcon } from '../Assets/Azure.svg'
import { ReactComponent as CiscoIcon } from '../Assets/Cisco.svg'
import { ReactComponent as PShellIcon } from '../Assets/Powershell.svg'
import { ReactComponent as NodeIcon } from '../Assets/Nodejs.svg'
import { ReactComponent as ExchangeIcon } from '../Assets/Exchange.svg'
import { ReactComponent as GraphQLIcon } from '../Assets/graphql.svg'
import { ReactComponent as MongoIcon } from '../Assets/Mongodb.svg'

export default function Home() {

    const [sideOpen, setSideOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const options = {
            strings: ['IT Technician', 'IT Administrator', 'Aspiring Developer', 'Designer'],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1000,
            loop: true
        };
        // eslint-disable-next-line
        let typed = new Typed('#heroText', options)
        const checkWindowSize = () => {
            setIsMobile(window.innerWidth < 769)
            setSideOpen(window.innerWidth < 769 ? false : true)
        }
        window.addEventListener("resize", checkWindowSize);
        return () => window.removeEventListener("resize", checkWindowSize)
    }, [])

    const openMenu = () => {
        setSideOpen(!sideOpen)
    }

    const backdropClickHandler = () => {
        setSideOpen(false)
    }

    return (
        <>
            <div className="navDiv">
                <div className="navRow">
                    {(isMobile && !sideOpen) && <MenuButton onClick={() => openMenu()} className="menu" />}
                    <Navbar className={"flex-column justify-content-center align-items-center nav p-0 " + (isMobile ? "containerMobile " + (sideOpen ? "show" : "hide") : "")} fixed="top" id="sideNav">
                        <a href="#Home"><img src={Headshot} alt="Headshot" className="img-fluid img-thumbnail rounded-circle" /></a>
                        <div className="profile">
                            <h1 className="navColor">Clement Ngai</h1>
                        </div>
                        <div>
                            <a href="https://github.com/cngai87/"><i className="fab fa-github mx-2 navColor"></i></a>
                            <a href="https://www.linkedin.com/in/clement-ngai-a225b93b/"><i className="fab fa-linkedin mx-2 navColor"></i></a>
                        </div>
                        <Scrollspy items={['About', 'Portfolio', 'Skills', 'Interests']} currentClassName="is-current">
                            <Nav.Link eventKey="link-1" href="#About" onClick={() => setSideOpen(false)} className="navText navColor mt-4 text-center"><i className="fas fa-user mr-2" /><span>About</span></Nav.Link>
                            <Nav.Link eventKey="link-2" href="#Portfolio" onClick={() => setSideOpen(false)} className="navText navColor text-center"><i className="fas fa-book mr-2" /><span>Portfolio</span></Nav.Link>
                            <Nav.Link href="#Skills" onClick={() => setSideOpen(false)} className="navText navColor text-center"><i className="fas fa-tools mr-2" /><span>Skills</span></Nav.Link>
                            <Nav.Link href="#Interests" onClick={() => setSideOpen(false)} className="navText navColor text-center"><i className="fas fa-puzzle-piece mr-2" /><span>Interests</span></Nav.Link>
                        </Scrollspy>

                    </Navbar>

                    <div className={"outsideLayer " + (isMobile && sideOpen ? "show" : "")} onClick={() => backdropClickHandler()}></div>
                </div>
            </div>
            <main>
                <section id="Home" className="content">
                    <div className="hero-container " />
                    <div className="hero d-flex align-content-center flex-column">
                        <p>Hi, I'm Clement!</p>
                        <p><span id="heroText" className="pl-4" /></p>
                    </div>
                </section>

                <section id="About" className="content">
                    <Container>

                        <Section title={"About"} />
                        <p>
                            Hi! Welcome to my webpage! This is my first forage into responsive website design so please be gentle. I'm 33 years old, living in Toronto and currently working in the I.T. field. I've been in this field for almost a decade now, and feeling too comfortable. Looking for more to do, and having many friends and family as developers, I figured I'd give software development a try! I've always been intrigued and drawn to programming since I first took a Java course in high school. Thinking it would be more useful to have some broader knowledge for jobs though, I decided to go into Electrical Engineering instead. During my university summers, I worked at a small company in their I.T. department. It was this experience that pushed me towards the I.T. field, but now I am back to what I had a passion for during high school, developing software.
                        </p>
                        <h4>Javascript Web Developer</h4>
                        <p>
                            Over the past year, I've slowly been learning Javascript. As the world becomes increasingly connected, and with everyone on their phones constantly, I figured starting at the basics would be best. Using FreeCodeCamp's excellent learning platform, I began my journey with HTML, CSS and lastly Javascript. I have since picked up the library React, and have started different projects just to get a better grip on all the new concepts, libraries, packages, and tools that I was being introduced to. Since then I have created a few projects, some that are still (and probably always will be) a work-in-progress. You can see them below in the <a href="#Portfolio">Portfolio</a> section.
                        </p>
                        <h4>
                            I.T. Technician/Administrator
                        </h4>
                        <p>
                            After getting my degree in electrical engineering, I joined the workforce as an I.T. technician and administrator. I was exposed to, and was able to work with many types of systems and software throughout the last 10 years. I am now mainly working within a Microsoft-based environment, with an increasing amount of services being hosted on Microsoft Azure. During any downtime in my workday, I try to streamline any processes that are in place, or come up with ways to make repetitive tasks less of a burden through the use of PowerShell. It really was PowerShell that got me once again into programming again. I have since been able to provide scripts and apps to my colleagues to automate tasks that we had previously had to do manually. When I had discovered the power of <b>Power</b>Shell, I started getting my colleagues to also learn it. We now have a toolkit to handle many day-to-day tasks that we come across.                      
                        </p>

                    </Container>
                </section>
                <section id="Portfolio" className="content">
                    <Container>
                        <Section title={"Portfolio"} />
                        <Projects />
                    </Container>
                </section>
                <section id="Skills" className="content">
                    <Container>
                        <Section title={"Skills"} />
                        <Row className="mb-3">
                            <Col className="skillsCol">
                                <i className="fab fa-react" />
                            </Col>
                            <Col className="skillsCol">
                                <i className="fab fa-microsoft" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className="skillsCol">
                                <i className="fab fa-js-square" />
                            </Col>

                            <Col className="skillsCol">
                                <AzureIcon />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className="skillsCol">
                                <i className="fab fa-bootstrap" />
                            </Col>
                            <Col className="skillsCol">
                                <PShellIcon />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className="skillsCol">
                                <NodeIcon />
                            </Col>
                            <Col className="skillsCol">
                                <ExchangeIcon />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className="skillsCol">
                                <i className="fab fa-npm" />
                            </Col>
                            <Col className="skillsCol">
                                <CiscoIcon />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className="skillsCol">
                                <GraphQLIcon />
                            </Col>
                            <Col className="skillsCol">
                                <MongoIcon />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="skillsCol">
                                <i className="fab fa-html5" />
                            </Col>
                            <Col className="skillsCol">
                                <i className="fab fa-css3-alt" />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="Interests" className="content">
                    <Container>
                        <Section title={"Interests"} />
                        <p>
                            While work keeps me indoors for most of my day, I try to get outside as much as possible. I am the owner of a Goldendoodle dog, Brandy, so that definitely helps with making sure I get some fresh air everyday. During the summer and fall, I'm an avid hiker, and love to get to the cottage as often as I can to swim and canoe. During the winter, I'm an intermediate skiier with hopes to take on more advanced hills!
                        </p>
                        <p>
                            While indoors, I enjoy exploring new technology whether it is fiddling with home automation, setting up security cameras, or creating websites and apps. I am also an avid home cook, always looking up new recipes to cook, or bake. I especially love to take on large group meals due to the hustle, time-management and personal responsibilty needed for a successful payoff. To relax, I either dig into some books with fantasy being my go-to genre, or watch some drama or Sci-Fi shows on TV. I also try to continue with my professional development by either working on a web-dev project or studying for a new certification.
                        </p>
                    </Container>
                </section>
            </main>
        </>
    )
}