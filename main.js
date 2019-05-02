function fibonacci() {
	
	var n1 = 0,
		n2 = 1,
		number;
	
	do
	{
		number = prompt("Enter how long the sequence will be!");
		
		if (number == null)
		{
			return;
		}
	}
	while (number <= 0 || isNaN(number) || number == " ");
	
	var show = document.getElementById('show');
	
	show.innerHTML = n1 + ", " + n2;

	for (let i = 2; i < number; i++) 
	{
		let n3 = n1 + n2;
		show.innerHTML += ", " + n3;
		n1 = n2;
		n2 = n3;
	}
}

function clear() {
	document.getElementById('show').removeChild(show.firstChild);
}