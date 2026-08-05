// seleciona os elementos do formulario//
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')

//captura o elemento de input para formatar o valor
amount.oninput = () => {
  //obtem o valor atual do input e remove os caracteres não numéricos usando uma expressão regular
  let value = amount.value.replace(/\D/g, '')

  //transformar o valor em centavos.
  value = Number(value) / 100
  
  //atualiza o valor do input.
  amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
  value = value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

  //retorna o valor formatado
  return value
}
//Previne o comportamento padrao de recarregar a pagina
form.onsubmit = (event) => {
  event.preventDefault()
//cria um onjeto com os detalhes na nova despesa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  }
//chama a funcao para adicionar a nova despesa
  expenseAdd(newExpense)
}

function expenseAdd (newExpense) {
  try {
    
  } catch (error) {
    alert('Nao foi possivel atualizar a lista de despesas')
    console.log(error)
  }
}