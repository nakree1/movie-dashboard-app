import React from 'react'
import {Route, Switch} from 'react-router-dom'
import SearchInputContainer from '../containers/SearchInputContainer'
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
                        <Route path="/now" render={() => ('Now Playing Films')}/>
                        <Route path="/upcoming" render={() => ('Upcoming Films')}/>
                        <Route path="/popular" render={() => ('Popular Films')}/>
                        <Route path="/saved" render={() => ('Saved Films')}/>
                        <Route path="/search" render={() => ('Search')}/>
                        <Route render={() => ('Page 404')}/>
                    </Switch>
                </div>
                <Route component={SearchInputContainer}/>
            </nav>
        )
    }
}

export default HeaderBar