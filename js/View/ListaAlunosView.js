class ListaAlunosView{
    constructor(selector){
        this.$selector = blg.$(selector)
    }

    getTemplate(model){
        return `
            ${model.lista.map( aluno => `
                <tr class="aluno" >
                    <td class="aluno-nome">Gertrude</td>
                    <td class="aluno-n1">10</td>
                    <td class="aluno-n2">8.5</td>
                    <td class="aluno-n3">9</td>
                    <td class="aluno-n4">7.5</td>	
                    <td class="aluno-m"></td>
                </tr>
            `)}
        `
    }
}