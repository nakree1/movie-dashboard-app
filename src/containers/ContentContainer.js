import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import ExploreContainer from './ExploreContainer'
import FilmContainer from './FilmContainer'
import SavedContainer from './SavedContainer'
import WrongRoute from '../components/WrongRoute'
import HomeContent from "../components/HomeContent"
import SearchContainer from './SearchContainer'

import './ContentContainer.scss'

class ContentContainer extends React.Component {
    render() {
        return (
            <main className="col">
                <Switch>
                    <Route exact path="/" component={HomeContent}/>

                    <Route path="/top/:page" render={(props) => <ExploreContainer {...props} type='top_rated'/>}/>
                    <Redirect from="/top" to="/top/1"/>

                    <Route path="/now/:page" render={(props) => <ExploreContainer {...props} type='now_playing'/>}/>
                    <Redirect from="/now" to="/now/1"/>

                    <Route path="/popular/:page" render={(props) => <ExploreContainer {...props} type='popular'/>}/>
                    <Redirect from="/popular" to="/popular/1"/>

                    <Route path="/upcoming/:page" render={(props) => <ExploreContainer {...props} type='upcoming'/>}/>
                    <Redirect from="/upcoming" to="/upcoming/1"/>

                    <Route path="/person/:id" render={() => <h1 className="alert-warning alert">Work In Progress...</h1>} />

                    <Route path="/film/:id" component={FilmContainer}/>
                    <Route path="/saved" component={SavedContainer}/>
                    <Route path="/search" component={SearchContainer}/>
                    <Route component={WrongRoute}/>
                </Switch>
            </main>
        )
    }
}

export default ContentContainer