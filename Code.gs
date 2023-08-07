function doGet(event) {
  Logger.log(event)
  return HtmlService.createHtmlOutputFromFile("Index");
}


function graphSubmitted(mark1){
  Logger.log(mark1 + " Marks were entered");

}