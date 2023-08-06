function doGet(event) {
  Logger.log(event)
  return HtmlService.createHtmlOutputFromFile("Index");
}


function graphSubmitted(){
  Logger.log("Marks were entered");

}