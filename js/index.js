function init() {
	console.log("init local-db")
	fetch("db.json")
        .then((r)=>{
            return r.json() 
        })
		then(j=>{
			console.dir(j)
		})
        .catch(e=>{
            console.log(e)
        })	
}
