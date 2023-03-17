// // Dados do gráfico
// var data = {
// 	labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
// 	datasets: [
// 		{
// 			label: "Vendas",
// 			backgroundColor: "rgba(255,99,132,0.2)",
// 			borderColor: "rgba(255,99,132,1)",
// 			borderWidth: 1,
// 			hoverBackgroundColor: "rgba(255,99,132,0.4)",
// 			hoverBorderColor: "rgba(255,99,132,1)",
// 			data: [10, 20, 30, 40, 50, 60],
// 		}
// 	]
// };

// // Configurações do gráfico
// var options = {
// 	responsive: true,
// 	maintainAspectRatio: false
// };

// // Criação do gráfico
// var ctx = document.getElementById("myChart").getContext("2d");
// var myChart = new Chart(ctx, {
// 	type: 'bar',
// 	data: data,
// 	options: options
// });
// Dados do gráfico
// var data = {
// 	labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
// 	datasets: [
// 		{
// 			data: [10, 20, 30, 40, 50, 60],
// 			backgroundColor: [
// 				"#FF6384",
// 				"#36A2EB",
// 				"#FFCE56",
// 				"#C9DE55",
// 				"#4BC0C0",
// 				"#9966FF"
// 			],
// 			hoverBackgroundColor: [
// 				"#FF6384",
// 				"#36A2EB",
// 				"#FFCE56",
// 				"#C9DE55",
// 				"#4BC0C0",
// 				"#9966FF"
// 			]
// 		}
// 	]
// };
// Configurações do gráfico
// var options = {
// 	responsive: true,
// 	maintainAspectRatio: false
// };

// // Criação do gráfico
// var ctx = document.getElementById("myChart").getContext("2d");
// var myChart = new Chart(ctx, {
// 	type: 'pie',
// 	data: data,
// 	options: options
// });
const cadastroBtn = document.getElementById("cadastro-btn");
const modalCadastro = document.getElementById("modal-cadastro");
const closeCadastro = document.getElementsByClassName("close")[0];

cadastroBtn.onclick = function() {
  modalCadastro.style.display = "block";
}

closeCadastro.onclick = function() {
  modalCadastro.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalCadastro) {
    modalCadastro.style.display = "none";
  }
}
