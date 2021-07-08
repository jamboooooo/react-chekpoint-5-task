import { useState } from "react";

function Detective() {
    const [sherlok, setSherlok] = useState('психопат')

    const handleClick= () => {
        setSherlok('высокоактивный социопат')
    }

    return <>
        <h1>Шерлок - {sherlok}</h1>
        <button onClick={()=> handleClick()}
        >Узнать правду</button>
    </>
}

export default Detective