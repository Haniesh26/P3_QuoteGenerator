console.log('This is a quote generator')

let apiQuotes = []
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

//SHpw new quote
function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]

  if (quote.author != null) {
    authorText.textContent = quote.author
  } else {
    authorText.textContent = 'Unknown'
  }

  //   if (quote.text.length > 50) {
  //     quoteText.classList.add('long-quote')
  //   } else {
  //     quoteText.classList.remove('long-quote')
  //   }

  //   authorText.textContent = quote.author
  quoteText.textContent = quote.text
}

//Get quotes form API
async function getQuotes() {
  const apiURL = 'https://type.fit/api/quotes'
  try {
    const response = await fetch(apiURL)
    apiQuotes = await response.json()
    newQuote()
  } catch (error) {}
}

//Tweet Quote
function tweeetQuote() {
  console.log('twitter clicked')
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
  window.open(twitterUrl, '_blank')
}

newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweeetQuote)

getQuotes()
