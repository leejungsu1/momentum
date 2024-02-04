const quote = document.querySelector("#quotes");
const quotesBox = document.querySelector("#quotesBox");

const quoteList=[
    "“Inside of every problem lies an opportunity.”",
    "“Those who welcome death have only tried it from the ears up.“",
    "“We cannot really love anybody with whom we never laugh.“"
];

function changeQuotes(){
    quotesBox.classList.remove(HIDDEN_CLASSNAME)
    const num = Math.floor(Math.random()*quoteList.length);
    quote.innerText = `${quoteList[num]}`
}

changeQuotes();

