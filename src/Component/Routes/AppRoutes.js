import React from 'react'
import {Route,BrowserRouter as Router} from 'react-router-dom'
import Page1 from './../Page1'
import Page2 from './../Page2'
function AppRoutes() {
    return (
        <div>
            <Router>
                <Route path="/" exact component={Page1} />
                <Route path="/page2" exact component={Page2} />
            </Router>
        </div>
    )
}

export default AppRoutes
