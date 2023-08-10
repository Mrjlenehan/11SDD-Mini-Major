function doGet(event) {
  Logger.log(event)
  return HtmlService.createHtmlOutputFromFile("Index");
}


function graphSubmitted(mark1, mark2, mark3, mark4){
  var id = "17cybAsn4u7KCI0wbLa5SnufTDhRwz1VVIG0v7sPRAHs";
  var spreadsheet = SpreadsheetApp.openById(id);
  var subject1 = spreadsheet.getSheetByName("Subject One");

  subject1.appendRow([mark1, mark2, mark3, mark4]);
  Logger.log(mark1 + " Marks were entered");
  Logger.log(mark2 + " Marks were entered");
  Logger.log(mark3 + " Marks were entered");
  Logger.log(mark4 + " Marks were entered");
}
var id = "17cybAsn4u7KCI0wbLa5SnufTDhRwz1VVIG0v7sPRAHs";
var spreadsheet = SpreadsheetApp.openById(id);

function retrieveValues1(){
  var marksheet1 = spreadsheet.getRange("A2").getValue();
  Logger.log(marksheet1);
  return marksheet1;
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