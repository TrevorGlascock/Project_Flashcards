import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Deck from "./Deck";
import NewDeck from "./NewDeck";

function Decks() {
  const { url } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${url}/new`}>
          <NewDeck />
        </Route>
        <Route path={`${url}/:deckId`}>
          <Deck />
        </Route>
        <Route>
          <h1>Not a valid URL!</h1>
        </Route>
      </Switch>
    </>
  );
}

export default Decks;
