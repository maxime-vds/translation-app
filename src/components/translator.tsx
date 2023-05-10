import React, { useState, useEffect } from "react";

const WORDS= [
    { french:"pain", english: "bread" },
    { french:"nain de jardin", english: "garden gnome" },
    { french:"oeuf", english: "egg" },
    { french:"buisson", english: "bush" },
    { french:"chapeau", english: "hat" },
    { french:"musique", english: "music" },
    { french:"biscuit", english: "cookie" },
    { french:"maison", english: "home" },
    { french:"conduire", english: "drive" },
    { french:"avion", english: "airplane" },
    { french:"chat", english: "cat" },
    { french:"chien", english: "dog" },
    { french:"portefeuille", english: "wallet" },
    { french:"voiture", english: "car" },
    { french:"travail", english: "work" },
    { french:"code", english: "code" },
    { french:"chaussures", english: "shoes" },
    { french:"arbre", english: "tree" },
    { french:"table", english: "table" },
    { french:"acheter", english: "buy" },
    { french:"louer", english: "rent" },
    { french: "pomme", english: "apple" },
    { french: "livre", english: "book" },
    { french: "chaise", english: "chair" },
    { french: "crayon", english: "pencil" },
    { french: "montagne", english: "mountain" },
    { french: "ordinateur", english: "computer" },
    { french: "stylo", english: "pen" },
    { french: "papillon", english: "butterfly" },
    { french: "café", english: "coffee" },
    { french: "bateau", english: "boat" },
    { french: "lumière", english: "light" },
    { french: "souris", english: "mouse" },
    { french: "téléphone", english: "phone" },
    { french: "manteau", english: "coat" },
    { french: "plage", english: "beach" },
    { french: "jour", english: "day" },
    { french: "étoile", english: "star" },
    { french: "lune", english: "moon" },
    { french: "montre", english: "watch" },
    { french: "piano", english: "piano" },
    { french: "télévision", english: "television" },
    { french: "vélo", english: "bike" },
    { french: "arc-en-ciel", english: "rainbow" },
    { french: "ballon", english: "balloon" },
    { french: "banane", english: "banana" },
];

function Translate () {

const [word, setWord] = useState <{french:string, english:string}> ({french:"", english:""});
const [answer, setAnswer] = useState ("");
const [resultMessage, setResultMessage] = useState ("");   
const [score, setScore] =useState(0); /**ad the score increment */

useEffect (()=> {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
        if ("french" in randomWord && "english" in randomWord) {
            setWord(randomWord);
        } else {
            console.error("Invalid word:", randomWord);
        }    

},[]);

function verifyAnswer (){
    
    if(answer.toLowerCase() === word.english.toLowerCase()){
        setResultMessage("Correct !!!");
        setScore((prevScore)=> prevScore + 1) /**ad a point when the answer is true */
    } else {
        setResultMessage("Incorrect, the correct answer is " + word.english + " !!!");
        
    }
    
    setAnswer("");

    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    if ("french" in randomWord && "english" in randomWord) {
        setWord(randomWord);
    } else {
        console.error("Invalid word:", randomWord);
    }

    setTimeout(() => {
        setResultMessage("");
      }, 2000); 
   
}


function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
        verifyAnswer();
    }
}

function resetGame() {
    setScore(0);
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    if ("french" in randomWord && "english" in randomWord) {
      setWord(randomWord);
    } else {
      console.error("Invalid word:", randomWord);
    }
    alert("game has been reset!")
  }


return (
  

        <div className="flex flex-col items-center pt-6 pb-7 p-6 border-4 border-solid border-turquoise rounded-xl bg-bleu">
                <div className="p-1 border border-solid border-white rounded-full bg-bleu"> 
                    <p className="px-5 text-2xl text-white bg-turquoise border border-solid border-black rounded-full "> 
                        Score: {score}
                    </p>
                </div>
                <h4 className="py-5 font-bold text-white"> Translate this word French to English</h4>
                    <p className="border border-solid border-black bg-gray py-2 px-20 rounded-xl">
                        {word.french}
                    </p>
            <input type="text" 
                className="m-2 p-2 border border-solid border-black rounded-md"
                value={answer} 
                onChange={(event)=> setAnswer(event.target.value)} 
                onKeyDown={handleKeyPress}
            />
            <div className="pt-5">
                <button 
                onClick={verifyAnswer}
                className="border border-solid border-blue bg-gold rounded-full px-3 hover:bg-goldone md:text-xl md:px-3">
                    Validate
                </button>
            </div>
            
            <p>{resultMessage}</p>

            
            <div className="pt-20 text-xl">
                <button
                onClick={resetGame}
                className="border border-solid border-blue bg-red rounded-full px-3 hover:bg-redligth md:text-xl md:px-3">
                    Reset Game ?
                </button>
            </div> 
        </div>
        




);

}
export default Translate;
