// Code your solutions in this file

function writeCards (names, event) {
    const messages = []
    for(let i = 0; i < names.length; i++){
      const message = `Thank you, ${names[i]}, for the wondeful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}
console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"))

function countdown(){
   var countdown = 10;
   for(;countdown > 0; countdown--){
    comsole.log(countdown);
   }
   console.log(countdown);
}
