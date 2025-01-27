export default function({text, isCompleted}) {
    if (isCompleted) {
        return (
            <li>
                <del>{text}</del>
            </li>
        )
    } else {
        return (
            <li>{text}</li>
        )
    }
}