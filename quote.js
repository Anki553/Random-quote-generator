const api_url='https://dummyjson.com/quotes/random'
const quote=document.querySelector('.quote-text')
const author=document.querySelector('.author-name')
async function getQuote(url) {
     const response= await fetch(url);
     var data=await response.json();
     console.log(data)
     quote.innerHTML=data.quote
     author.innerHTML=data.author
}
getQuote(api_url);

function tweet(){
  window.open("https://twitter.com/intent/tweet?text=" +quote.innerHTML, "----by",+ author.innerHTML,"tweet window","width=600","height=300")
}
    