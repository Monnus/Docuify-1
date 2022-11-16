import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/menu/Header";
import Routes from "./components/menu/Routes";
import Footer from "./components/menu/Footer";
import menu from "./constants/menu";
import web3 from "./constants/web3";
import contracts from "./constants/contracts";
import Loader from "./components/common/Loader";
import logo from "../src/assets/images/logo_3-removebg-preview.png";
// import logo from '../../ ../../../assets/images/logo_3-removebg-preview.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: menu.routes,
      loader: true,
    };
  }

  componentDidCatch(error, info) {
    // TODO toast error
    console.log(error, info);
  }

  componentWillMount() {
    // contracts and web3 instances for component level usage. in components use constants/web3 and constants/contracts
    Promise.all([web3.init(), contracts.init()])
      .then(() => {
        this.setState({ loader: false });
      })
      .catch(() => {
        // TODO toast error
        // this.setState({loader: true});
      });
  }
  render() {
    if (this.state.loader) return <Loader />;
    return (
      <Router>
        <div className="body">
          <div
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "row",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#F7F6F2",
                width: 250,
                height: "100%",
              }}
            >
              <div
                style={{
                  flex: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={logo} height={"120px"} alt="logo" />
              </div>
              <div style={{ flex: 4 }}>
                <Header />
              </div>
            </div>
            <div style={{ flex: 4, height: "100%", display: 'flex', flexDirection: 'column' }}>
              <div style={{height: 80, backgroundColor: '#F7F6F2'}}>
                main
              </div>
              <div className="mainBottomContent">
                <Routes menu={this.state.routes} />
              </div>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </Router>
    );
  }
}
