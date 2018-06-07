import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './HeaderBar.scss'

class HeaderBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow mb-5">
                <div className="navbar-brand col-sm-3 col-md-2 mr-0 text-center">
                    <Switch>
                        <Route exact path="/" render={() => ('Home')}/>
                        <Route path="/film" render={() => ('Film Header')}/>
                        <Route path="/top" render={() => ('Top Rated Films')}/>
                        <Route path="/saved" render={() => ('Saved Films')}/>
                        <Route render={() => ('Page 404')}/>
                    </Switch>
                </div>

                <input type="text" className="form-control-dark form-control w-100" placeholder="Search"/>
                <button className="btn btn-secondary btn-square bg-dark h-100">Submit</button>

            </nav>
        )
    }
}

export default HeaderBar