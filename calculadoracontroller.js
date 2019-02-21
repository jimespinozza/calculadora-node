class _Operacion{
constructor(_numero1,_numero2){
	this.numero1= _numero1;
	this.numero2= _numero2;
}
sumar()
{
	return this.numero1 + this.numero2
}
restar()
{
	return this.numero1 - this.numero2
}
multi()
{
	return this.numero1 * this.numero2
}
div()
{
	return this.numero1 / this.numero2
}
}
exports.sumar= function(req,res){  //el que trae las variables y req: envia el; usuario y res: la informacion que se devuelve 
	let claseinstanciada = new _Operacion(req.body.numero1,req.body.numero2); //hace un objeto de la clase operacion 
	res.json(claseinstanciada.sumar()); //informacion enviada en json
}
exports.restar= function(req,res){
	let claseinstanciada = new _Operacion(req.body.numero1,req.body.numero2);
	res.json(claseinstanciada.restar());
}
exports.multi= function(req,res){
	let claseinstanciada = new _Operacion(req.body.numero1,req.body.numero2);
	res.json(claseinstanciada.multi());
}
exports.div= function(req,res){
	let claseinstanciada = new _Operacion(req.body.numero1,req.body.numero2);
	res.json(claseinstanciada.div());
}