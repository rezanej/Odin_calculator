let operand0, operand1, operator='';
let countOfPeriod=0;
let countOfDigitAfterPeriod=0;
let countOfNegative=0;
function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2)
{
    return num1-num2;
}
function multiply(num1,num2)
{
    return num1*num2 ;
}
function divide(num1,num2)
{
    return num1/num2;
}
function operate(num1,num2,operator)
{
    if (operator=="+")
    {
        return  add(num1,num2);
    }
    else if (operator=="-")
    {
        return subtract(num1,num2);
    }
    else if (operator=="/")
    {
        return divide(num1,num2);
    }
    else if (operator=="*")
    {
        return multiply(num1,num2);
    }
}
function buttonPressed(value)
{
   const input=document.querySelector('.input-group input');
   const p=document.querySelector(".input-group p");

   if (!isNaN(value))
   {

       if(countOfPeriod!=0)
       {
           if (countOfDigitAfterPeriod<=3) {
               countOfDigitAfterPeriod++;
               input.value=input.value+value;
           }

       }
       else input.value=input.value+value;
       countOfNegative=0;
   }
   switch (value) {
       case "clear":
           input.value="";
           p.textContent='';
           operand0='';
           operand1='';
           operator='';
           countOfNegative=0;
           break;
       case "backspace":
           const removed=input.value.split('');
           removed.pop();
           input.value=removed.join('');
           break;
       case '+':
           if (input.value!=='')
           {
               p.textContent = input.value + " +";
               operand0=input.value;
               operator='+';
               input.value='';
               countOfPeriod=0;
           }
           break;
       case '-':
           if (input.value!=='' && input.value!=='-')
           {
               p.textContent = input.value + " -";
               operand0=input.value;
               operator='-';
               input.value='';
               countOfPeriod=0;
           }
           else if(countOfNegative==0){
               input.value='-';
               countOfNegative++;
           }
           break;
       case '*':
           if (input.value!=='')
           {
               p.textContent = input.value + " x";
               operand0=input.value;
               operator='*';
               input.value='';
               countOfPeriod=0;
           }
           break;
       case '/':
           if (input.value!=='')
           {
               p.textContent = input.value + " /";
               operand0=input.value;
               operator='/';
               input.value='';
               countOfPeriod=0;

           }
           break;
       case '=':
           if(operator!=='' && input.value!=='')
           {
               operand1=input.value;
               p.textContent=p.textContent+" "+input.value+" =";
               input.value = operate(parseFloat(operand0), parseFloat(operand1), operator);
               if(input.value%1!=0)
                input.value=Number(input.value).toFixed(4);
               operator=''
               operand0=input.value;
               operand1='';
               countOfPeriod=0;
           }
           break;
       case '.':
           if(countOfPeriod==0) {
               input.value += '.';
               countOfPeriod++;
           }




   }
}
function addEvents()
{
    let buttons=document.querySelectorAll('.button');
    buttons.forEach((button)=>
        {
            button.addEventListener('click',()=>buttonPressed(button.getAttribute('value')))
        }
    )
}

addEvents()

document.addEventListener('keydown',(event)=>{
    if (event.key=='Enter') {
        event.preventDefault();
        buttonPressed('=')
    }else if (event.key=='Backspace') {
        event.preventDefault();
        buttonPressed('backspace')
    }else if (event.key=='/') {
        event.preventDefault();
        buttonPressed('/')
    }
    else if (event.key==' ') {
        event.preventDefault();
    }
    else
        buttonPressed(event.key);

})