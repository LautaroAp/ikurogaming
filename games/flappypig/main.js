// Create our 'main' state that will contain the game

var mainState = {

	preload: function(){
		// This function will be executed at the beginning     
        // That's where we load the images and sounds

		// Load the bird
		game.load.image('bird', 'assets/bird.png');

		// Load the images
		game.load.image('pipe', 'assets/pipe.png');
		game.load.image('pig1', 'assets/pig1.png');
		game.load.image('pig2', 'assets/pig2.png');
		game.load.image('pig3', 'assets/pig3.png');

		// Load sound
		game.load.audio('jump', 'assets/jump.wav');
		game.load.audio('hit', 'assets/hit.wav');

	},

	create: function(){
		// This function is called after the preload function     
        // Here we set up the game, display sprites, etc.

        // If this is not a desktop (so it's a mobile device) 
		if (game.device.desktop == false) {
		    // Set the scaling mode to SHOW_ALL to show all the game
		    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		    // Set a minimum and maximum size for the game
		    // Here the minimum is half the game size
		    // And the maximum is the original game size
		    game.scale.setMinMax(game.width/2, game.height/2, 
		        game.width, game.height);

		    // Center the game horizontally and vertically
		    game.scale.pageAlignHorizontally = true;
		    game.scale.pageAlignVertically = true;
		}

		// Change the background color of the game to blue
	    game.stage.backgroundColor = '#71c5cf';

	    // Set the physics system
	    game.physics.startSystem(Phaser.Physics.ARCADE);

	    // Display the bird at the position x=100 and y=245
	    this.bird = game.add.sprite(100, 245, 'bird');

	    // Add physics to the bird
	    // Needed for: movements, gravity, collisions, etc.
	    game.physics.arcade.enable(this.bird);

	    // Add gravity to the bird to make it fall
	    this.bird.body.gravity.y = 1000;  

	    // Call the 'jump' function when the spacekey is hit
	    var spaceKey = game.input.keyboard.addKey(
	                    Phaser.Keyboard.SPACEBAR);
	    				spaceKey.onDown.add(this.jump, this);

	    // Create an empty group for the pipes
	    this.pipes = game.add.group();

	    // Create a timer for call addRowOfPipes every 1.5 seconds
	    this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);

	    // Create a score in the top left
	    this.score = 0;
	    this.labelScore = game.add.text(20, 20, "0", {font: "30px Arial", fill: "#ffffff"});


	    // Move the anchor to the left and downward for the animation
	    this.bird.anchor.setTo(-0.2, 0.5);

	    // Add sound
	    this.jumpSound = game.add.audio('jump');
	    this.hitSound = game.add.audio('hit');

	     // Call the 'jump' function when we tap/click on the screen
		game.input.onDown.add(this.jump, this);

	},

	update: function(){
		// This function is called 60 times per second    
        // It contains the game's logic 

		// If the bird is out of the screen (too high or too low)
	    // Call the 'restartGame' function
	    if (this.bird.y < 0 || this.bird.y > 490)
	        this.restartGame();

	    // Call restartGame() each time the bird collides with a pipe from the pipes group
	    // game.physics.arcade.overlap(this.bird, this.pipes, this.restartGame, null, this);

	    // Call hitPipe() each time the bird collides with a pipe from the pipes group
	    game.physics.arcade.overlap(this.bird, this.pipes, this.hitPipe, null, this);

	    // Add fly animation
	    if(this.bird.angle < 20)
	    	this.bird.angle += 1;
	},

	// Make the bird jump 
	jump: function() {
	    // Add a vertical velocity to the bird
	    this.bird.body.velocity.y = -350;

	    // Create an animation on the bird
	    var animation = game.add.tween(this.bird);

	    // Change the angle of the bird to -20° in 100 milliseconds
	    animation.to({angle: -20}, 100);

	    // Add start the animation
	    animation.start();

	    // Disable jump when the bird is dead
	    if(this.bird.alive == false)
	    	return;

	    // Play sound effect
	    this.jumpSound.play();
	},

	// Restart the game
	restartGame: function() {
	    // Start the 'main' state, which restarts the game
	    game.state.start('main');
	},

	addOnePipe: function(x, y) {
	    // Create a pipe at the position x and y
	    // var pipe = game.add.sprite(x, y, 'pipe');

	    var pig = Math.floor(Math.random() * 10);
	    if(pig < 4)
	    	var pipe = game.add.sprite(x, y, 'pig1')
	    else if(pig < 7)
	    	var pipe = game.add.sprite(x, y, 'pig2')
	    else 
	    	var pipe = game.add.sprite(x, y, 'pig3');
	    



	    // Add the pipe to our previously created group
	    this.pipes.add(pipe);

	    // Enable physics on the pipe 
	    game.physics.arcade.enable(pipe);

	    // Add velocity to the pipe to make it move left
	    pipe.body.velocity.x = -200; 

	    // Automatically kill the pipe when it's no longer visible 
	    pipe.checkWorldBounds = true;
	    pipe.outOfBoundsKill = true;
	},

	addRowOfPipes: function() {
	    // Randomly pick a number between 1 and 5
	    // This will be the hole position
	    var hole = Math.floor(Math.random() * 5) + 1;

	    // Add the 6 pipes 
	    // With one big hole at position 'hole' and 'hole + 1'
	    for (var i = 0; i < 8; i++)
	        if (i != hole && i != hole + 1) 
	            this.addOnePipe(400, i * 60 + 10);

	    // Increase the score each time new pipe is created
	    this.score += 1;
	    this.labelScore.text = this.score; 
	},

	hitPipe: function(){
		// If the bird has already hit a pipe, do nothing
	    // It means the bird is already falling off the screen
	    if (this.bird.alive == false)
	        return;

	    // Set the alive property of the bird to false
	    this.bird.alive = false;

	    // Prevent new pipes from appearing
	    game.time.events.remove(this.timer);

	    // Go through all the pipes, and stop their movement
	    this.pipes.forEach(function(p){
	    	p.body.velocity.x = 0;
	    }, this);

	    // Play sound effect
	    this.hitSound.play();
	},

};

// Initialize Phaser, and create a 400px by 490px game

var game = new Phaser.Game(400, 400);

// Add the 'mainState' and call it 'main'

game.state.add('main', mainState);

// Start the state to actually start the game

game.state.start('main');

