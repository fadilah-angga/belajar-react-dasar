export default function SearchForm() {
    return (
        <form action="">
            <input type="text"/>
            <button onClick={(e) => {
                e.preventDefault(); // menghentikan pengiriman form dan menampilkan alert
                alert("You search")
            }}> Search </button>
        </form>
    )
}