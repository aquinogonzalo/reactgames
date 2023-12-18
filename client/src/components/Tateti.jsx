import { useState } from "react"

function Tateti() {
    //Elecciones
    const [election1, setElection1] = useState("")
    const [election2, setElection2] = useState("")
    const [election3, setElection3] = useState("")
    const [election4, setElection4] = useState("")
    const [election5, setElection5] = useState("")
    const [election6, setElection6] = useState("")
    const [election7, setElection7] = useState("")
    const [election8, setElection8] = useState("")
    const [election9, setElection9] = useState("")
    const [jugador, setJugador] = useState(1)

    function getJugador() {
        if (jugador === 1) {
            setJugador(2)
        } else {
            setJugador(1)
        }
    }

    function getElection1() {
        if (election1 === "") {
            if (jugador === 1) {
                setElection1("X")
            } else {
                setElection1("O")
            }
        }
    }

    function getElection2() {
        if (election2 === "") {
            if (jugador === 1) {
                setElection2("X")
            } else {
                setElection2("O")
            }
        }
    }
    function getElection3() {
        if (election3 === "") {
            if (jugador === 1) {
                setElection3("X")
            } else {
                setElection3("O")
            }
        }
    }
    function getElection4() {
        if (election4 === "") {
            if (jugador === 1) {
                setElection4("X")
            } else {
                setElection4("O")
            }
        }
    }
    function getElection5() {
        if (election5 === "") {
            if (jugador === 1) {
                setElection5("X")
            } else {
                setElection5("O")
            }
        }
    }
    function getElection6() {
        if (election6 === "") {
            if (jugador === 1) {
                setElection6("X")
            } else {
                setElection6("O")
            }
        }
    }
    function getElection7() {
        if (election7 === "") {
            if (jugador === 1) {
                setElection7("X")
            } else {
                setElection7("O")
            }
        }
    }
    function getElection8() {
        if (election8 === "") {
            if (jugador === 1) {
                setElection8("X")
            } else {
                setElection8("O")
            }
        }
    }
    function getElection9() {
        if (election9 === "") {
            if (jugador === 1) {
                setElection9("X")
            } else {
                setElection9("O")
            }
        }
    }
    


    return (
        <>
            <div>
                <p>LE TOCA AL JUGADOR {jugador}</p>
                <table onClick={getJugador}>
                    <tr>
                        <td onClick={getElection1}> {election1} </td>
                        <td onClick={getElection2}> {election2} </td>
                        <td onClick={getElection3}> {election3} </td>
                    </tr>
                    <tr>
                        <td onClick={getElection4}> {election4} </td>
                        <td onClick={getElection5}> {election5} </td>
                        <td onClick={getElection6}> {election6} </td>
                    </tr>
                    <tr>
                        <td onClick={getElection7}> {election7} </td>
                        <td onClick={getElection8}> {election8} </td>
                        <td onClick={getElection9}> {election9} </td>
                    </tr>
                </table>
                <button
                onClick={()=>{
                    setElection1("")
                    setElection2("")
                    setElection3("")
                    setElection4("")
                    setElection5("")
                    setElection6("")
                    setElection7("")
                    setElection8("")
                    setElection9("")
                    setJugador(1)
                }}>
                    REINICIAR
                </button>
            </div>
        </>
    )
}
export default Tateti