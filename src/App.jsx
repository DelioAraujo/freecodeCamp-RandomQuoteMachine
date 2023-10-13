import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [quote, setQuote] = useState({author: '', content: ''});

  const getQuote = async () => {
    const apiUrl = 'https://api.quotable.io/quotes/random'
    const response = await fetch(apiUrl);
    const data = await response.json();
    const finalData = { content: data[0].content, author: data[0].author };
    setQuote(finalData);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className='container-fluid' id='main-container' >
      <div id={'quote-box'}>
        <h1 className='display-5 text-center' id={'text'}>&quot; {quote.content} &quot;</h1>
        <h2 className='display-7' id={'author'}>- {quote.author}</h2>
        <button onClick={getQuote} id={'new-quote'}>New Quote</button>
        <a id={'tweet-quote'} href={`https://twitter.com/intent/tweet?text="${quote.content}" - ${quote.author}`}>tweet</a>
      </div>
    </div>
  )
}

export default App
