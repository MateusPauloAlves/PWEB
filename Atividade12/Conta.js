// Função tipo Conta
function Conta(nomeCorrentista, banco, numeroDaConta, saldo) {
    this.nomeCorrentista = nomeCorrentista;
    this.banco = banco;
    this.numeroDaConta = numeroDaConta;
    this.saldo = saldo;
  }
  
  Conta.prototype.getNomeCorrentista = function() {
    return this.nomeCorrentista;
  };
  
  Conta.prototype.setNomeCorrentista = function(nomeCorrentista) {
    this.nomeCorrentista = nomeCorrentista;
  };
  
  Conta.prototype.getBanco = function() {
    return this.banco;
  };
  
  Conta.prototype.setBanco = function(banco) {
    this.banco = banco;
  };
  
  Conta.prototype.getNumeroDaConta = function() {
    return this.numeroDaConta;
  };
  
  Conta.prototype.setNumeroDaConta = function(numeroDaConta) {
    this.numeroDaConta = numeroDaConta;
  };
  
  Conta.prototype.getSaldo = function() {
    return this.saldo;
  };
  
  Conta.prototype.setSaldo = function(saldo) {
    this.saldo = saldo;
  };
  
  // Funções Corrente e Poupança
  class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroDaConta, saldo, saldoEspecial) {
      super(nomeCorrentista, banco, numeroDaConta, saldo);
      this.saldoEspecial = saldoEspecial;
    }
  
    getSaldoEspecial = function() {
      return this.saldoEspecial;
    };
  
    setSaldoEspecial = function(saldoEspecial) {
      this.saldoEspecial = saldoEspecial;
    };
  }
  
  class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroDaConta, saldo, juros, dataVencimento) {
      super(nomeCorrentista, banco, numeroDaConta, saldo);
      this.juros = juros;
      this.dataVencimento = dataVencimento;
    }
  
    getJuros = function() {
      return this.juros;
    };
  
    setJuros = function(juros) {
      this.juros = juros;
    };
  
    getDataVencimento = function() {
      return this.dataVencimento;
    };
  
    setDataVencimento = function(dataVencimento) {
      this.dataVencimento = dataVencimento;
    };
  }
  
  // Criação de objetos
  const contaCorrente = new Corrente("Fulano de Tal", "Banco do Brasil", "1234-5678-9012-3456", 1000, 500);
  const contaPoupanca = new Poupanca("Ciclano de Tal", "Caixa Econômica Federal", "9876-5432-1098-7654", 2000, 10, new Date());
  
  // Exibindo os dados das contas
  console.log(contaCorrente.getNomeCorrentista()); // Fulano de Tal
  console.log(contaCorrente.getBanco()); // Banco do Brasil
  console.log(contaCorrente.getNumeroDaConta()); // 1234-5678-9012-3456
  console.log(contaCorrente.getSaldo()); // 1000
  console.log(contaCorrente.getSaldoEspecial()); // 500
  
  // Exibindo os dados das contas
  console.log(contaPoupanca.getNomeCorrentista()); // Ciclano de Tal
  console.log(contaPoupanca.getBanco()); // Caixa Econômica Federal
  console.log(contaPoupanca.getNumeroDaConta()); // 9876-5432-1098-7654
  console.log(contaPoupanca.getSaldo()); // 2000
  console.log(contaPoupanca.getJuros()); // 10
  console.log(contaPoupanca.getDataVencimento()); // 2023-07-20T00:00:00.000Z