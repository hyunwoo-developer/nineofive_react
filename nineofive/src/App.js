import React from "react";
import Navbar from "./components/common/NavbarComponent";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Board from "./pages/Board";
import Gallery from "./pages/Gallery";
import Todos from "./pages/Todos";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <header>
                <Navbar />
            </header>
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/board" component={Board} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/todos" component={Todos} />

                    {/* <Route component={PageNotFound} */}
                </Switch>
            </main>
        </Router>
    );
}

export default App;
