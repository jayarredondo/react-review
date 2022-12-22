import './App.css';
import React, {Component} from "react";
import Navbar from "./components/layout/Navbar.js";
import Users from './components/users/Users.js';
import About from './components/views/About.js'
import axios from "axios";
import Search from "./components/users/Search.js";
import Alert from "./components/layout/Alert";
import {BrowserRouter, Route, Routes} from "react-router-dom";

class App extends Component {
    state = {
        users: [],
        loading: false,
        alert: null
    }

    searchUsers = async (text) => {
        this.setState({loading: true});
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({users: res.data.items, loading: false})

    }

    clearUsers = () => this.setState({users: [], loading: false})

    setAlert = (message, type) => {
        this.setState({alert: {message, type}})
        setTimeout(() => {
            this.setState({alert: null})
        }, 5000)
    }

    render() {
        const {users, loading} = this.state;
        return (
            <BrowserRouter>
                <div>
                    <Navbar title={"GitHub Finder"}/>
                    <div className={'container'}>
                        <Alert alert={this.state.alert}/>
                        <Routes>
                            <Route exact path='/' element={
                                <React.Fragment>
                                    <Search clearUsers={this.clearUsers} searchUsers={this.searchUsers} showClear={users.length > 0}
                                            setAlert={this.setAlert}/>
                                    <Users users={users} loading={loading}/>
                                </React.Fragment>
                            } />
                            <Route exact path='/about' element={ <About /> }/>
                        </Routes>

                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
