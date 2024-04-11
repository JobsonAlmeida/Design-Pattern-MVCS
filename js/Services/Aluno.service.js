class AlunosService{
    constructor(){
        this.alunos = []
        this.updateAlunosFromLocalStorage()
    }

    add(aluno){
        if(!aluno instanceof AlunoModel){
            throw TypeError("aluno must be an instance of AlunoModel")
        }
        this.alunos.push(aluno)
        this.updateLocalStorage()
    }

    edit(aluno){
        
        aluno.generateAvarage()
        this.updateLocalStorage()


    }

    searchById(id){
        return this.alunos.find(aluno => {
           return aluno._id === id 
        })
    }

    search(name){
        return this.alunos.filter(aluno => aluno.nome.indexOf(name)>=0)
    }

    updateLocalStorage(){
        const alunos = JSON.stringify(this.alunos)
        localStorage.setItem("alunos", alunos)
    }

    updateAlunosFromLocalStorage(){
        const local = localStorage.getItem("alunos")

        if(local){
            const alunos = JSON.parse(local)

            // this.alunos = alunos

            alunos.forEach(aluno => {
                this.add(new AlunoModel(aluno))
            })
        }

        
    }
}