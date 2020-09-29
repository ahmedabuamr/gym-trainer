import React from "react";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Courses from "./component/pages/Courses";
import Pricings from "./component/pages/Pricing";
import Gallery from "./component/pages/Gallery";
import Blogs from "./component/pages/Blogs";
import Contact from "./component/pages/Contact";
import { Route, Switch } from "react-router-dom";

export default function MainRoute() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} />
      <Route path="/pricing" component={Pricings} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}
