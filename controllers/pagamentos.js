module.exports = function(app) {
  app.get("/teste", function(req, resp) {
    console.log("Requisicao de test");
    resp.send("ok");
  });

  app.get("/pagamentos", function(req, resp) {
    console.log("Requisicao de test");
    resp.send("entrou nos pagamentos ");
  });
  app.post("/pagamentos/pagamento", function(req, resp) {
    let pagamento = req.body;
    console.log("processando requisicao de um novo pagamento ");

    pagamento.status = "criado";
    pagamento.data = new Date();

    let connection = app.persistencia.connectionFactory();
    let PagamentoDao = new app.persistencia.pagamentoDao(connection);

    PagamentoDao.salva(pagamento, function(erro, resultado) {
      console.log("pagamento criado");
      resp.json(pagamento);

      PagamentoDao.lista(function(erro, resultado) {
        resp.send(resultado);
      });
    });
  });
};
