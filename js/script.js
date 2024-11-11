let quotes = [
  {
    quote: `“Be yourself; everyone else is already taken.”`,
    writer: `― Oscar Wilde.`,
    img: `<img src="images/Oscar-Wilde-Portrait.jpg" class="img-fluid rounded-circle  ms-5" alt="Oscar-Wilde"/>`,
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    writer: `― Albert Einstein.`,
    img: `<img src="images/Albert Einstein.jpg" class="img-fluid rounded-circle  ms-5" alt="Albert Einstein"/>`,
  },
  {
    quote: `“So many books, so little time.”`,
    writer: `― Frank Zappa.`,
    img: `<img src="images/frank-zappa-9540382-1-402.jpg" class="img-fluid rounded-circle  ms-5" alt="Frank Zappa"/>`,
  },
  {
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    writer: `― Dr. Seuss.`,
    img: `<img src="images/Theodor_Seuss_Geisel_(01037v).jpg" class="img-fluid rounded-circle  ms-5" alt="Dr. Seuss"/>`,
  },
  ,
  {
    quote: `“Be the change that you wish to see in the world.”`,
    writer: `― Mahatma Gandhi.`,
    img: `<img src="images/mahatma-gandhi-gettyimages-102701091-2048x2048-1.jpg" class="img-fluid rounded-circle  ms-5" alt="Mahatma Gandhi"/>`,
  },
  {
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    writer: `― Mark Twain.`,
    img: `<img src="images/Mark_Twain_by_AF_Bradley.jpg" class="img-fluid rounded-circle  ms-5" alt="Mark Twain"/>`,
  },
  {
    quote: `“A friend is someone who knows all about you and still loves you.”`,
    writer: `― Elbert Hubbard,.`,
    img: `<img src="images/Elbert Hubbard.jpg" class="img-fluid rounded-circle  ms-5" alt="Elbert Hubbard"/>`,
  },
  {
    quote: `“Always forgive your enemies; nothing annoys them so much.”`,
    writer: `― Oscar Wilde.`,
    img: `<img src="images/Oscar-Wilde-Portrait.jpg" class="img-fluid rounded-circle  ms-5" alt="Oscar Wilde"/>`,
  },
  {
    quote: `
    “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
    writer: `― Ralph Waldo Emerson.`,
    img: `<img src="images/Ralph_Waldo_Emerson_by_Josiah_Johnson_Hawes_1857.jpg" class="img-fluid rounded-circle  ms-5" alt="Ralph Waldo Emerson"/>`,
  },
  {
    quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
    writer: `― Andre Gide.`,
    img: `<img src="images/Andre Gide.jpg" class="img-fluid rounded-circle  ms-5" alt="Andre Gide"/>`,
  },
  {
    quote: `“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”`,
    writer: `― Maurice Switzer.`,
    img: `<img src="images/Maurice Switzer.jpg" class="img-fluid rounded-circle  ms-5" alt="Maurice Switzer"/>`,
  },
  {
    quote: `“I have not failed. I've just found 10,000 ways that won't work.”`,
    writer: `― Thomas A. Edison.`,
    img: `<img src="images/Thomas A. Edison.jpg" class="img-fluid rounded-circle  ms-5" alt="Thomas A. Edison"/>`,
  },
  {
    quote: `“It is never too late to be what you might have been.”`,
    writer: `― George Eliot.,`,
    img: `<img src="images/George_Eliot,_por_François_D'Albert_Durade.jpg" class="img-fluid rounded-circle  ms-5" alt="George Eliot"/>`,
  },
  {
    quote: `“Success is not final, failure is not fatal: it is the courage to continue that counts.”`,
    writer: `― Winston S. Churchill.`,
    img: `<img src="images/1641px-Sir_Winston_S_Churchill.jpg" class="img-fluid rounded-circle  ms-5" alt="Winston S. Churchill"/>`,
  },
];

let displayedQuotes = [];
let clickBtn = document.getElementById("btn");
clickBtn.onclick = getRandomQuotes;

function getRandomQuotes() {
  if (displayedQuotes.length === quotes.length) {
    displayedQuotes = [];
  }
  let random;
  do {
    random = Math.floor(Math.random() * quotes.length);
  } while (displayedQuotes.includes(random));
  displayedQuotes.push(random);
  document.getElementById("authorImg").innerHTML = quotes[random].img;
  document.getElementById("quote").innerHTML = quotes[random].quote;
  document.getElementById("writer").innerHTML = quotes[random].writer;
  console.log(quotes.length);
}
