const express = require("express");
const produtoController = require("../controllers/produtoController");
const routes = express.Router();

// routes.get("/", (req, res) => {
// 	console.log(req.query);
// 	res.send("Ola mundo!");
// });

// routes.get("/produto/:id?/:categoria", (req, res) => {
// 	console.log(req.params);
// 	res.send("Ola mundo!");
// });

// routes.post("/cadastrar", (req, res) => {
// 	console.log(req.body);
// 	res.json(req.body);
// });

routes.get("/produto/lista", produtoController.listarProduto);
routes.post("/produto/criar", produtoController.cadastrarProduto);
routes.delete("/produto/:id/deletar", produtoController.deletarProduto);
routes.put("/produto/:id/atualizar", produtoController.atualizarProduto);

module.exports = routes;
