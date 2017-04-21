import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MT from './MaterialTest';
import NotFound from './notfound';
import l1 from './levels/l1';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/mt" component={MT}/>
        <Route exact path="/l1" component={l1}/>
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
