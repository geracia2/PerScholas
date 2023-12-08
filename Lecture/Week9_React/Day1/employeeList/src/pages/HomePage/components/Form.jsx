import {useState} from "react";
let resetForm = {
    first_name: '',
    last_name: '',
    email: '', 
    avatar: ''
}

export default function Form({addEmployee}) {
    // const [input, setInput] = useState(second)
    
    // setup a form object to capture form properties
    // since we want to reset this lets put it outside as a variable
    // const [form, setForm] = useState({
    //     first_name: '',
    //     last_name: '',
    //     email: '', 
    //     avatar: ''
    // })
    let [form, setForm] = useState(resetForm)


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

    function handleSubmit(e){
    e.preventDefault();
        let newEmployee= {
            ...form, // previous forms of name, title, phone, email
            avatar: '../images/headshot4.jpeg', // adding random heashot to new ones since we are not targeting them
            id: crypto.randomUUID()
        }
        addEmployee(newEmployee)
        setForm(resetForm) // reset form on submit
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="first_name">First Name: </label>
            <input id="first_name" value={form.first_name} onChange={handleChange} />
            <br />
            <label htmlFor="last_name">Last Name: </label>
            <input id="last_name" value={form.last_name} onChange={handleChange} />
            <br />
            <label htmlFor="email">Email: </label>
            <input id="email" value={form.email} onChange={handleChange} />
            <br />
            <button>Submit</button>
        </form>
    )
}