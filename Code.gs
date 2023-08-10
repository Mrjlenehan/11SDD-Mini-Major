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

function retrieveValues(){
  var marksheet1 = spreadsheet.getRange("A3").getValue();
  Logger.log(marksheet1);
  return marksheet1;
}
