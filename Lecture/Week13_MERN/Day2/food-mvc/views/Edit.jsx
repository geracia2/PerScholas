import React from 'react'

export default function Edit({ fruit, index }) {
  
  return (
    <div>
      <h1>Edit Fruit page</h1>
      <form
        action={`/fruits/${index}?_method=PUT`}
        method="POST"
      >
        Name: <input defaultValue={fruit.name} type="text" name="name" />
        <br />
        <br />
        Color: <input defaultValue={fruit.color} type="text" name="color" />
        <br />
        <br />
        Is Ready To Eat: <input defaultChecked={fruit.readyToEat} type="checkbox" name="readyToEat" />
        <br />
        <br />
        <input type="submit" name="" value="Update Fruit" />
      </form>
    </div>
  )
}
