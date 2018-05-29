import React from 'react'
import {Route, Switch} from 'react-router-dom';
import TopContent from './TopContent'
import FilmContent from './FilmContent'
import WrongRoute from './WrongRoute'
import HomeContent from "./HomeContent";

class ContentContainer extends React.Component {
    render () {
        return(
            <main className="col">
                <Switch>
                    <Route exact path="/" component={HomeContent}/>
                    <Route path="/top" component={TopContent}/>
                    <Route path="/film" component={FilmContent}/>
                    <Route component={WrongRoute}/>
                </Switch>
            </main>
        )
    }
}

export default ContentContainer