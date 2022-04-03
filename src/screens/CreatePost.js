import React, { useState } from 'react'
import { API_BASE_URL } from '../config/constant'

function CreatePost() {

    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [loader, setLoader] = useState(false)

    const createPost = (event) => {
        setLoader(true)
        event.preventDefault();//stop the default behaviour of page reload on form submit

        fetch(`${API_BASE_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setLoader(false)
                console.log(json)
                alertFunction('Post Create Successfully!', 'success')
            }).catch((err) => {
                alertFunction('Some error occurred', 'danger')
                console.log(err)
                setLoader(false)
            })

    }

    function alertFunction(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

        var alertPlaceholder = document.getElementById('alertMsg')
        alertPlaceholder.append(wrapper)
    }

    return (
        <div className='container'>
            <h3 className='text-center text-uppercase pt-4'>Create Post</h3>
            <div id="alertMsg"></div>
            {
                loader ? <div className='col-12 text-center'>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                    :
                    <div className='mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2'>
                        <form onSubmit={(event) => { createPost(event) }}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Post Title</label>
                                <input onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" id="title" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Post Description</label>
                                <textarea onChange={(e) => { setBody(e.target.value) }} className="form-control" id="description" required></textarea>
                            </div>
                            <div className='d-grid'>
                                <button type="submit" className="btn btn-primary">Create Post</button>
                            </div>
                        </form>
                    </div>
            }
        </div>
    )
}

export default CreatePost