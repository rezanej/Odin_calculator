let operand0, operand1, operator;

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
    num1/num2;
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
function buttonPressed(button)
{
   const value=button.getAttribute('value');
}
function addEvents()
{
    let buttons=document.querySelectorAll('.button');
    buttons.forEach((button)=>
        {
            button.addEventListener('click',()=>buttonPressed(button))
        }
    )
}

addEvents()