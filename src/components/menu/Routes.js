import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../main/Home';
import About from '../main/About';
import Error from '../main/Error';
import Verify from '../forms/Verify';
import Login from '../forms/Login';
import Contact from '../forms/Contactus';
import Plan from '../main/Plan';
import Documents from '../documents/Main';
import VerifierDocuments from '../documents/Verifier';
import RequesterDocuments from '../documents/Requester';
import CreateDocuments from '../documents/Create';
import LogOut from '../account/LogOut';
import Transactions from '../account/Transactions';
import Profile from '../account/Profile';
import AuthRoute from '../../utils/AuthRoute';
import Learn from '../main/Instruction';
export default class Routes extends Component{

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='content'>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path={this.props.menu.home.url} exact component={Home} />
          <Route path={this.props.menu.about.url} exact component={About} />
          <Route path={this.props.menu.verify.url} exact component={Verify} />
          <Route path={this.props.menu.login.url} exact component={Login} />
          <Route path={this.props.menu.contactus.url} exact component={Contact} />
          <Route path={this.props.menu.plan.url} exact component={Plan} />
          <Route path={this.props.menu.learn.url} exact component={Learn} />
          <AuthRoute path={this.props.menu.documents.url} exact component={Documents} />
          <AuthRoute path={this.props.menu.documentsRequester.url} exact component={RequesterDocuments} />
          <AuthRoute path={this.props.menu.documentsVerifier.url} exact component={VerifierDocuments} />
          <AuthRoute path={this.props.menu.documentsCreate.url} exact component={CreateDocuments} />
          <AuthRoute path={this.props.menu.logout.url} exact component={LogOut} />
          <AuthRoute path={this.props.menu.transactions.url} exact component={Transactions} />
          <AuthRoute path={this.props.menu.profile.url} exact component={Profile} />
          <Route component={Error}/>
        </Switch>
      </div>
    );
  }
}
