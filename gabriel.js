// Vamos desempacotar esta merda

let urlVar = [{
        "id": 1,
        "url": "http://teste.com.br",
        "company_id": 1
    },
    {
        "id": 2,
        "url": "http://exemplo2.com.br",
        "company_id": 1
    }
];

console.log("Using for in ");

for (let number in urlVar) {
    console.log(
        urlVar.map( ) => number.url
        );
}


//    .map(m => m.title)

// Teste 123