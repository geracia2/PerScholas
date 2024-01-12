import React from 'react'

export default function Show({ item, index }) {
// export default function Show(props) {

    return (
        <div>
            <h1>Show Page</h1>
            The {item.name} is {item.color}
            <br />
            {item.readyToEat ? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }
            <br /><br />
            <a href={`/items/${index}/edit`}>Edit</a>
            <br /><br />
            <form action={`/items/${index}?_method=DELETE`} method='POST'>
                <button>Delete</button>
            </form>
        </div>
    )
}