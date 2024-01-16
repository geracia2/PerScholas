import React from 'react'

export default function Show({ fruit, index }) {
    return (
        <div>
            <h1>Show Page</h1>
            <a href={`/fruits`}>Back</a>
            <br />
            <br />
            The {fruit.name} is {fruit.color}
            <br />
            {fruit.readyToEat ? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }
            <br /><br />
            <a href={`/fruits/${fruit._id}/edit`}>Edit</a>
            <br /><br />
            <form action={`/fruits/${fruit._id}?_method=DELETE`} method='POST'>
                <button>Delete</button>
            </form>
        </div>
    )
}