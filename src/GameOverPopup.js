import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

/*
    Modal Popup to show result and ask to save the game
*/

export default function GameOverPopup({ gameOverPopup, currentGuessNum, result, handleSave, handleReset, currentPlayer, handlePlayer, history, searchHistory }) {
    const [key, setKey] = useState('gameover');


    function convertDate(epochdate) {
        if (epochdate != 0 && epochdate != 1122334455) {
            let date = new Date(parseInt(epochdate) * 1000);
            console.log(epochdate)
            console.log(date);
            return date;
        } else {
            return "";
        }

    }

    return (
        <div>
            <Modal show={gameOverPopup}>
                <ModalBody>
                    <Tabs
                        id="game-over-tabs"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3">
                        {console.log(history)}
                        <Tab eventKey="gameover" title="Game Over">
                            <h2>{result}</h2>
                            <p>Number of Guesses: {currentGuessNum - 1}</p>
                            <p>
                                <label>Enter Username: </label>
                                <input
                                    type="text"
                                    id="username1"
                                    value={currentPlayer}
                                    onChange={handlePlayer} />
                            </p>
                            <p><button onClick={handleSave} className='btn btn-outline-success'>Save</button> <button onClick={handleReset} className='btn btn-outline-danger'>Reset</button></p>
                        </Tab>
                        <Tab eventKey="history" title="History">
                            <p>
                                <label>Enter Username: </label>
                                <input
                                    type="text"
                                    id="username2"
                                    value={currentPlayer}
                                    onChange={handlePlayer} /> <button className='btn btn-outline-success' onClick={searchHistory}>Search</button></p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Play Date</th>
                                        <th>Word</th>
                                        <th>Guesses</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {history.map((m) =>
                                        <tr>
                                            <td>{m.playDate}</td>
                                            <td>{m.word}</td>
                                            <td>{m.guesses.join(" ")}</td>
                                        </tr>

                                    )}
                                </tbody>
                            </table>
                        </Tab>
                    </Tabs>

                </ModalBody>
            </Modal>
        </div>
    )
}