
let promesa=new Promise((res, rej)=>
{
    //res(console.log("res resolve significa que todo ocurrio con exito"));// tabmbien se puede utilizar resolve en vez de res
    //rej(console.log("rej o reject SIgnifica que es un rechazo o que no todo se resolvio con exito"));
    res("res resolve significa que todo ocurrio con exito, Retorno de valor exitoso");
});

promesa.then((resultado)=>{
    console.log(resultado);
}, (error)=>{
    console.log(error)
});