import React, { useState, useEffect } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import Section from '../Components/Section'
import Scrollspy from 'react-scrollspy'
import Projects from './Projects'
import { ReactComponent as MenuButton } from '../Assets/menu-button-wide.svg'
import Headshot from '../Assets/Headshot.png'

export default function Home() {

    const [sideOpen, setSideOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {

        const checkWindowSize = () => setIsMobile(window.innerWidth < 768)
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
                        <img src={Headshot} className="img-fluid img-thumbnail rounded-circle" />
                        <div className="profile">
                            <h1 className="navColor">Clement Ngai</h1>
                        </div>
                        <div>
                            <i className="fab fa-github mx-2 navColor"></i>
                            <i className="fab fa-linkedin mx-2 navColor"></i>
                        </div>
                        <Scrollspy items={['About', 'Portfolio', 'Skills', 'Interests']} currentClassName="is-current">
                            <Nav.Link eventKey="link-1" href="#About" onClick={() => setSideOpen(false)} className="navText navColor mt-4"><i className="fas fa-user mr-2" /><span>About</span></Nav.Link>
                            <Nav.Link eventKey="link-2" href="#Portfolio" onClick={() => setSideOpen(false)} className="navText navColor"><i className="fas fa-book mr-2" /><span>Portfolio</span></Nav.Link>
                            <Nav.Link href="#Skills" onClick={() => setSideOpen(false)} className="navText navColor"><i className="fas fa-tools mr-2" /><span>Skills</span></Nav.Link>
                            <Nav.Link href="#Interests" onClick={() => setSideOpen(false)} className="navText navColor"><i className="fas fa-puzzle-piece mr-2" /><span>Interests</span></Nav.Link>
                        </Scrollspy>

                    </Navbar>

                    <div className={"outsideLayer " + (isMobile && sideOpen ? "show" : "")} onClick={() => backdropClickHandler()}></div>
                </div>
            </div>
            <main id="main">
                <section id="Home" className="content">
                    <div className="hero-container d-flex align-content-center justify-content-center">
                    <div className="hero">
                        {/*
                        <h1>Clement <span className="headerColor">Ngai</span></h1>
                        {isMobile ? (<><h6>416-729-8199</h6><h6>clum.ngai@gmail.com</h6></>) : (<h4>416-729-8199 | clum.ngai@gmail.com</h4>)}
                        */}
                        <p>Hi, I'm Clement - IT technician and aspiring front-end developer.</p>
                    </div>
                    </div>
                </section>

                <section id="About" className="content my-4">
                    <Container>

                        <Section title={"About"} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin non elit ut efficitur. Vestibulum quis lobortis orci. Quisque efficitur libero urna, nec tempus felis venenatis ultrices. Proin nec justo eu leo mattis tincidunt nec in ligula. Cras viverra dignissim turpis, et viverra ipsum porta id. Suspendisse at tempus eros. In hac habitasse platea dictumst. Sed pharetra risus a commodo dignissim.
                        </p>
                        <h4>Javascript Web Developer</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia efficitur nisl eget efficitur. Maecenas elit ex, mollis eget congue et, lobortis quis sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nisi eu sapien vehicula sagittis. Suspendisse potenti. Vestibulum viverra consequat sapien ut tempus. Donec sed tellus vitae tellus condimentum molestie. Etiam consectetur tortor et nibh volutpat, nec pretium lectus auctor. Vivamus consectetur magna ut tristique iaculis. Suspendisse tincidunt orci laoreet enim interdum sodales. Curabitur id finibus magna, nec suscipit lorem. Proin lacinia interdum orci eu laoreet.
                        </p>
                        <h4>
                            I.T. Technician
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non massa semper, euismod nibh ac, consectetur urna. Curabitur finibus cursus arcu, non tincidunt nisi venenatis in. Phasellus elementum, magna ac posuere dapibus, nibh elit eleifend risus, id consequat neque felis id lorem. Quisque ullamcorper venenatis est, sed tempor nunc mattis a. Phasellus pellentesque diam id magna molestie venenatis. In facilisis finibus orci at luctus. Duis sed arcu vitae sapien egestas varius sit amet vel massa. Curabitur aliquet arcu quis libero commodo, ac egestas dolor tempus. Proin ac hendrerit est. Vivamus finibus eget ante quis cursus. Duis sagittis quam vestibulum, tristique augue quis, luctus ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum nunc massa, maximus non laoreet at, vestibulum id erat.

                            Morbi lobortis, lacus in sagittis pulvinar, neque lectus porttitor turpis, quis placerat sem leo eget velit. Vivamus at neque malesuada, lobortis sapien sed, faucibus purus. Sed elementum quam sit amet aliquet commodo. Praesent euismod eleifend diam, quis mattis est blandit et. Cras sed feugiat enim. Maecenas mollis felis dictum ante faucibus malesuada eget ullamcorper magna. Donec iaculis non massa vel mattis.
                        </p>

                    </Container>
                </section>
                <section id="Portfolio" className="content my-4">
                    <Container>
                        <Section title={"Portfolio"} />
                        <Projects />
                    </Container>
                </section>
                <section id="Skills" className="content my-4">
                    <Container>
                        <Section title={"Skills"} />
                    </Container>
                </section>
                <section id="Interests" className="content mt-4">
                    <Container>
                        <Section title={"Interests"} />
                        <Row className="mb-2">
                            <Col>
                                <i className="fas fa-chevron-right" />
                            </Col>
                            <Col>
                                <i className="fas fa-chevron-right" />
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col>
                                <i className="fas fa-chevron-right" />
                            </Col>
                            <Col>
                                <i className="fas fa-chevron-right" />
                            </Col>
                        </Row>
                        <Row className="">
                            <Col>
                                <i className="fas fa-chevron-right" />
                            </Col>
                            <Col>
                                <i className="fas fa-chevron-right" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}