var alunos = ['Pedor', 'Calos', 'Paula', 'Bruna'];

alunos = alunos.map(aluno => new Aluno(aluno));

alunos[0].adicionarNotas(5,10,8,5);
alunos[1].adicionarNotas(5,2,10,10);
alunos[2].adicionarNotas(4,5,6,10);
alunos[3].adicionarNotas(10,10,5,2);

var listaAlunos = new ListaAlunos(alunos);
var listaAlunosView = new ListaAlunosView('#listaAlunos');
listaAlunosView.atualiza(listaAlunos);

var listaAlunosController = new ListaAlunosController(listaAlunos, listaAlunosView);