import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import '../../App.css';
import SingleCard from '../../components/Single Card';
//dinosaurs
import dinoCardCover from '../../images/dinosaurs/dino-card-cover.jpg'
import dino1 from '../../images/dinosaurs/dino-1.jpg'
import dino2 from '../../images/dinosaurs/dino-2.jpg'
import dino3 from '../../images/dinosaurs/dino-3.jpg'
import dino4 from '../../images/dinosaurs/dino-4.jpg'
import dino5 from '../../images/dinosaurs/dino-5.jpg'
import dino6 from '../../images/dinosaurs/dino-6.jpg'
import dino7 from '../../images/dinosaurs/dino-7.jpg'
import dino8 from '../../images/dinosaurs/dino-8.jpg'
import dino9 from '../../images/dinosaurs/dino-9.jpg'
import dino10 from '../../images/dinosaurs/dino-10.jpg'
//minecraft
import minecraftCover from '../../images/minecraft/minecraft-cover.jpg'
import colorful from '../../images/minecraft/colorful.jpg'
import creeper from '../../images/minecraft/creeper.jpg'
import diamondArmor from '../../images/minecraft/diamond-armor.jpg'
import diamondOre from '../../images/minecraft/diamond-ore.jpg'
import diamonds from '../../images/minecraft/diamonds.jpg'
import enderDragon from '../../images/minecraft/ender-dragon.jpg'
import hanginOut from '../../images/minecraft/hangin-out.jpg'
import minecraftSword from '../../images/minecraft/minecraft-sword.jpg'
import pandas from '../../images/minecraft/pandas.jpg'
import portal from '../../images/minecraft/portal.jpg'
import steve from '../../images/minecraft/Steve-Sitting-Down.jpg'
import villager from '../../images/minecraft/villager.jpg'
//alphabet
import alphabetCover from '../../images/alphabet/abc-for-toddlers.jpg'
import a from '../../images/alphabet/a-card.jpg'
import b from '../../images/alphabet/b-card.jpg'
import c from '../../images/alphabet/c-card.jpg'
import d from '../../images/alphabet/d-card.jpg'
import e from '../../images/alphabet/e-card.jpg'
import f from '../../images/alphabet/f-card.jpg'
import g from '../../images/alphabet/g-card.jpg'
import h from '../../images/alphabet/h-card.jpg'
import i from '../../images/alphabet/i-card.jpg'
import j from '../../images/alphabet/j-card.jpg'
import k from '../../images/alphabet/k-card.jpg'
import l from '../../images/alphabet/l-card.jpg'
import m from '../../images/alphabet/m-card.jpg'
import n from '../../images/alphabet/n-card.jpg'
import o from '../../images/alphabet/o-card.jpg'
import p from '../../images/alphabet/p-card.jpg'
import q from '../../images/alphabet/q-card.jpg'
import r from '../../images/alphabet/r-card.jpg'
import s from '../../images/alphabet/s-card.jpg'
import t from '../../images/alphabet/t-card.jpg'
import u from '../../images/alphabet/u-card.jpg'
import v from '../../images/alphabet/v-card.jpg'
import w from '../../images/alphabet/w-card.jpg'
import x from '../../images/alphabet/x-card.jpg'
import y from '../../images/alphabet/y-card.jpg'
import z from '../../images/alphabet/z-card.jpg'


const CardGame = () => {
    const { card } = useParams();
    let cardImages;
    switch (card) {
        case 'dinosaurs':
            cardImages = [
                
                { src: dino1, matched: false, cardBack: dinoCardCover },
                { src: dino2, matched: false, cardBack: dinoCardCover },
                { src: dino3, matched: false, cardBack: dinoCardCover },
                { src: dino4, matched: false, cardBack: dinoCardCover },
                { src: dino5, matched: false, cardBack: dinoCardCover },
                { src: dino6, matched: false, cardBack: dinoCardCover },
                { src: dino7, matched: false, cardBack: dinoCardCover },
                { src: dino8, matched: false, cardBack: dinoCardCover },
                { src: dino9, matched: false, cardBack: dinoCardCover },
                { src: dino10, matched: false, cardBack: dinoCardCover }

            ]
            break;
        case 'minecraft':
            cardImages = [
                { src: colorful, matched: false, cardBack: minecraftCover },
                { src: creeper, matched: false, cardBack: minecraftCover },
                { src: diamondArmor, matched: false, cardBack: minecraftCover },
                { src: diamondOre, matched: false, cardBack: minecraftCover },
                { src: diamonds, matched: false, cardBack: minecraftCover },
                { src: enderDragon, matched: false, cardBack: minecraftCover },
                { src: hanginOut, matched: false, cardBack: minecraftCover },
                { src: minecraftSword, matched: false, cardBack: minecraftCover },
                { src: pandas, matched: false, cardBack: minecraftCover },
                { src: portal, matched: false, cardBack: minecraftCover },
                { src: steve, matched: false, cardBack: minecraftCover },
                { src: villager, matched: false, cardBack: minecraftCover }
            ]
            break;
        case 'alphabet':
            cardImages = [
                { src: a, matched: false, cardBack: alphabetCover },
                { src: b, matched: false, cardBack: alphabetCover },
                { src: c, matched: false, cardBack: alphabetCover },
                { src: d, matched: false, cardBack: alphabetCover },
                { src: e, matched: false, cardBack: alphabetCover },
                { src: f, matched: false, cardBack: alphabetCover },
                { src: g, matched: false, cardBack: alphabetCover },
                { src: h, matched: false, cardBack: alphabetCover },
                { src: i, matched: false, cardBack: alphabetCover },
                { src: j, matched: false, cardBack: alphabetCover },
                { src: k, matched: false, cardBack: alphabetCover },
                { src: l, matched: false, cardBack: alphabetCover },
                { src: m, matched: false, cardBack: alphabetCover },
                { src: n, matched: false, cardBack: alphabetCover },
                { src: o, matched: false, cardBack: alphabetCover },
                { src: p, matched: false, cardBack: alphabetCover },
                { src: q, matched: false, cardBack: alphabetCover },
                { src: r, matched: false, cardBack: alphabetCover },
                { src: s, matched: false, cardBack: alphabetCover },
                { src: t, matched: false, cardBack: alphabetCover },
                { src: u, matched: false, cardBack: alphabetCover },
                { src: v, matched: false, cardBack: alphabetCover },
                { src: w, matched: false, cardBack: alphabetCover },
                { src: x, matched: false, cardBack: alphabetCover },
                { src: y, matched: false, cardBack: alphabetCover },
                { src: z, matched: false, cardBack: alphabetCover }
            ]
            break;
        // case 'animals':
        //     cardImages = [
        //         // // { "src": colorful, matched: false },
        //         // { "src": 'https://raw.githubusercontent.com/Codechef27/one-spark/main/client/src/Games/images/minecraft/Steve-Sitting-Down.jpg', matched: false },
        //         // // { "src": pickaxe, matched: false },
        //         // // { "src": Stuart, matched: false },
        //         // // { "src": sword, matched: false },
        //         // // { "src": zombie, matched: false },
        //     ]
        //     break;
        default:
            break;
    }


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
                            return { ...card, matched: true }
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
        console.log(cards)
    }, [card])


    return (
        <div className="App">
            <h1>{card}</h1>
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

export default CardGame;