function Btn() {
    const clickHandler = () => alert("CLICKED");
    return (
        <button onClick={clickHandler}>
            Click Me
        </button>
    )
}

export default Btn;