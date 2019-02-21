class _Operacion{
	constructor(_numero1,_numero2){
		this.numero1 = _numero1;
        this.numero2 = _numero2;
	}
	sumar()
	{
		var objetoenviar = this;
		return new Promise(function(resolve,reject){
			try{
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Asumar');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if (xhr.status === 200){
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
                xhr.send(JSON.stringify(objetoenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}
	restar()
	{
		var objetoenviar = this;
		return new Promise(function(resolve,reject){
			try{
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Arestar');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if (xhr.status === 200){
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
                xhr.send(JSON.stringify(objetoenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}
	multi()
	{
		var objetoenviar = this;
		return new Promise(function(resolve,reject){
			try{
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Amulti');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if (xhr.status === 200){
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
                xhr.send(JSON.stringify(objetoenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}
	div()
	{
		var objetoenviar = this;
		return new Promise(function(resolve,reject){
			try{
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Adiv');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if (xhr.status === 200){
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
                xhr.send(JSON.stringify(objetoenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}
}