var o=['अ','आ','इ','ई','उ','ऊ','ए','ऐ','ओ','औ','क','ख','ग','घ','ङ','च','छ','ज','झ','ञ','ट','ठ','ड','ढ','ण','त','थ','द','ध','न','प','फ','ब','भ','म','य','र','ल','व','श','ष','स','ह'];
var matra=['ा','ि','ी','ु','ू','ृ',' ॄ','ॅ','े','ै','ॉ','ो','ौ']
var getElementId=[11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55];
var get=[111,112,113,121,122,123,131,132,133,141,142,143,151]
var j=0;
var i=0;
var word='';
var count=0;
var score=0;
var main=['हफ्ता','साल','आज','कल','कैलेंडर','सेकंड','घंटा','मिनट','बजे','घड़ी','सकना','करना','जाना','आना','हसना','बनाना','देखना','दूर','छोटा','सुंदर','बदसूरत','कठिन','अच्छा','आदमी','आप','आशा','और','एक','कमरा','कुरसी','खिड़की','गाड़ी','गुजराती','चाचा','चिड़िया','छोटा','जर्मन','जापानी','ठीक','तीन','तुम','तू','दादी','दूसरा','दो','नहीं','पंखा','पिता','पुराना','बड़ा','बहुत','बहू','बूढ़ा','भारतीय','मकान','माता','मानव','यह','रविवार','राजा','लाल','लोग','वह','हम','हवादार','है','अभी','आज','और','कितना','किताब']
var mainarray=o[0];
console.log(mainarray);

document.getElementById("Score").innerHTML=0;

for(i=0;i<25;i++)
{
	var item = o[Math.floor(Math.random()*(o.length-1))];
	document.getElementById(getElementId[j]).innerHTML = item;
	j++;
}

for(i=0;i<13;i++)
{
	document.getElementById(get[i]).innerHTML = matra[i];
}

function regenerate()
{
	word='';
	j=0;
	document.getElementById("Selectedletter").innerHTML='';
	for(var i=0;i<25;i++)
	{
		var item = o[Math.floor(Math.random()*(o.length-1))];
		document.getElementById(getElementId[j]).innerHTML = item;
		j++;
	}
	document.getElementById("Score").innerHTML=0;
	score=0;
}

function getdata(a,b)
{
	a=a-1;
	b=b-1;
	var data=document.getElementById("tbl").rows[a].cells[b].childNodes[0].innerHTML;
	word=word.concat(data);
	document.getElementById("Selectedletter").innerHTML=word;
}

function getdata1(a,b)
{
	a=a-1;
	b=b-1;
	var data=document.getElementById("tbl1").rows[a].cells[b].childNodes[0].innerHTML;
	word=word.concat(data);
	document.getElementById("Selectedletter").innerHTML=word;
}

function Check()
{
	console.log(word);
	for(var k=0;k<main.length;k++)
	{
		console.log(main[k]);
		if(word==main[k])
		{
		score=score+2;
		document.getElementById("Score").innerHTML=score;
		break;
		}
	}
	word='';
	document.getElementById("Selectedletter").innerHTML='';
}