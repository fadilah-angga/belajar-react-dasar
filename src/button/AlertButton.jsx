export default function AlertButton({text, message}){
    function HandleClick(e){
        console.info(e.target);
        alert(message);
    }

    return (
        <button onClick={HandleClick}>{text}</button>
    )
}