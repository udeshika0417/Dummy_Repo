function doGet(e) {
  var htmlOutput =  HtmlService.createTemplateFromFile('exe');
  htmlOutput.search='';
 return htmlOutput.evaluate();
}

function doPost(e) {
  var search =e.parameter.search;
  var htmlOutput =  HtmlService.createTemplateFromFile('exe');
  htmlOutput.search= search;
  return htmlOutput.evaluate();
}

function getSheetData()  { 

   var url= "https://docs.google.com/spreadsheets/d/1QhnLhOIsIwdAbYL-CvjXbW-nEKg5iu30ZnMSQHR7l28/edit#gid=1026244210";
  var ss = SpreadsheetApp.openByUrl(url);

  var dataSheet = ss.getSheetByName('unlockHistory'); 
 var dataRange = dataSheet.getDataRange();
 var dataValues = dataRange.getDisplayValues();  
  return dataValues;
}

function getUrl(){
  var url =ScriptApp.getService().getUrl();
  return url;
   Logger.log(url)
}