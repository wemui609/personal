
if(localStorage.getItem("booklist") == null){
		booklist = [];
	} else{
		booklist = JSON.parse(localStorage.getItem("booklist"));
	}

	function books( realName , name ){

		this.realName = realName;
		this.name = name;

		var result = document.getElementById("result");
		var li = document.createElement("li");

		if (realName == 'Robert J Sawyer'){
			li.innerHTML = this.name + '<br>highly recommended book;'
			result.appendChild(li);
		} else if (name == 'Hominids' || name == 'Humans' || name == 'Hybrids'){
			li.innerHTML = this.name + ' is part of a trilogy';
			result.appendChild(li);
		} else{
			li.innerHTML = this.name+'<br>'+this.realName;
			result.appendChild(li);
		}

		Book = {};
		Book['book'] = name;
		Book['author'] = realName;
		checklist = [];
		for (idh = 0; idh < booklist.length; ++idh){
			checklist.push(booklist[idh].book);
		}
		if (checklist.indexOf(name) == -1){
				booklist.push(Book);
				localStorage.setItem("booklist", JSON.stringify(booklist));
		}

	}

	//new books('Robert J Sawyer', 'Hominds');
	//new books('Robert J Sawyer', 'Humans');


	function addition(){
		n = document.getElementById('name').value;
		r = document.getElementById('rname').value;
		new books(r,n);

		var table = document.getElementById("savedbooks");
		var tr = document.createElement("tr");
		tr.className = "bookw";
		tr.innerHTML = '<td>' + n + '</td><td>' + r + '</td>';
		table.appendChild(tr);

	}

	function buildTB(){
		for (ti = 0; ti < booklist.length; ti++){

			t1 = JSON.parse(localStorage.getItem("booklist"))[ti].book;
			t2 = JSON.parse(localStorage.getItem("booklist"))[ti].author;

			var table = document.getElementById("savedbooks");
			var tr = document.createElement("tr");
			tr.className = "bookw";
			tr.innerHTML = '<td>' + t1 + '</td><td>' + t2 + '</td>';
			table.appendChild(tr);

			console.log(booklist.length,ti,t1,t2);

		}
	}