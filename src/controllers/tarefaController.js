// CONTROLLER: recebe da rota, chama o service e devolve a resposta.

const validarId = require("../middlewares/validarId");
const tarefaService = require("../services/tarefaService");

// As funcoes do controller entram aqui.

async function listar(req, res) {
const tarefas = await tarefaService.listarTarefas(req.query);
res.status(200).json(tarefas);
}

async function buscarPorId(req, res) {
const tarefa = await tarefaService.buscarTarefaPorId(req.params.id);
if (!tarefa) {
res.status(404).json({ erro: "Tarefa nao encontrada" });
return;
}
res.status(200).json(tarefa);
}
async function criar(req, res) {
const novaTarefa = await tarefaService.criarTarefa(req.body);
res.status(201).json(novaTarefa);
}
async function atualizar(req, res) {
  const tarefa = await tarefaService.atualizarTarefa(req.params.id, req.body);
  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }
  res.status(200).json(tarefa);
}
async function atualizarParcial(req, res) {
  const tarefa = await tarefaService.atualizarParcialTarefa(req.params.id, req.body);
  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }
  res.status(200).json(tarefa);
}
async function deletar(req, res) {
  const indice = req.params.indice;
res.status(204).send()
  if (isNaN(indice)) {
    res.status(400).json({ erro: "O id enviado deve ser um número válido" });
    return;
  }
}

module.exports = {listar, buscarPorId, criar ,atualizar,atualizarParcial, deletar};