let to =new Date('may 2 2023 19:00:00');
		function update(){
			let from =new Date();
				diff=to-from;
				if(diff>0){
				let dias=setTwoDigit(Math.floor(diff/1000/60/60/24)),
				horas=setTwoDigit(Math.floor(diff/1000/60/60)%24),
				minutos=setTwoDigit(Math.floor(diff/1000/60)%60),
				segundos=setTwoDigit(Math.floor(diff/1000)%60)
				document.querySelector('#dias').innerText=dias
				document.querySelector('#horas').innerText=horas
				document.querySelector('#minutos').innerText=minutos
				document.querySelector('#segundos').innerText=segundos
			}else{
				clearInterval(interval);
				document.querySelector('body').classList.add('alert')
			}

		}
		
		let interval=setInterval(update,1000)

		function setTwoDigit(argument) {
			return argument>9?argument:'0'+argument;
		}