var myPenguin = {name: "Misha",
origin: "Death and the Penguin, Penguin Lost",
author: "Andrey Kurkov",
notes: "A cheeky penguin who gets in over his head in mafia affairs and political intrigue."
};

console.log("Hello, I'm a penguin and my name is " + myPenguin.name + " !");

myPenguin["canFly"] = false;
console.log(myPenguin.canFly);

myPenguin["chirp"] = function() {
	return "CHIRP CHIRP! Is this what penguins sound like?"
};
console.log(myPenguin.chirp());

myPenguin["sayHello"] = function() {
	return "Hello, I'm a penguin and my name is " + this.name + " !"
};
console.log(myPenguin.sayHello());

myPenguin["name"] = "Penguin McPenguinFace";
console.log(myPenguin.name);

myPenguin["fly"] = function() {
	if (this.canFly === true) {
		return "I can fly!"
	} else {
		return "No flying for me!"
	};
};
console.log(myPenguin.fly());

myPenguin["canFly"] = true;
console.log(myPenguin.fly());

console.log(Object.keys(myPenguin));

// console.log(myPenguin.(keys(myPenguin));