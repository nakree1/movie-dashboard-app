import React from 'react'
import {Route, Switch} from 'react-router-dom'

class HeaderBar extends React.Component {
    render() {
        return (
            <header className="row bg-success">
                <h2 className="col">
                    <div className="h1 text-center text-white">
                        <Switch>
                            <Route exact path="/" render={() => ('Home')}/>
                            <Route path="/film" render={() => ('Film header')}/>
                            <Route path="/top" render={() => ('Top Rated Films')}/>
                            <Route render={() => ('Page 404')}/>
                        </Switch>
                    </div>
                </h2>
            </header>
        )
    }
}

export default HeaderBar