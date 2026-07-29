function createTable() {
    //Write your code here
	let table=document.querySelector('#myTable');
	let row=Number(prompt('Input number of rows'));
	let column=Number(prompt('Input number of columns'));
	if(row<=0){
		alert('cannot create table');
		return;
   }
	if(row === null ||  Number.isNan(row)){
		return;
	}
	table.innerHTML="";
	 for(let i=0;i<row;i++){
		 let tr=document.createElement('tr');
		 for(let j=0;j<column;j++){
			 let td=document.createElement('td');
			 td.textContent=`Row-${i} Column-${j}`;
			 tr.append(td);
    }
		 table.append(tr);
   }
  
}
