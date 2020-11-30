import React from 'react'
import BYelp from '../Assets/BrandyYelp.PNG'
import Codenames from '../Assets/Codenames.PNG'
import GMapSearch from '../Assets/GMapSearch.PNG'
import ChromeQuickNotes from '../Assets/ChromeQuickNotes.PNG'
import Grooming from '../Assets/Booking.PNG'
import Fade from 'react-reveal/Fade'

export default function Project() {
    return (
        <>
            {/*<!-- timeline item 1 -->*/}
            <div className="row no-gutters">
            <Fade left>
                <div className="col-sm py-2">
                    <div className="card shadow">                        
                    <img class="card-img-top" src={Grooming} alt="Puppy Love Grooming" />
                        <div className="card-body">
                            <h4 className="card-title my-1">Puppy Love Grooming</h4>
                            <div className="small text-muted mb-2">Oct. 2020</div>
                            <p className="card-text">A sample-site used for a dog grooming service. Includes a Google account-integrated booking service to automatically manage appointments. Uses React for the front-end, and Node.JS for creating and managing appointments. </p>
                        </div>
                    </div>
                </div>
                </Fade>
                <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                    <div className="row h-50">
                        <div className="col border-right">&nbsp;</div>
                        <div className="col">&nbsp;</div>
                    </div>
                    <h5 className="m-2">
                        <span className="badge badge-pill border">&nbsp;</span>
                    </h5>
                    <div className="row h-50">
                        <div className="col border-right">&nbsp;</div>
                        <div className="col">&nbsp;</div>
                    </div>
                </div>
                <div className="col-sm">
                    {/*<!--spacer-->*/}
                </div>
            </div>
            {/*<!-- timeline item 2 -->*/}
            <div className="row no-gutters">
                <div className="col-sm">
                    {/*<!--spacer-->*/}
                </div>
                {/*<!-- timeline item 2 center dot -->*/}
                <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                    <div className="row h-50">
                        <div className="col border-right">&nbsp;</div>
                        <div className="col">&nbsp;</div>
                    </div>
                    <h5 className="m-2">
                        <span className="badge badge-pill border">&nbsp;</span>
                    </h5>
                    <div className="row h-50">
                        <div className="col border-right">&nbsp;</div>
                        <div className="col">&nbsp;</div>
                    </div>
                </div>
                {/*<!-- timeline item 2 event content -->*/}
                <Fade right>
                <div className="col-sm py-2">
                    <div className="card shadow">
                    <img class="card-img-top" src={ChromeQuickNotes} alt="Chrome Quick Notes" />
                        <div className="card-body">
                            <h4 className="card-title m-0">Chrome Quick Notes</h4>
                            <div className="text-muted small mb-2">Aug. 2020</div>
                            <p className="card-text">Have you ever made a recipe and thought, next time I should just make this simple change? This Chrome extension will sync quick notes you take from a website to your Google account so it's available to you wherever you are! Utilizes a ContentEditable pad that will auto-sanitize your input. Animations have also been applied to provide smooth transitions between pages.</p>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
            {/*<!--/row-->*/}
            {/*<!-- timeline item 3 -->*/}            
            <div className="row no-gutters">
            <Fade left>
                <div className="col-sm py-2">
                    <div className="card shadow">                        
                    <img class="card-img-top" src={Codenames} alt="Codenames Online" />
                        <div className="card-body">
                            <h4 className="card-title my-1"><a href="https://codenames-cn.herokuapp.com/" target="_blank" rel="noopener noreferrer">Codenames Online</a></h4>
                            <div className="small text-muted mb-2">June 2020</div>
                            <p className="card-text">An online-version of the card game, Codenames! Full stack project using Node.js to provide server-logic, MongoDB as the database, and React for the front end. Utilizes Socket.IO to provide game updates to all players.</p>
                        </div>
                    </div>
                </div>
                </Fade>
                <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                    <div className="row h-50">
                        <div className="col border-right">&nbsp;</div>
                        <div className="col">&nbsp;</div>
                    </div>
                    <h5 className="m-2">
                        <span className="badge badge-pill border">&nbsp;</span>
                    </h5>
                    <div className="row h-50">
                        <div className="col border-right">&nbsp;</div>
                        <div className="col">&nbsp;</div>
                    </div>
                </div>
                <div className="col-sm">
                    {/*<!--spacer-->*/}
                </div>
            </div>
            {/*<!--/row-->*/}
            {/*<!-- timeline item 4 -->*/}
            <div className="row no-gutters">
                <div className="col-sm">
                    {/*<!--spacer-->*/}
                </div>
                <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                    <div className="row h-50">
                        <div className="col border-right">&nbsp;</div>
                        <div className="col">&nbsp;</div>
                    </div>
                    <h5 className="m-2">
                        <span className="badge badge-pill border">&nbsp;</span>
                    </h5>
                    <div className="row h-50">
                        <div className="col border-right">&nbsp;</div>
                        <div className="col">&nbsp;</div>
                    </div>
                </div>
                <Fade right>
                <div className="col-sm py-2">
                    <div className="card shadow">                        
                    <img class="card-img-top" src={BYelp} alt="Brandy Yelp" />
                        <div className="card-body">
                            <h4 className="card-title my-1"><a href="https://byelp.herokuapp.com/" target="_blank" rel="noopener noreferrer">Brandy's Yelp!</a></h4>
                            <div className="text-muted small mb-2">March 2020</div>
                            <p>Yelp for pet-friendly places! A site where people can browse, add content, share their favourite pet-friendly places, and socialize with fellow pet-owners. Developed using GraphQL as the database, Auth0 for authentication, and React for the front end graphical interface.</p>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
            {/*<!--/row-->*/}
            {/*<!-- timeline item 5 -->*/}
            <div className="row no-gutters">
                <Fade left>
                <div className="col-sm py-2">
                    <div className="card shadow">
                            <img class="card-img-top pt-1" src={GMapSearch} alt="Google Map Search" />
                        <div className="card-body">
                            <h4 className="card-title my-1">Google Map Search</h4>
                            <div className="text-muted small mb-2">Feb. 2020</div>
                            <p>A quick site that will allow you to search for places nearby using Google's API's, and mark them on a map. It will also list results for you with relevant info and pictures provided by the response from the API. Learned more in regards to accessing API's, manipulating JSON, and parsing the returned data.</p>
                        </div>
                    </div>
                </div>
                </Fade>
                <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                    <div className="row h-50">
                        <div className="col border-right">&nbsp;</div>
                        <div className="col">&nbsp;</div>
                    </div>
                    <h5 className="m-2">
                        <span className="badge badge-pill border">&nbsp;</span>
                    </h5>
                    <div className="row h-50">
                        <div className="col">&nbsp;</div>
                        <div className="col">&nbsp;</div>
                    </div>
                </div>
                <div className="col-sm">
                    {/*<!--spacer-->*/}
                </div>
            </div>
            {/*<!--/row-->*/}
        </>
    )
}