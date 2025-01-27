import Todo from "./Todo";

export default function TodoList() {
    const data = [
        {
            id: 1,
            text: "Learn HTML",
            isCompleted: true,
            // isDeleted: true
        },
        {
            id: 2,
            text: "Learn CSS",
            isCompleted: true
        },
        {
            id: 3,
            text: "Learn JavaScript",
            isCompleted: true
        },
        {
            id: 4,
            text: "Learn ReactJS",
            isCompleted: false
        },
        {
            id: 5,
            text: "Learn ReactJS Router",
            isCompleted: false
        }
    ]

    return (
        <ul>
            {data.map((todo) => 
                <Todo key={todo.id} {...todo}/>
            )}
        </ul>
    )
}