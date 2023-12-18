import { useState } from "react";

function Tateti2() {
    // Estado para representar el tablero del juego
    const [board, setBoard] = useState(Array(9).fill(""));
    
    // Estado para seguir el turno del jugador actual
    const [jugador, setJugador] = useState(1);

    // Estado para almacenar al ganador del juego (si lo hay)
    const [ganador, setGanador] = useState(null);

    // Función que maneja el clic en una celda del tablero
    function handleCellClick(index) {
        // Verifica si hay un ganador y si la celda está vacía antes de realizar la acción
        if (!ganador && board[index] === "") {
            // Copia el tablero actual
            const newBoard = [...board];
            
            // Coloca la ficha del jugador actual en la celda clickeada
            newBoard[index] = jugador === 1 ? "X" : "O";
            
            // Actualiza el tablero
            setBoard(newBoard);
            
            // Verifica si hay un ganador después de este movimiento
            checkWinner(newBoard);
            
            // Cambia al turno del siguiente jugador
            setJugador(jugador === 1 ? 2 : 1);
        }
    }

    // Función que verifica si hay un ganador
    function checkWinner(board) {
        // Define las líneas de victoria posibles en el tablero
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        // Itera sobre las líneas para verificar si algún jugador ha completado una línea
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                // Si hay un ganador, actualiza el estado correspondiente
                setGanador(jugador);
                break;
            }
        }
    }

    // Renderiza la interfaz del juego
    return (
        <>
        <div>
        <p>LE TOCA AL JUGADOR {jugador}</p>
            
            {/* Muestra un mensaje de ganador o continuación del juego */}
            {ganador ? (
                <p>¡El jugador {ganador} ha ganado!</p>
            ) : (
                <p>¡Sigue jugando!</p>
            )}
            
            {/* Renderiza el tablero */}
            <table>
                {Array(3).fill(null).map((_, row) => (
                    <tr key={row}>
                        {Array(3).fill(null).map((_, col) => {
                            const index = row * 3 + col;
                            return (
                                <td key={col} onClick={() => handleCellClick(index)}>
                                    {board[index]}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </table>
            <button
            onClick={()=>{
                setBoard(Array(9).fill(""));
                setJugador(1);
                setGanador(null);
            }}>
                REINICIAR
            </button>
        </div>
        </>
    );
}

export default Tateti2;

