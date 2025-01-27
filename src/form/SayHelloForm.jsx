export default function SayHelloForm() {
    function handleClick(e){
        e.preventDefault();
        const name = document.getElementById("input_form").value;
        document.getElementById("text_hello").innerText = `Hello ${name}`;
    }
    return (
        <div>
            <input type="text" id="input_form"/>
            <button onClick={handleClick}>Say Hello</button>
            <h1 id="text_hello">Hello World</h1>
        </div>
    )
}