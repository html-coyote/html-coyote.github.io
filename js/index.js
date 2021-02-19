function init() {
	console.log("init local-db")
	fetch("db.json")
        .then((r)=>{
            console.dir(r.json())
        })
        .catch(e=>{
            console.log(e)
        })	
}
