import React, { useState } from 'react'

const Create = () => {
    const [state, setState] = useState({
        title: '',
        content: '',
        user: ''
    });
    const { title, content, user } = state
    // console.log(title,content,user)

    // function handleChange(name) {

    //     return function (event) {
    //         setState({ ...state, [name]: event.target.value });
    //     };
    // }

    const handleChange = name => event => {
        // console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });
    };
    console.log(state)
    return (

        <div className="container p-5">
            <h1>CREATE POST</h1>
            <br />
            <form>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input type="text" className="form-control" placeholder="Post title" required value={title} onChange={handleChange('title')} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Content</label>
                    <textarea type="text" className="form-control" placeholder="Write something.." required value={content} onChange={handleChange('content')} />
                </div>
                <div className="form-group">
                    <label className="text-muted">User</label>
                    <input type="text" className="form-control" placeholder="Your name" required value={user} onChange={handleChange('user')} />
                </div>
                <div>
                    <button className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    )
}

export default Create