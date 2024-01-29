#include <stdlib.h>
#include <math.h>
#include "index.h"

struct lista {
    int qnt;
    struct aluno;
};

Lista* cria_lista() {
    Lista *li;
    li = (Lista*) malloc(sizeof(struct lista));
    if(li != NULL)
    {
        li->qnt = 0;
    }
    return li;
}

void libera_lista(Lista* li) {
    free(li);
}