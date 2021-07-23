import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import CheckSlice from "./task/checkSlice/CheckSlice";
import UsersCatalog from "./task/table/UsersCatalog";
// import DI from './task/DI/DI'

interface Props {}

export default function Routes({}: Props): ReactElement {
  return (
    <Switch>
      {/*   <Route exact path={["/", "/di"]} component={DI} /> */}
      <Route exact path={["/", "/table"]} component={UsersCatalog} />
      <Route exact path={["/cs"]} component={CheckSlice} />
      {/*   <Route exact path={["/", "/table"]} component={CheckSlice} /> */}
    </Switch>
  );
}
