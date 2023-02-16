
// Yuxi Qin - https://yuxiqin.ca

/*

Below is a link to a spreadsheet with two columns A and B. Define a mapping function that for each row of column A, the output of the function will be the corresponding row of column B. More generally: mapping_function(An) =  Bn.  

For example:
mapping_function(15840) = cGp
mapping_function(16465) = cmW
mapping_function(17941) = cX3

Q2 a) What is the mapping function?
    Due to the nature of the problem presented (Google spreadsheet, csv formatted), the most intuitive way to solve the problem would be to use
    Google Spreadsheet's Extension > Apps Script, which introduces custom functions written in Javascript. This function converts the existing
    values in the spreadsheet into a 2D list. This information can easily be looped through using a for-loop, checking the value of each index
    against the input. Once a match is found, it ouputs the corresponding value in the next column.

Q2 b) What is the output of the mapping function for the following inputs: 30001, 55555, 77788
    30001: None
    55555: None
    77788: None

Q2 c) What is the upper limit of this mapping function before there will be collisions? 
    There is no upper limit - the only limitation is running time. Since this function has a running time of O(1), the functionality is solely
    dependent on how large the dataset is.


Q2 d) Please share any code that you wrote in the process of trying to solve the above problem.
    For an interactive solution and demonstration of the function (using Google Spreadsheets):
    https://docs.google.com/spreadsheets/d/10NzXwKwLOcFeF8YdDDTXZmIIy4Bcs_wi6WObsQod6M4/edit?usp=sharing

    For the code, see below:
*/

function mapping_function(val) {
    var values = SpreadsheetApp.getActiveSheet().getDataRange().getValues()
    x = 0;
    for (n = 0; n < values.length; ++n) {
      var cell = values[n][x] ; // x is the index of the column starting from 0
      if(cell == val){ // if values match
        return values[n][x+1];
      }
    }
    return "None";
  }
  