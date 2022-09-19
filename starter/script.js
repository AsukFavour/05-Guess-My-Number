'use strict';

// console.log(document.querySelector('.h1').textContent = 'Guess the number 🤩');
document.querySelector('.h1').textContent = 'Guess the number 🤩';
// document.querySelector('.number').textContent = '25';
// document.querySelector('.guess').value =  '5';

 let number = Math.trunc(Math.random()*20)+1;
 let score = 20;
 let highScore = 0;
 document.querySelector('.score').textContent = score;
 document.querySelector('.check').addEventListener('click', function(){
    const guess =Number( document.querySelector('.guess').value);

    

    if(!guess){
        document.querySelector('.message').textContent = '🛑 No value';
    }
       
    else if (guess === number){
        
        document.querySelector('.message').textContent = 'congrats correct number 🎉';
        document.querySelector(`.number`).textContent = number;
        // document.querySelector('.highscore').textContent = score;

         document.querySelector('body').style.backgroundColor = 'green';
         document.querySelector('.number').style.width = '30rem';

         if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
                 }
    
    }
    else if (guess !== number){
         if (score > 1){
        document.querySelector('.message').textContent = guess > number ? 'number is higher': 'number is lower';
         score-- ;
        document.querySelector('.score').textContent= score;
   }
   else {
    document.querySelector('.message').textContent = 'sorry you lost';
    alert('sorry you lost');
    document.querySelector('.score').textContent = 0; 
   }
    }
    // else if (guess < number){
      
    // }
    // else if (guess > number && guess <= 20){
    //     if (score > 1){
    //     document.querySelector('.message').textContent = ;
    //     score--;
    //     document.querySelector('.score').textContent= score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = 'sorry you lost';
    //         alert('sorry you lost');
    //        }
    // }
    // else if (guess > 20){
    //     document.querySelector('.message').textContent= `above 20
    //     stay in the range of 1-20 `;
    // }
});

document.querySelector('.again').addEventListener('click', function(){
    number = Math.trunc(Math.random()*20)+1;
    score = 20;
    
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector(`.number`).textContent = '?';
    document.querySelector(`.guess`).value = '';

});