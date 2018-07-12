import React from 'react'
import {Route, Switch} from 'react-router-dom'
import SearchInputContainer from '../containers/SearchInputContainer'
import './HeaderBar.scss'

class HeaderBar extends React.Component {

    // shouldComponentUpdate(nextProps) {
    //     // return nextProps.path === this.props.path ? false : true
    // }
    //
    render() {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow mb-5">
                <div className="navbar-brand col-sm-3 col-md-2 mr-0 text-center">
                    <Switch>
                        <Route exact path="/" render={() => ('Home')}/>
                        <Route exact path="/film/:id" render={() => ('About Film')}/>
                        <Route path="/film/:id/credits" render={() => ('Credits')}/>
                        <Route path="/film/:id/reviews" render={() => ('Reviews')}/>
                        <Route path="/person" render={() => ('About Person')}/>
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