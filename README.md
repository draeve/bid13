# bid13 Q1 + Q2
# Q1
> **Consider that you have a rectangular piece of paper of arbitrary dimensions N by M (where N and M are positive integers). You also have a pair of scissors which can cut perfectly straight with no loss of paper. You wish to reduce the original piece of paper into a series of perfect squares of paper, making the largest possible squares, and using all of the paper provided. Write a function in C that takes the inputs N, and M, and returns the series of squares that can be made out of that piece of paper. No fractional squares, i.e. no square should be less than 1 in length and width.**

Below is the function printSquares() that takes inputs N,M and outputs the corresponding series of squares.

```
#include <stdio.h>

void printSquares(int N, int M) {
    int min = N < M ? N : M; // find the shorter side
    int max = N > M ? N : M; // find the longer side

    while (min > 0) { // continue until no more squares can be cut
        printf("%dx%d", min, min); // same value it can only be squares
        max -= min; // reduce the longer side by amount cut off
        if (max < min) { // if longer side is less than shorter side, swap them
            int temp = max;
            max = min;
            min = temp;
        }
        if(min > 0){ printf(", "); //formatting purposes - so there isn't a leftover comma at the end
        }
    }
}

int main() {
    int N, M;
    printf("Enter dimensions (N x M): ");
    scanf("%d %d", &N, &M);
    printf("Squares: ");
    printSquares(N, M);
    return 0;
}
```
```
Enter dimensions (N x M): 7 5
Squares: 5x5, 2x2, 2x2, 1x1, 1x1
```
```
Enter dimensions (N x M): 9 9
Squares: 9x9
```
```
Enter dimensions (N x M): 2 3
Squares: 2x2, 1x1, 1x1
```


# Q2
> Below is a link to a spreadsheet with two columns A and B. Define a mapping function that for each row of column A, the output of the function will be the corresponding row of column B. More generally: mapping_function(An) =  Bn.  
> 
> For example:
> mapping_function(15840) = cGp
> mapping_function(16465) = cmW
> mapping_function(17941) = cX3

#### Q2 a) What is the mapping function?

Due to the nature of the problem presented (Google spreadsheet, csv formatted), the most intuitive way to solve the problem would be to use Google Spreadsheet's Extension > Apps Script, which introduces custom functions written in JavaScript. This function converts the existing values in the spreadsheet into a 2D list. This information can easily be looped through using a for-loop, checking the value of each index against the input. Once a match is found, it outputs the corresponding value in the next column.

#### Q2 b) What is the output of the mapping function for the following inputs: 30001, 55555, 77788
30001: None
55555: None
77788: None

#### Q2 c) What is the upper limit of this mapping function before there will be collisions? 
 
    
There is no upper limit - the only limitation is running time. Since this function has a running time of O(1), the functionality is solely dependent on how large the dataset is.


### Q2 d) Please share any code that you wrote in the process of trying to solve the above problem.
For an [interactive solution and demonstration](https://docs.google.com/spreadsheets/d/10NzXwKwLOcFeF8YdDDTXZmIIy4Bcs_wi6WObsQod6M4/edit?usp=sharing) of the function below (using Google Spreadsheets):    
    
```
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
```
