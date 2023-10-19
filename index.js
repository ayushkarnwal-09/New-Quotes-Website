AOS.init();
const quotes= document.getElementById("quotes")
const author = document.getElementById("author")
const newQ = document.getElementById("newQ")
const tweetMe = document.getElementById("tweetMe")


let realData = "";
let quotesData = "";
const tweetNow = ()=>{
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text};`
    window.open(tweetPost);
}
const getNewQuotes = ()=>{
    let rnum = Math.floor(Math.random()*10);
    quotesData = realData[rnum];
    var originalString = `${realData[rnum].author}`
    var parts = originalString.split(',');
    
    quotes.innerText = `${quotesData.text}`
    author.innerText = parts[0];
}
const getQuotes = async () =>{
    const api = "https://type.fit/api/quotes"
    try{
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes(); 
        // console.log(realData.length);
        // console.log(realData[0].author);
    }catch(error){}

}

tweetMe.addEventListener('click',tweetNow)
newQ.addEventListener("click",getNewQuotes)

getQuotes(); 