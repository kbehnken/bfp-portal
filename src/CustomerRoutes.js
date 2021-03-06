import React from "react";
import { Switch, Route } from "react-router-dom";

import CustomerDashboard from "./Components/Customer/CustomerDashboard";
import ResetPasswordForm from "./Components/ResetPasswordForm";
import AtAGlance from "./Components/Customer/AtAGlance";
import ViewServiceDetail from "./Components/Customer/ViewServiceDetail";
import ViewInvoiceDetail from "./Components/Customer/ViewInvoiceDetail";

export default (
  <Switch>
    {/* <Route path="Logout" component={Header}/> */}
    <Route exact path="/" component={CustomerDashboard}/>
    <Route path="/reset-password" component={ResetPasswordForm}/>
    <Route path="/at-a-glance" component={AtAGlance}/>
    <Route path="/view-service-detail" component={ViewServiceDetail}/>
    <Route path="/view-invoice-detail" component={ViewInvoiceDetail}/>
  </Switch>
);