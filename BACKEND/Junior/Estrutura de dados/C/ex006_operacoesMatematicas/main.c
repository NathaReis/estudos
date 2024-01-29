#include <stdio.h>
#include <stdlib.h> //Métodos de controle de processos e alocação de memória

int main() {

    int num, num2 = 0;
    num = 15;
    num2 =20;

    int soma = num + num2;
    int sub = num2 - num;
    int mul = num2 * num;
    int div = num2 / 3;

    printf("O resultado da soma e: %i\n", soma);
    printf("O resultado da subtração e: %i\n", sub);
    printf("O resultado da multiplicaçao e: %i\n", mul);
    printf("O resultado da divisao e: %i\n", div);

    return 0;
}