import React from 'react'

export default function Project() {
    return (
        <>
            {/*<!-- timeline item 1 -->*/}
            <div className="row no-gutters">
                <div className="col-sm">
                    {/*<!--spacer-->*/}
                </div>
                {/*<!-- timeline item 1 center dot -->*/}
                <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                    <div className="row h-50">
                        <div className="col">&nbsp;</div>
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
                {/*<!-- timeline item 1 event content -->*/}
                <div className="col-sm py-2">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="card-title m-0">Chrome Quick Notes</h4>
                            <div className="text-muted small mb-2">Aug. 2020</div>
                            <p className="card-text">Have you ever made a recipe and thought, next time I should just make this simple change? This Chrome extension will sync quick notes you take from a website to your Google account so it's available to you wherever you are! Utilizes a ContentEditable pad that will auto-sanitize your input. Animations have also been applied to provide smooth transitions between pages.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!--/row-->*/}
            {/*<!-- timeline item 2 -->*/}
            <div className="row no-gutters">
                <div className="col-sm py-2">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="card-title m-0">Codenames Online</h4>
                            <div className="small text-muted mb-2">June 2020</div>
                            <p className="card-text">An online-version of the card game, Codenames! Full stack project using Node.js to provide server-logic, MongoDB as the database, and React for the front end. Utilizes Socket.IO to provide game updates to all players.</p>
                        </div>
                    </div>
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
                <div className="col-sm">
                    {/*<!--spacer-->*/}
                </div>
            </div>
            {/*<!--/row-->*/}
            {/*<!-- timeline item 3 -->*/}
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
                <div className="col-sm py-2">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="card-title m-0">Brandy's Yelp!</h4>
                            <div className="text-muted small mb-2">March 2020</div>
                            <p>Yelp for pet-friendly places! A site where people can browse, add content, share their favourite pet-friendly places, and socialize with fellow pet-owners. Developed using GraphQL as the database, Auth0 for authentication, and React for the front end graphical interface.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!--/row-->*/}
            {/*<!-- timeline item 4 -->*/}
            <div className="row no-gutters">
                <div className="col-sm py-2">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="card-title m-0">Google Map Search</h4>
                            <div className="text-muted small mb-2">Feb. 2020</div>
                            <p>A quick site that will allow you to search for places nearby using Google's API's, and mark them on a map. It will also list results for you with relevant info and pictures provided by the response from the API. Learned more in regards to accessing API's, manipulating JSON, and parsing the returned data.</p>
                        </div>
                    </div>
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