const fs =require ("fs");
const tareas = JSON.parse(fs.readFileSync("./datas/tareas.json","utf-8"));

const funcionesDeTareas = {
    listar : function () {
        tareas.forEach(function (tarea,i){
            console.log(`tarea numero ${i+1}: ${tarea.titulo}, se encuentra: ${tarea.estado}`)
        });
        
    },
    escribirJSON: function (tareas){
        fs.writeFileSync("./datas/tareas.json", JSON.stringify(tareas, null, 2), "utf-8");
    },
    guardarTarea : function(titulo, estado = "pendiente"){
        let nuevaTarea ={
            titulo,
            estado
}
    tareas.push(nuevaTarea);
    funcionesDeTareas.escribirJSON(tareas);//nunca usar this maldito this me complico la vida!!!
    funcionesDeTareas.listar();//no usar this
},
filtrarPorEstado : function(filtro){
    let leerPorEstado = tareas.filter(tarea => tarea.titulo.includes(filtro) || tarea.estado.includes(filtro));
    console.log(leerPorEstado);
}
}
module.exports = funcionesDeTareas; //module no modulo !!