import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import '../../App.css';
import SingleCard from '../../components/Single Card';
// import Records from '../Records'
import { Button, Modal} from 'react-bootstrap'

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
// import dino10 from '../../images/dinosaurs/dino-10.jpg'
//minecraft
import minecraftCover from '../../images/minecraft/minecraft-cover.jpg'
import colorful from '../../images/minecraft/colorful.jpg'
import creeper from '../../images/minecraft/creeper.jpg'
import diamondArmor from '../../images/minecraft/diamond-armor.jpg'
// import diamondOre from '../../images/minecraft/diamond-ore.jpg'
// import diamonds from '../../images/minecraft/diamonds.jpg'
import enderDragon from '../../images/minecraft/ender-dragon.jpg'
import hanginOut from '../../images/minecraft/hangin-out.jpg'
import minecraftSword from '../../images/minecraft/minecraft-sword.jpg'
// import pandas from '../../images/minecraft/pandas.jpg'
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
// import j from '../../images/alphabet/j-card.jpg'
// import k from '../../images/alphabet/k-card.jpg'
// import l from '../../images/alphabet/l-card.jpg'
// import m from '../../images/alphabet/m-card.jpg'
// import n from '../../images/alphabet/n-card.jpg'
// import o from '../../images/alphabet/o-card.jpg'
// import p from '../../images/alphabet/p-card.jpg'
// import q from '../../images/alphabet/q-card.jpg'
// import r from '../../images/alphabet/r-card.jpg'
// import s from '../../images/alphabet/s-card.jpg'
// import t from '../../images/alphabet/t-card.jpg'
// import u from '../../images/alphabet/u-card.jpg'
// import v from '../../images/alphabet/v-card.jpg'
// import w from '../../images/alphabet/w-card.jpg'
// import x from '../../images/alphabet/x-card.jpg'
// import y from '../../images/alphabet/y-card.jpg'
// import z from '../../images/alphabet/z-card.jpg'

//princesses
import princessCover from '../../images/princesses/cover-princess.jpg'
import ariel from '../../images/princesses/Ariel.jpg'
// import aurora from '../../images/princesses/Aurora.jpg'
import belle from '../../images/princesses/Belle.jpg'
import elsa from '../../images/princesses/elsa.jpg'
import jasmine from '../../images/princesses/Jasmine.jpg'
import merida from '../../images/princesses/Merida.jpg'
import pocahontas from '../../images/princesses/Pocahontas.jpg'
import rapunzel from '../../images/princesses/Rapunzel.jpg'
import raya from '../../images/princesses/Raya.jpg'
import tiana from '../../images/princesses/tiana.jpg'

//minions
// import djminion from '../../images/minions/dj-minions.jpg'
import jelli from '../../images/minions/jelli-taste.jpg'
import cupcake from '../../images/minions/minion-cupcake.jpg'
import iluvgru from '../../images/minions/minion-ilovegruhat.jpg'
import laughing from '../../images/minions/minion-laughing.jpg'
import nogood from '../../images/minions/minion-uptonogood.jpg'
import group from '../../images/minions/minions-cover.jpg'
import minionCover from '../../images/minions/minions-group.jpg'
import party from '../../images/minions/minions-party.jpg'
import number1 from '../../images/minions/number1-dad.jpg'
import worker from '../../images/minions/worker-minions.jpg'

//numbers

import coverNumber from '../../images/numbers/colorful-number-cover.jpg'
import one from '../../images/numbers/one.jpg'
import two from '../../images/numbers/two.jpg'
import three from '../../images/numbers/three.jpg'
import four from '../../images/numbers/four.jpg'
import five from '../../images/numbers/five.jpg'
import six from '../../images/numbers/six.jpg'
import seven from '../../images/numbers/seven.jpg'
import eight from '../../images/numbers/eight.jpg'
import nine from '../../images/numbers/nine.jpg'
import Confetti from '../../components/Confetti';
// import ten from '../../images/numbers/ten.jpg'



const CardGame = () => {
    const { card } = useParams();
    let cardImages;
    switch (card) {
        case 'Dinosaurs':
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
                // { src: dino10, matched: false, cardBack: dinoCardCover }

            ]
            break;
        case 'Minecraft':
            cardImages = [
                { src: colorful, matched: false, cardBack: minecraftCover },
                { src: creeper, matched: false, cardBack: minecraftCover },
                { src: diamondArmor, matched: false, cardBack: minecraftCover },
                // { src: diamondOre, matched: false, cardBack: minecraftCover },
                // { src: diamonds, matched: false, cardBack: minecraftCover },
                { src: enderDragon, matched: false, cardBack: minecraftCover },
                { src: hanginOut, matched: false, cardBack: minecraftCover },
                { src: minecraftSword, matched: false, cardBack: minecraftCover },
                // { src: pandas, matched: false, cardBack: minecraftCover },
                { src: portal, matched: false, cardBack: minecraftCover },
                { src: steve, matched: false, cardBack: minecraftCover },
                { src: villager, matched: false, cardBack: minecraftCover }
            ]
            break;
        case 'Alphabet':
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
                // { src: j, matched: false, cardBack: alphabetCover },
                // { src: k, matched: false, cardBack: alphabetCover },
                // { src: l, matched: false, cardBack: alphabetCover },
                // { src: m, matched: false, cardBack: alphabetCover },
                // { src: n, matched: false, cardBack: alphabetCover },
                // { src: o, matched: false, cardBack: alphabetCover },
                // { src: p, matched: false, cardBack: alphabetCover },
                // { src: q, matched: false, cardBack: alphabetCover },
                // { src: r, matched: false, cardBack: alphabetCover },
                // { src: s, matched: false, cardBack: alphabetCover },
                // { src: t, matched: false, cardBack: alphabetCover },
                // { src: u, matched: false, cardBack: alphabetCover },
                // { src: v, matched: false, cardBack: alphabetCover },
                // { src: w, matched: false, cardBack: alphabetCover },
                // { src: x, matched: false, cardBack: alphabetCover },
                // { src: y, matched: false, cardBack: alphabetCover },
                // { src: z, matched: false, cardBack: alphabetCover }
            ]
            break;
        case 'Princesses':
            cardImages = [
                { src: ariel, matched: false, cardBack: princessCover },
                // { src: aurora, matched: false, cardBack: princessCover },
                { src: belle, matched: false, cardBack: princessCover },
                { src: elsa, matched: false, cardBack: princessCover },
                { src: jasmine, matched: false, cardBack: princessCover },
                { src: merida, matched: false, cardBack: princessCover },
                { src: pocahontas, matched: false, cardBack: princessCover },
                { src: rapunzel, matched: false, cardBack: princessCover },
                { src: raya, matched: false, cardBack: princessCover },
                { src: tiana, matched: false, cardBack: princessCover }
            ]
            break;

        case 'Minions':
            cardImages = [
                // { src: djminion, matched: false, cardBack: minionCover },
                { src: jelli, matched: false, cardBack: minionCover },
                { src: number1, matched: false, cardBack: minionCover },
                { src: group, matched: false, cardBack: minionCover },
                { src: iluvgru, matched: false, cardBack: minionCover },
                { src: cupcake, matched: false, cardBack: minionCover },
                { src: party, matched: false, cardBack: minionCover },
                { src: laughing, matched: false, cardBack: minionCover },
                { src: nogood, matched: false, cardBack: minionCover },
                { src: worker, matched: false, cardBack: minionCover }
            ]
            break;
        case 'Numbers':
            cardImages = [
                { src: one, matched: false, cardBack: coverNumber },
                { src: two, matched: false, cardBack: coverNumber },
                { src: three, matched: false, cardBack: coverNumber },
                { src: four, matched: false, cardBack: coverNumber },
                { src: five, matched: false, cardBack: coverNumber },
                { src: six, matched: false, cardBack: coverNumber },
                { src: seven, matched: false, cardBack: coverNumber },
                { src: eight, matched: false, cardBack: coverNumber },
                { src: nine, matched: false, cardBack: coverNumber },
                // { src: ten, matched: false, cardBack: coverNumber }
            ]
            break;
        default:
            break;
    }

    // const chooseSome () => {
    //     card.Alphabet =
    //     cardImages[Math.floor(Math.random)]

    // }

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [bestTurns, setBestTurns] = useState(
        JSON.parse(localStorage.getItem("bestTurns")) || Number.POSITIVE_INFINITY
    );

    const handleClose = () => {
        setShowModal(false)
        shuffleCards()
    }
    
    const handleShow = () => setShowModal(true);


    //shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

            // if (card === 'Alphabet') {
            //     const alphCards = [...cardImages, ...cardImages]
            //     .sort(() => Math.random() - 0.5)
            //     .map((card) => ({ ...card, id: Math.random() }))
            //    const doubleCards = [alphCards.length = 9]
            //     setCards(doubleCards)
            // }
         

        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
    
    }

     //if all cards are matched then win--  get 10 points and option to play again/next level
     
    const toggleEndGame = () => {
        const matchedData = (cards.filter(card => card.matched === false));
        if (Object.keys(matchedData).length === 0) {
            handleShow();
            const highScore = Math.min(turns, bestTurns);
            setBestTurns(highScore);
            localStorage.setItem("bestTurns", highScore);
       }
    }

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
    
    useEffect(() => {
        toggleEndGame();
    })
      
        //reset choices and increase turn
        const resetTurn = () => {
            setChoiceOne(null)
            setChoiceTwo(null)
            setTurns((turns) => turns + 1)
            setDisabled(false)
            setShowModal(false)
        }
       //start a new game automatically 
       useEffect(() => {
        shuffleCards()
        setShowModal(false)
    }, [card] )

    //level 1- 6 cards/level 2- 10/level 3- 14 /add 10 sparks for each win



    //if turns ===45 then game over ---- this is on line 312
    // else win/confetti ---needs set timeout 
    // score/record keeping with mutation 


    return (

      <div className="App">
        <h1>{card}</h1>
        <button onClick={shuffleCards}>New Game</button>
        {turns === 45 ? (
          <h1>Game Over, play again?</h1>
        ) : (
          <div className="card-grid">
            {cards.map((card) => (
              <SingleCard
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled}
              />
            ))}
          </div>
        )}
        <p className="turns">Turns: {turns}</p>
        {localStorage.getItem("bestTurns") && (
            <div>
              <span className="bold">Best Score:</span> {bestTurns}
        </div>)}
        {showModal ? (
        <> 
          {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button> */}

          <Modal show={showModal} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title className='text-dark'>Hurray! you completed {card}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-dark'>
              You completed {card} in {turns} moves. Your best score is {bestTurns} moves
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Save Score
              </Button>
            </Modal.Footer>
          </Modal>
        
        </>
        ) : null }
      </div>
    );

}

export default CardGame;