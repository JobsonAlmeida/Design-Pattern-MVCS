class AlunoModel{
    // constructor(aluno){
    //     this.nome = aluno.nome
    // }

    constructor({nome, _id, notas} = {notas: {}}){
        this.nome = nome
        this._id = (_id !== undefined) ? _id: this.generateId()
        this.notas = {...notas}

        if(this._id > AlunoModel.maxId){
            AlunoModel.maxId = this._id
        }

        this.media = {} 

       this.generateAvarage()
 
    }

    generateId(){
        return AlunoModel.maxId + 1
    }

    generateAvarage(){

        for(let materia in this.notas){        
            this.media[materia] = avarege(...this.notas[materia])
        }
    }
}

AlunoModel.maxId = 0 