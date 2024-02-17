/* **project Reqirements
 *change the background color by the gerrating random rgb color by clikimg a button

 */

 //steps

 //step1 - create onload handler

 window.onload=()=>{
    main();
 }

 function main(){
const btn=document.getElementById('btn')
const copyBut=document.getElementById('copy-but')
const Output=document.getElementById('colorpiker')
const root=document.getElementById('root')


btn.addEventListener('click',function(){
    const bgcolor=generterRGB()
    root.style.backgroundColor=bgcolor
    Output.value=bgcolor
    
})
copyBut.addEventListener('click',function(){
    navigator.clipboard.writeText(Output.value)
})
 }
 //step2 - random color generator funtion
 function generterRGB(){
    const red=Math.round(Math.random()*255)
    const green=Math.round(Math.random()*255)
    const blue=Math.round(Math.random()*255)
    return`#${red.toString(10)}${green.toString(10)}${blue.toString(10)}`
 }
 //step3 - collect all necssary reference
 //step4 - handle the click events
// step5 - change the clik events and copy the button 




