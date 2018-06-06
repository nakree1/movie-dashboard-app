import React from 'react'
import {Route, Switch} from 'react-router-dom'

class HeaderBar extends React.Component {
    render() {
        return (
            <header className="row bg-success">
                    <div className="h1 text-center text-white py-2 mx-auto">
                        <Switch>
                            <Route exact path="/" render={() => ('Home')}/>
                            <Route path="/film" render={() => ('Film Header')}/>
                            <Route path="/top" render={() => ('Top Rated Films')}/>
                            <Route path="/saved" render={() => ('Saved Films')}/>
                            <Route render={() => ('Page 404')}/>
                        </Switch>
                    </div>
            </header>
        )
    }
}

export default HeaderBar