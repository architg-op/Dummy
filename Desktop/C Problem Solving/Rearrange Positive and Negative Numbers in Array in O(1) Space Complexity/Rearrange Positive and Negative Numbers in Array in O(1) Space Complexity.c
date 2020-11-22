#include <stdio.h>

void moveElements(int arr[], int n)
{
    int val;
    for (int i = 1; i < n; i++) {
        val = arr[i];
        if(arr[i] < 0) {
            continue;
        }
        int j = i - 1;
        while (j >= 0 && arr[j] < 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = val;
    }
}

void printArray(int *a, int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }
}

int main() {
    int a[] = {5, -9, 1 , -4, 7, 19, -1, 11, 98, -79};
    int n = sizeof(a) / sizeof(a[0]);
    moveElements(a, n);
    printArray(a, n);
}
