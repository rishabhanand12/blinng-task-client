import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Header from "./Header";
import Detail from "./Detail";

class App extends React.Component {
  state = {
    images: null,
  };
  async componentDidMount() {
    try {
      let url = "http://localhost:5000/api/banner";
      let req = await fetch(url);
      if (req.status === 200) {
        let response = await req.json();
        this.setState({
          images: response.data,
        });
      }
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home images={this.state.images} />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/images/:id">
            <Detail />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
