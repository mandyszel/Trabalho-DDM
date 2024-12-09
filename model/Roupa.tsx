export class Roupa{
    public id: string;
    public tipo: string;
    public cor: string;
    public tecido: string;
    public estacao: string;
    public tamanho: string;
    public urlfoto: string;

    constructor(obj?: Partial<Roupa>) {
        if (obj){
            this.id=obj.id
            this.tipo=obj.tipo
            this.cor=obj.cor
            this.tecido=obj.tecido
            this.estacao=obj.estacao
            this.tamanho=obj.tamanho
            this.urlfoto=obj.urlfoto
        }
    }

    toString(){
        const objeto=`{
            "id":       "${this.id}",
            "tipo":     "${this.tipo}",
            "cor":     "${this.cor}",
            "tecido":     "${this.tecido}",
            "estacao":     "${this.estacao}",
            "tamanho": "${this.tamanho}",
            "urlfoto":  "${this.urlfoto}"
        }`
        return objeto
    }

    toFirestore(){
        const roupa={
            id: this.id,
            tipo: this.tipo,
            cor: this.cor,
            tecido: this.tecido,
            estacao: this.estacao,
            tamanho: this.tamanho,
            urlfoto: this.urlfoto
        }
        return roupa
    }

}