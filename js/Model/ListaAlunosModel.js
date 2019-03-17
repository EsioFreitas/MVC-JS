class ListaAlunos{
    constructor(_lista){
        this.lista = [].concat(_lista);
    }

    obterPorId(id){
        return this.lista.filter(aluno => aluno._id === id)[0];
    }
}