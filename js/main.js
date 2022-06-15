function check(){
  location.href = '/checker'
}
document.getElementById('instruction').addEventListener('click', getDate)
function getDate(){
document.getElementById('date-select').style.display = 'block'
document.getElementById('instruction').style.display = 'none'

}

document.getElementById('submit').addEventListener('click', flow)
function flow(){
  let days = document.getElementById('select').value
    let flowmonthOne = new Date(document.getElementById('month').value)
    let flowmonthTwo = new Date(document.getElementById('month').value)
    let ovulationdate = new Date(document.getElementById('month').value)
    let fertiledate = new Date(document.getElementById('month').value)
    let secondfertiledate = new Date(document.getElementById('month').value)
   
    flowmonthOne.setDate(flowmonthOne.getDate()+ parseInt(days))
    flowmonthTwo.setDate(flowmonthTwo.getDate()+ parseInt(days)+2)
    ovulationdate.setDate(ovulationdate.getDate()+ parseInt(days)/2)
    fertiledate.setDate(ovulationdate.getDate()-2)
    secondfertiledate.setDate(ovulationdate.getDate()-1)


 document.getElementById('menstrual-info').innerText= "Your Next Flow is between " + flowmonthOne.toDateString() + " and " + flowmonthTwo.toDateString()
let ovulationbutton = document.createElement('button');
 ovulationbutton.innerText= 'Check Ovulation Date'
 let body= document.getElementById('get-info')
 body.appendChild(ovulationbutton)
 ovulationbutton.addEventListener('click', getOvulationDate)
 function getOvulationDate(){
  document.getElementById('info').innerText= 'You will be ovulating  on '+ ovulationdate.toDateString()
  document.getElementById('fertile').innerText= 'Your most fertile days will be '+ fertiledate.toDateString() + ', ' + secondfertiledate.toDateString() + ' and ' + ovulationdate.toDateString()
  ovulationbutton.style.display="none"
}
 }





