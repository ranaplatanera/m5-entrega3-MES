# M5 - Entrega 3 -  Desenvolvendo e testado uma API de catálogo de carros

Está documentação servirá de base para entrega, todas as rotas deverão se comportar assim como está previsto na documentação abaixo:

## Rotas
| Rota             | Descrição                    |
|------------------|------------------------------|
| POST /cars       | Rota de inserção de carros   | 
| GET /cars        | Leitura de carros.           | 
| GET /cars/:id    | Leitura individual de carros.|
| PATCH /cars/:id  | Atualização de carro.        |
| DELETE /cars/:id | Exclusão do carro.           |

## Comportamentos esperados

### Criação de carros POST /cars

Padrão de corpo

```json
{
    "name": "Car name",
    "description": "Car description",
    "brand": "Card brand",
    "year": 2023,
    "km": 10000
}

```

Padrão de resposta  (STATUS: 201)

```json
{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name",
    "description": "Car description",
    "brand": "Card brand",
    "year": 2023,
    "km": 10000
}    
```

#### Possíveis erros:
STATUS (400) quando o corpo não é compatível com o padrão

### Leitura de carros GET /cars

Padrão de resposta  (STATUS: 200)

```json
[
    {
        "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
        "name": "Car name",
        "description": "Car description",
        "brand": "Card brand",
        "year": 2023,
        "km": 10000
    }  
]  
```

### Leitura de individual GET /cars/:id

Padrão de resposta  (STATUS: 200)

```json
{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name",
    "description": "Car description",
    "brand": "Card brand",
    "year": 2023,
    "km": 10000
}   
```

#### Possíveis erros:

STATUS (404) - Carro não encontrado

```json
{
    "message": "Car not found"
}
```

### Atualizar carro PATCH /cars/:id

Padrão de corpo 

```json
{
    "name": "Car name updated",
    "description": "Car description updated",
    "brand": "Card brand updated",
    "year": 2022,
    "km": 20000
}
```
Todos os campos deverão ser opcionais na atualização

Padrão de resposta (STATUS: 200)

```json
{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name updated",
    "description": "Car description updated",
    "brand": "Card brand updated",
    "year": 2022,
    "km": 20000
}    
```

#### Possíveis erros:

STATUS (400) quando o corpo não é compatível com o padrão

STATUS (404) - Carro não encontrado

```json
{
    "message": "Car not found"
}
```

STATUS (409) quando o corpo não é compatível com o padrão

### Excluir carro DELETE /cars/:id

STATUS (204) - Está rota não tem um corpo de resposta

#### Possíveis erros:

STATUS (404) - Carro não encontrado

```json
{
    "message": "Car not found"
}
```