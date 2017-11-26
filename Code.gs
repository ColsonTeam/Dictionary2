function doGet() {
  var main = HtmlService.createHtmlOutputFromFile('default').addMetaTag('viewport', 'width=device-width, initial-scale=1').setSandboxMode(HtmlService.SandboxMode.IFRAME).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return main.setTitle("Dictionary");
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}

function insertWord(word){
  var data = SpreadsheetApp.openById("1bAiyPAo6fmAMZFbtVckws93tYxrviQQv4iL6H6bLCZQ");
  var sheetSubject = data.getSheetByName("sheet_vocabulary");
  var data = sheetSubject.getDataRange().getValues();
  var rowLength = data.length;
  for(var row = 0; row < rowLength; row++){
    if(word == data[row][0]){
      var value = data[row][1];
      value = value + 1;
      sheetSubject.getRange(row+1,2).setValue(value);
      return;
    }
  }
  sheetSubject.getRange(row+1,1).setValue(word);
  sheetSubject.getRange(row+1,2).setValue(1);
  return;
}

function getWords(){
  var data = SpreadsheetApp.openById("1bAiyPAo6fmAMZFbtVckws93tYxrviQQv4iL6H6bLCZQ");
  var sheetSubject = data.getSheetByName("sheet_vocabulary").sort(2,false);
  var data = sheetSubject.getDataRange().getValues();
  var rowLength = data.length;
  var words = [];
  for(var row = 0; row < rowLength; row++){
    words.push(data[row][0]);
  }
  return words;
}