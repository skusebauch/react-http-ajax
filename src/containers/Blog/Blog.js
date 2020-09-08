import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
//import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../hoc/asyncComponent";

const AsyncNewPost = asyncComponent(() => import("./NewPost/NewPost"));

class Blog extends Component {
  state = {
    auth: true,
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                {/* default className is active can also use activeStyle the same like inline style */}
                <NavLink
                  activeClassName="nav-active"
                  to="/posts"
                  exact
                  activeStyle={{
                    color: "#C1FF00",
                    textDecoration: "underline",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/new-post"
                  exact
                  activeClassName="nav-active"
                  activeStyle={{
                    color: "#C1FF00",
                    textDecoration: "underline",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/*<Route path="/" exact render={() => <h1>Home</h1>} />*/}
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" exact component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Access denied - You need to Login</h1>} />
          {/*<Redirect from="/" to="/posts" />*/}
        </Switch>
      </div>
    );
  }
}

export default Blog;
