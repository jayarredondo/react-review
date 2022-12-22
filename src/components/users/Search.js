import React, {Component} from 'react';

class Search extends Component {

    state = {
        text: ''
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        if(this.state.text === '') {
            this.props.setAlert('Please enter something', 'light')
        } else {
            this.props.searchUsers(this.state.text)
            this.setState({text: ''});        }
    }



    render() {
        const {showClear, clearUsers} = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input className='form-control my-4' type="text" name='text' placeholder='Search Users...' value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value='Search' className='mb-4 form-control btn btn-dark btn-block'/>
                </form>
                {showClear && <button onClick={clearUsers} className='btn btn-danger form-control mb-4'>Clear</button>}
            </div>
        );
    }
}

export default Search;