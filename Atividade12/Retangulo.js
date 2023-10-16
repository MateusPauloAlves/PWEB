// Função construtora para o Retangulo
class Retangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

objRetangulo = new Retangulo(10, 5);
alert(objRetangulo.calcularArea());