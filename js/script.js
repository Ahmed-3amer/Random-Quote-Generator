let quotes =[
    {
    quote: `“Be yourself; everyone else is already taken.”`,
    writer: `― Oscar Wilde.`
},
{
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    writer: `― Albert Einstein.`    
},
{
    quote: `“So many books, so little time.”`,
    writer: `― Frank Zappa.`
},
{
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    writer: `― Dr. Seuss.`
},
{
    quote: `“Be the change that you wish to see in the world.”`,
    writer: `― Mahatma Gandhi.`
},
{
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    writer: `― Mark Twain.`
},
{
    quote: `“A friend is someone who knows all about you and still loves you.”`,
    writer:`― Elbert Hubbard.`
},
{
    quote: `“Always forgive your enemies; nothing annoys them so much.”`,
    writer: `― Oscar Wilde.`
},
{
    quote: `
    “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
    writer: `― Ralph Waldo Emerson.`
},
{
    quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
    writer: `― Andre Gide.`
},
{
    quote: `“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”`,
    writer: `― Maurice Switzer.`
},
{
    quote: `“I have not failed. I've just found 10,000 ways that won't work.”`,
    writer: `― Thomas A. Edison.`
},
{
    quote: `“It is never too late to be what you might have been.”`,
    writer: `― George Eliot.`
},
{
    quote: `“Success is not final, failure is not fatal: it is the courage to continue that counts.”`,
    writer: `― Winston S. Churchill.`
}
]


let clickBtn = document.getElementById('btn');
clickBtn.onclick = getRandomQuotes;

function getRandomQuotes(){
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[random].quote;
    document.getElementById('writer').innerHTML = quotes[random].writer;
    console.log(random)
}

let randomIndex = '';
let quoteIndex = '';

for(let i = 1; i < quotes.length; i++){
    let randomIndex = Math.floor(Math.random() * quotes.length);
    if(randomIndex == quoteIndex){
    }
}


