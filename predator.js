/*
#Predators

Any serious ecosystem has a food chain longer than a single link. Write another critter that survives 
by eating the herbivore critter. You’ll notice that stability is even harder to achieve now that there
are cycles at multiple levels. Try to find a strategy to make the ecosystem run smoothly for at least 
a little while.

One thing that will help is to make the world bigger. This way, local population booms or busts are less
likely to wipe out a species entirely, and there is space for the relatively large prey population needed
to sustain a small predator population.
*/

// Your code here
function Tiger() {
	this.energy = 20
    this.hungry = 0;
}

Tiger.prototype.act = function(view) {
	var space = view.find(" ");
  	var herbi = view.find("O");
  	if(this.energy > 20 && space)
      return {type: "reproduce", direction: space};
  	if (herbi)
      if (this.energy < 60)
        return {type: "eat", direction: herbi};
  	else 
      this.hungry = Math.floor(Math.random() * 2);
  		if (this.hungry)
          return {type: "eat", direction: herbi};
  		else return {type: "move", direction: space};
  	if (space)
      return {type: "move", direction: space};
}

function SmartPlantEater() {
  this.energy = 20;
  this.turn = 0;
}

SmartPlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy > 20 && space)
    return {type: "reproduce", direction: space};
  var plant = view.find("*");
  if (plant)
    if (this.energy > 90)
    	return {type: "move", direction: space};
  	else
      this.turn = Math.floor(Math.random() * 2);
  		if (this.turn) return {type: "eat", direction: plant};
  		else return {type: "move", direction: space};
  if (space)
    return {type: "move", direction: space};
}

animateWorld(new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O @O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "O": SmartPlantEater, // from previous exercise
   "*": Plant}
));
