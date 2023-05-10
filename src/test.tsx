/*
const words = ['hello', 'goodbye', 'thank you', 'yes', 'no'];

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}



function TranslationGame() {
    const [word, setWord] = useState<string>(getRandomWord());
    const [answer, setAnswer] = useState<string>('');
    const [message, setMessage] = useState<string>('');
  
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const translation = getTranslation(word);
  
      if (answer === translation) {
        setMessage('Success!');
      } else {
        setMessage('Fail!');
      }
    }
  
    function getTranslation(word: string) {
      // return the correct translation for the given word
    }
  
    return (
      `<div>
        <h1>Translation Game</h1>
        <p>Translate this word: {word}</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={answer} onChange={(event) => setAnswer(event.target.value)} />
          <button type="submit">Submit</button>
        </form>
        <p>{message}</p>
      </div>`
    );
  }
export {}  */