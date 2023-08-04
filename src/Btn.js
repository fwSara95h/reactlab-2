function Btn() {
    const clickHandler = () => {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        let userInput = prompt("Type a number from 1 to 4");
        alert(`Computer guess: ${randomNum}, Your number: ${userInput}`)
    }
    return (
        <button onClick={clickHandler}>
            Click Me
        </button>
    )
}

export default Btn;