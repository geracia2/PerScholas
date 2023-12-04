import {useState} from "react";

export default function Form() {
    // const [input, setInput] = useState(second)
    
    // setup a form object to capture form properties
    const [form, setForm] = useState({
        name: '',
        title: '', 
        phone: '',
        email: ''
    })

    function handleChange(e){
        // we are creating a new object so we need the spread operator and add a new object
        // setForm({...form}) this has copied our form
        // setForm({...from, newProporty: 123}) creates a new object and new prop with it
        // setForm({...form, name: e.target.value}) gets us what we want updated but will update everything, so we add a ifs
        
        // saftey to make sure our target data is coming from tthe right input field
        // if (e.target.id === 'name'){
        //     setForm({...form, name: e.target.value})
        // } else if (e.target.id === 'title'){
        //     setForm({...form, title: e.target.value})
        // } else if (e.target.id === 'phone'){
        //     setForm({...form, phone: e.target.value})
        // } else if (e.target.id === 'email'){
        //     setForm({...form, email: e.target.value})
        // }

        // to do the if conditional smaller, Computed Property name value
        // use bracket notation  to target the ID
        // no "" around target b/c it is a var not a specific string
        setForm ({...form, [e.target.id]: e.target.value})
    }

    function handleSubmit(){

    }

    return (
        <form action=''>
            <label htmlFor="name">Name: </label>
            {/* link label htmlFor to input id */}
            <input id="name" value={form.name} onChange={handleChange} />
            <br />
            <label htmlFor="title">Title: </label>
            <input id="title" value={form.title} onChange={handleChange} />
            <br />
            <label htmlFor="phone">Phone: </label>
            <input id="phone" value={form.phone} onChange={handleChange} />
            <br />
            <label htmlFor="email">Email: </label>
            <input id="email" value={form.email} onChange={handleChange} />
            <br />
            <input type="button" value="Submit" />
        </form>
    )
}