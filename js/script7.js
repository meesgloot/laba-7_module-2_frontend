let mas = [];
function elem() {
	let num = document.getElementById("input1").value;
	mas.push(num);
	document.getElementById("input1").value = "";
}
function massive() {
	let sum = 0;
	for(let i = 0; i < mas.length; i++) {
		sum += mas[i]*1;
	}
	
	let col = document.getElementById("input2").value;
	
	let prom = new Promise(function(resolve, reject) {
		if(col == sum){
			resolve("Сумма совпадает");
		}else {
			reject("Не совпадает");
		}
	});
	console.log(prom);
		
	document.getElementById("input2").value = "";
}
function fib() {
	let number = document.getElementById("input3").value;
	let fim = [0, 1];
	function* fibonacci(number) {
		if(number > 2){
			for(let i = 2; i < number; i++){
				fim[i] = fim[i - 2] + fim [i - 1];
			}
		}
		let ro = "";
		for(let i = 0; i < number; i++){
			ro += fim[i] + " ";
		}
		yield ro;
	}
	
	let rezult = fibonacci(number);
	console.log(rezult.next());
	
	document.getElementById("input3").value = "";
}
