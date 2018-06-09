import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import TopContainer from './TopContainer'
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
                    <Route path="/top/:page" component={TopContainer}/>
                    <Redirect from="/top" to="/top/1"/>
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