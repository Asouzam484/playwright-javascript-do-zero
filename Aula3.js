

// const produto ={

//         nome: 'Telemovel',
//         preco: 500,
//         stock: 10,
//         disponivel: true
// }
// console.log(produto.nome);
// console.log(produto.preco);
// console.log(produto.stock);
// console.log(produto.disponivel);

// const utilizador = {

//     nome: 'Maria',
//     email: 'maria@email.com',
//     password: '123456',
//     ativo: true
// }

//  function mostrarLogin(dados){

//     console.log(dados.email),
//     console.log(dados.password)
//  }

//  mostrarLogin(utilizador)


// const navegadores=['Chrome','Firefox','Edge']

//     console.log(navegadores[0]);


// const clientes = [{

//     nome: 'Maria',
//     ativo: true
// },
// {
//     nome: 'Pedro',
//     ativo: false

// },
// {
//     nome: 'Ana',
//     ativo: true

// },

// ];
// // console.log(clientes[0].nome);
// // console.log(clientes[0].ativo);
// // console.log(clientes[1].nome);
// // console.log(clientes[1].ativo);
// // console.log(clientes[2].nome);
// // console.log(clientes[2].ativo);

//  for(const cliente of clientes){

//     if(cliente.ativo === true){
//         console.log(cliente.nome)
//     }
    
//  }
    //console.log(cliente.nome);
    //console.log(cliente.ativo);



  const produtos = [{

        nome: 'Teclado',
        Preco: 50,
        Disponível: true
  },

{       nome: 'Rato',
        Preco: 25,
        Disponível: false
},

   {    nome: 'Monitor',
        Preco: 200,
        Disponível: true,
} ,
   {    nome: 'Cadeira',
        Preco: 150,
        Disponível: true


  }];

  for(const produto of produtos){

    if(produto.Disponível === true){

        console.log(produto.nome);
        console.log(produto.Preco);
        
    }
   
}
 