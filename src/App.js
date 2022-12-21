import './App.css';
import {Component} from "react";
import Navbar from "./components/layout/Navbar.js";
import Users from './components/users/Users.js';
import axios from "axios";

class App extends Component {
    state = {
        users: [],
        loading: false
    }

    async componentDidMount() {
        this.setState({loading: true})

        const res = await axios.get('https://api.github.com/users');

        this.setState({users: res.data, loading: false})
    }

    render() {
        return (
            <div>
                <Navbar title={"GitHub Finder"}/>
                <div className={'container'}>
                <Users users={this.state.users} />
                </div>
            </div>
        )
    }
}

export default App;
