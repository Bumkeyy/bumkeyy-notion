import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notes from '../Routes/Notes';
import Note from '../Routes/Note';
import Add from '../Routes/Add';
import Edit from '../Routes/Edit';
import GlobalStyles from '../GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Notes} />
          <Route path={'/add'} component={Add} />
          <Route path={'/note/:id'} component={Note} />
          <Route path={'/edit/:id'} component={Edit} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
