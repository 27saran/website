

  var word='';
  var incorrect=[];
  var correctWords=[];
  var maxGuss="";
const inputs=document.querySelector(".inputs");
resetBtn=document.querySelector(".reset_btn");
hint=document.querySelector(".hint span");
gussLeft=document.querySelector(".guss_left span")
wrongLetter=document.querySelector(".wrong-letters span")
typingInput=document.querySelector(".typing-input")

const wordList=[{
	word:"python",
	hint:"programing language"
},{
	word:"guitar",
	hint:"a musical instrunment"
},{
	word:"aim",
	hint:"a purpose or intention"
},{
	word:"venus",
	hint:"planet of our solar system"
},{
	word:"server",
	hint:"related to computer system"
},{
	word:"search",
	hint:"act to find something"
}];
function randomWord(){
	let ranObj=wordList[Math.floor(Math.random()*wordList.length)];
	 word=ranObj.word
	 maxGuss=6;
	 correctWords=[];
	 incorrect=[];
	console.log(word);
	hint.innerText=ranObj.hint;
	gussLeft.innerText=maxGuss;
	wrongLetter.innerText=incorrect;
	let html='';
	for(let i=0;i<word.length;i++){
		html+=`<input type="text" disabled>`
	}
	inputs.innerHTML=html;
}
randomWord();
function initGame(e){
	let key=e.target.value;
	if(key.match(/^[A-Za-z]+$/) && !incorrect.includes(key)&& !correctWords.includes(key))
	{
		if(word.includes(key)){
			for(let i=0;i<word.length;i++)
			{
				if(word[i]===key)
				{
					correctWords.push(key)
					inputs.querySelectorAll("input")[i].value=key;
				}
			}
		}
		else
		{
			maxGuss--;
			incorrect.push(key);
		}
			wrongLetter.innerText=incorrect;
			gussLeft.innerText=maxGuss;

	}
	typingInput.value='';
	if(correctWords.length===word.length)
	{
      alert(`congrats! you found the word ${word.toUpperCase()}`);
      randomWord();
	}

	else if(maxGuss<1)
	{
		alert("Game over! you dont have remaining guss");
		for(let i=0;i<word.length;i++)
		{
			inputs.querySelectorAll("input").value=word[i];
		}
	}
}
resetBtn.addEventListener("click",randomWord);
typingInput.addEventListener("input",initGame);
inputs.addEventListener("keydown",()=>typingInput.focus());
document.addEventListener("keydown",()=>typingInput.focus());
