import React, { useEffect, useState } from 'react';
import '../../App.css';
import SingleCard from '../../components/Single Card';
import creeper from '../../Games/images/creeper.png'
import gold from '../../Games/images/gold.png'
import pickaxe from '../../Games/images/pickaxe.png'
import Stuart from '../../Games/images/Stuart.png'
import sword from '../../Games/images/sword.png'
import zombie from '../../Games/images/zombie.png'

const cardImages = [
    { "src": creeper, matched: false },
    { "src": gold, matched: false },
    { "src": pickaxe, matched: false },
    { "src": Stuart, matched: false },
    { "src": sword, matched: false },
    { "src": zombie, matched: false },
    

]


const Minecraft = () => {

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)

    //shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
    }
    console.log(cards, turns)

    // handle a choice 
    const handleChoice = (card) => {
        console.log(card)
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    //compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                console.log('those cards match')
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                console.log('those cards do not match')
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiceOne, choiceTwo])

    console.log(cards)

    //reset choices and increase turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    //start a new game automatically 
    useEffect(() => {
        shuffleCards()
    }, [])


    return (
        <div className="App">
            <h1>Hello Minecraft</h1>
            <button onClick={shuffleCards}>New Game</button>

            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled={disabled}
                    />
                ))}
            </div>
            <p>Turns: {turns}</p>
        </div>
    )
}

export default Minecraft;