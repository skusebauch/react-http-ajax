import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
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
                  to="/"
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
        {/*<Switch>*/}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
        <Route path="/posts/:id" exact component={FullPost} />
        {/*</Switch>*/}
      </div>
    );
  }
}

export default Blog;
