var fs = require('fs');

var data = fs.readFileSync('./main.css', 'utf-8'); //Запись в строку стилей css




/*Функция, которая создает новую строку на основе принятой строки. Из строки убераем часть строки, которая в фигурных скобках*/
function clearCharCode(data) {
     var flags = false; var number = 1;
	 var clearData = new String();
for(var i=0; i<data.length; i++){
	if(data[i]=='{'){
		flags = true; 
		
	}else if(data[i] =='}'){
		flags= false;
	} 
	else if(flags==false && data[i] !='}'){
		clearData +=data[i];
	}
  }
    return clearData;
}



/*Функция для удаления лишних символов из строки имен классов(точки, запятые, лишние пробелы, обрезаю по бокам пробелы)*/
function deletePoints(data){
     data = data.replace(/\.|\,/gi, ""); //Удаляем точки и запятые
     data= data.replace(/\s{2}/gi, " "); //Удаляем лишние пробелы
	 data = data.trim();//Обрезаем лишние пробелы
	 return data;
}


//Функция обфускатор
function obfuscator(word){	
	var symbol = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
	var num = 6;
	var newnameclass= '';
	var temp=0;
	for(var i=0; i<word.length; i++){	
	   if(word[i]==" "){
			newnameclass+=" ";
			continue;			
	   }
	     
	   
	   else if(i==0 && symbol.indexOf(word[i]) <52) 
	   {
		    temp=symbol.indexOf(word[i])+num;
	       newnameclass+=symbol[temp];
	     }  
	   else{  
	           temp = symbol.indexOf(word[i])+num;
				 if(symbol.indexOf(word[i]) > 63) {
					temp = symbol.indexOf(word[i])+num;
					newnameclass+=symbol[temp];
				} else 
				newnameclass+=symbol[temp];
	   } 
	}
	return newnameclass;//Возвращаю строку с новыми обфусцированными именами классов CSS	
}


function objNewCss(data, newData){
      var obj = {};
	  for(i=0;i<data.length; i++){
			obj.data[i] = this.newData[i];
	  }
	  return obj;

} 
//Создадим  Объект обфусцированных классов

function createArrayStyleName(data){
      var allstylecss = data.split(" ");
	  for(var i=0;i<allstylecss.length;i++){
	  }
	  return allstylecss;
}  


module.exports = function (data) {
	var clearData = clearCharCode(data);
	var deletePoint =deletePoints(clearData);
	var spacedelete = createArrayStyleName (deletePoint);
	var newclass = obfuscator(spacedelete);
	objNewCss(spacedelete, newclass);
    
    return objNewCss;
}; 



//Запуск тестов:
//Вызываю функцию чистки символов
 document.write(style);
 var clear = new String();
 clear = clearCharCode(style);
//Отображаю результат работы функции чистки
 document.write('<br>'+clear+'<br>');	
  var deleteChar = deletePoints(clear);
//Убираю из строки символы точки, запятой, табуляции, обрезаю по бокам пробелы
  document.write('<br>'+deleteChar+'<br>');
//Запускаю функцию обфускатор
 document.write(obfuscator(deleteChar));
// obfuscator();
document.write(deleteChar.length);
	



