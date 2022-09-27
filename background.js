function getRandomNumber(max){
    return Math.floor(Math.random()*Math.floor(max));
}


chrome.runtime.onMessage.addListener((msg,sender,response)=>{
    if(msg.name=="fetchWords"){

        const apiKey='OUR-API-KEY';
    const dateStr=new Date().toISOString().slice(0,10);
    const apiCall='https://api.wordnik.com/v4/words.json/wordOfTheDay?date='+dateStr+'&api_key='+apiKey;

    
const wordsObj=[
    "condop",
    "caporal",
    "acephali",
    "metewand"
];
const wordsDescObj=[
    "A legal term for a real estate establishment building or group of buildings that is part condominium and part cooperative.",
    "A strong dark tobacco.",
    " Literally, those who have no head or chief.",
    " A measuring-staff, yardstick, etc.; any rod or stick used to measure length."
];

var number=getRandomNumber(3)
response({word: wordsObj[number],desc: wordsDescObj[number]});
}  
})