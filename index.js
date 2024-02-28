let user_count=0;
let computer_count=0;
function userchoice(user_choice)
{
 let choices=['rock','paper','scissor'];
 let i=0;
 let value=0;
 for( i=0;i<choices.length;i++)
 {
    if(user_choice==choices[i])
    {
        value=i;
    }
 }
 let user=choices[value];
 let computer=choices[Math.floor(Math.random() * 3)];
   determinewinner(user,computer)
}
function determinewinner(user,computer)
{

    if(user===computer)
    {
         console.log("it is tie")
         document.getElementById('text').innerHTML='It Is Tie.'
    }
    else if((user==='rock'&&computer==='scissor')||(user==='paper'&&computer==='rock')||(user==='scissor' && computer==='paper'))
    {
        console.log('You Win & Computer Loose')
        document.getElementById('text').innerHTML='You Win & Computer Loose';
        user_count+=1;
    }
    else{
        console.log('You Loose & Computer Wins');
        document.getElementById('text').innerHTML='You Loose & Computer Win';
        computer_count+=1;
    }
    console.log(user_count);
    console.log(computer_count);
    document.getElementById('user_count').innerText=user_count;
    document.getElementById('computer_count').innerHTML=computer_count;
}

function reset()
{
    user_count=0;
    computer_count=0;

    document.getElementById('user_count').innerText=user_count;
    document.getElementById('computer_count').innerHTML=computer_count;
    document.getElementById('text').innerHTML='';

}

