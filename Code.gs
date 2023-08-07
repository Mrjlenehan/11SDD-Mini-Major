function doGet(event) {
  Logger.log(event)
  return HtmlService.createHtmlOutputFromFile("Index");
}


function graphSubmitted(mark1){
  var id = "17cybAsn4u7KCI0wbLa5SnufTDhRwz1VVIG0v7sPRAHs";
  var spreadsheet = SpreadsheetApp.openById(id);
  var subject1 = spreadsheet.getSheetByName("Subject One");

  subject1.appendRow([mark1]);
  Logger.log(mark1 + " Marks were entered");

}