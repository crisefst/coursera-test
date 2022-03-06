var names=new Array();
names[0]="Cris";
names[1]="Json";
names[2]="Anna";
names[3]="JS";
names[4]="Mike";
names[5]="Tatiana";
names[6]="Stef";
names[7]="Steve";
names[8]="RandomName";
names[9]="Tupac";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}