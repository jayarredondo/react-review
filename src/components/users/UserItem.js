import React from 'react';

const UserItem = ({user}) => {
    const {avatar_url, login, html_url} = user;
        return (
            <div className="card">
                <img src={avatar_url} className="card-img-top" alt="github profile avatar" />
                    <div className="card-body">
                        <h5 className="card-title text-center">{login}</h5>
                        <div className="d-flex justify-content-center">
                        <a href={html_url} className="btn btn-danger">More</a>
                        </div>
                    </div>
            </div>
        )
}
export default UserItem;