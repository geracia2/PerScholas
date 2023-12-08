import { useRef } from "react"
import Random from '../utility/Random'


export default function Form({ addEmployee }) {

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const emailRef = useRef(null)

    function handleSubmit(e) {
        e.preventDefault()

        let employee = {
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            email: emailRef.current.value,
            avatar: `./images/headshot${Random(0, 9)}.jpeg`,
            color: `rgb(${Random(0, 255)}, ${Random(0, 255)}, ${Random(0, 255)})`,
            id: crypto.randomUUID()
        }

        console.log(employee)

        firstNameRef.current.value = ''
        lastNameRef.current.value = ''
        emailRef.current.value = ''

        addEmployee(employee)
    }

    // console.log('render')

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name: </label>
            <input id="name" ref={firstNameRef} />

            <label htmlFor="title">Title: </label>
            <input id="title" ref={lastNameRef} />

            <label htmlFor="email">Email: </label>
            <input id="email" ref={emailRef} />

            <button>Submit</button>
        </form>
    )
}