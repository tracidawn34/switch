/******************************/
//Your Code Here 
function dayOfWeek(day){
switch(day){
  case 1 : return "Monday"
  case 2 : return "Tuesday"
  case 3 : return "Wednesday"
  case 4 : return "Thursday"
  case 5 : return "Friday"
  case 6 : return "Saturday"
  case 7 : return "Sunday"
}
}

function identifySeason(season){
  switch(season){
    case 1 : return "Winter"
    case 2 : return "Winter"
    case 3 : return "Spring"
    case 4 : return "Spring"
    case 5 : return "Summer"
    case 6 : return "Summer"
    case 7 : return "Summer"
    case 8 : return "Summer"
    case 9 : return "Autumn"
    case 10 : return "Autumn"
    case 11 : return "Autumn"
    case 12 : return "Winter"
  }
}

function menuSelection(choose){
  switch(choose){
    case 1 : return "Option 1 selected"
    case 2 : return "Option 2 selected"
    case 3 : return "Option 3 selected"
    default : return "Invalid choice"
  }
}

/****************************/
// Our code here. Don't touch!
if (typeof dayOfWeek === 'undefined') {
    dayOfWeek = undefined
  }
  
  if (typeof identifySeason === 'undefined') {
    identifySeason = undefined
  }
  
  if (typeof menuSelection === 'undefined') {
    menuSelection = undefined
  }

  
  
  module.exports = {
    dayOfWeek, 
    identifySeason, 
    menuSelection
  }
  