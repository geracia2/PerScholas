import Item from "./Item";
export default function List(props) {
    return (
        <>
        <ul>
          {todos.map((item, index)=>(
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </>
    );
}
