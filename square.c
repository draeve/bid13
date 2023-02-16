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
