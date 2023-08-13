function doGet(event) {
  Logger.log(event)
  return HtmlService.createHtmlOutputFromFile("Index");

}



function graphSubmitted(mark1, mark2, mark3, mark4, name){
  var id = "17cybAsn4u7KCI0wbLa5SnufTDhRwz1VVIG0v7sPRAHs";
  var spreadsheet = SpreadsheetApp.openById(id);
  var subject1 = spreadsheet.getSheetByName("Subject One");

  subject1.appendRow([mark1, mark2, mark3, mark4, name]);
  Logger.log(mark1 + " Marks were entered");
  Logger.log(mark2 + " Marks were entered");
  Logger.log(mark3 + " Marks were entered");
  Logger.log(mark4 + " Marks were entered");
  Logger.log(name + " was saved");
}
var id = "17cybAsn4u7KCI0wbLa5SnufTDhRwz1VVIG0v7sPRAHs";
var spreadsheet = SpreadsheetApp.openById(id);
var subject1 = spreadsheet.getSheetByName("Subject One");
// let placeholder = 0
// placeholder = placeholder + 1
// function nextvalue(){
//   Logger.log(placeholder);
//   placeholder++;

//   Logger.log(placeholder);

//   var dataname = subject1.getRange(placeholder , 5).getValue();

//   Logger.log(placeholder)
//   Logger.log(dataname);
//   return dataname, placeholder;
// }

function nextrow(placeholder){
  placeholder = (placeholder + 1);
  return placeholder;
}

function nextvalue(placeholder){
  var dataname = subject1.getRange(placeholder , 5).getValue();
  Logger.log(dataname)
  return dataname
}
function backrow(placeholder){
  placeholder = (placeholder - 1);
  return placeholder;
}

function backvalue(placeholder){
  var dataname2 = subject1.getRange(placeholder , 5).getValue();
  Logger.log(dataname2)
  return dataname2
}

function retrieveValues1(){
  var marksheet1 = spreadsheet.getRange("A2").getValue();
  Logger.log(marksheet1);
  return marksheet1;
}
function retrievename(){
  var marksheetname = spreadsheet.getRange("E2").getValue();
  Logger.log(marksheetname);
  return marksheetname;
}
function retrieveValues2(){
  var marksheet2 = spreadsheet.getRange("B2").getValue();
  Logger.log(marksheet2);
  return marksheet2;
}
function retrieveValues3(){
  var marksheet3 = spreadsheet.getRange("C2").getValue();
  Logger.log(marksheet3);
  return marksheet3;
}
function retrieveValues4(){
  var marksheet4 = spreadsheet.getRange("D2").getValue();
  Logger.log(marksheet4);
  return marksheet4;
}