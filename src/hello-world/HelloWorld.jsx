import "./HelloWorld.css"

export default function HelloWorld(){
    const props = {
        text: 'Hello World'
    }
    return (
        <>
            <HeaderHelloWorld {...props}/>
            <ParagraphHelloWorld/>
        </>
    )
}

function HeaderHelloWorld({text = 'Ups, lupa kasih text'}){

    return (
        <h1 className="title">{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld(){
    const text = 'Selamat Belajar React.JS FETZZ';
    return (
        <p className="content">{text.toLowerCase()}</p>
    )
}