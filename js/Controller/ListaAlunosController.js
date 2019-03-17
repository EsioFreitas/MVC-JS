class ListaAlunosController{
    constructor(model, view){
        this.model = model;
        this.view = view;

        this.view.$selector.addEventListener('click', this.editarAluno.bind(this));
    }

    editarAluno(e){
        let target = e.target;
        
        while(target !== e.currentTarget){
            if(target.getAttribute('data-id'))
            break;
            
            target = target.parentNode
        }
        
        console.log(target)
    }
}

