function doGet(e) {
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile("exe");
 
  
  
}

function userClicked(name){
  var url= "https://docs.google.com/spreadsheets/d/1HVEcXKN4_UvzHw6mRzGlbsIy_sGDhb5duv4GtOXHzvU/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  
  ws.appendRow([name,new Date()]);
  //Logger.log(name+ " clicked the Button")
  
}