var tile_Array = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
var status_Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var Firstclick_Value = null;
var Firstclick_Id;
var No_Clicks = 0;
var Final_Reuslt = null;

function Shuffle(tile_Array) {
    var index2, index1, index;
    for (index = tile_Array.length; index > 0; index--) {
        index2 = Math.floor(Math.random() * index);
        index1 = tile_Array[index - 1];
        tile_Array[index - 1] = tile_Array[index2];
        tile_Array[index2] = index1;
    }
}

function Start_App() {
	Shuffle(tile_Array);
}

window.onload = Start_App();

function On_Click(event,value,id) {
	if(Firstclick_Value == null) {
		event.target.innerText = tile_Array[id-1];
		Firstclick_Value = event.target.innerText;
		Firstclick_Id = id;
	} else {
		event.target.innerText = tile_Array[id-1];
		if(event.target.innerText == Firstclick_Value) {
			status_Array[id-1] = 1;
			status_Array[Firstclick_Id-1] = 1;
			Firstclick_Id = null;
			Firstclick_Value = null;
			No_Clicks++;
			if(status_Array.every(function(num) {return num == 1;})) {
				document.getElementById("Final_Result").innerHTML = "game complete!! \n number of moves taken = " + No_Clicks ;
			}
		} else {
			event.target.innerText = tile_Array[id-1];
			setTimeout(function(){
				document.getElementById(Firstclick_Id).innerHTML ='';
				event.target.innerText = '';
				Firstclick_Id = null;
				Firstclick_Value = null;
				No_Clicks++;
			},200);
		}		
	}
}