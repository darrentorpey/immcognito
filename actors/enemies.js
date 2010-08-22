
//walkPath element 0 should be the start location of this enemy
//need variable for tile size
function addEnemies()
{
    create_enemy( [ {x: (TILE_WIDTH * 20), y: (TILE_WIDTH * 20) }, 
    {x: (TILE_WIDTH * 20), y: (TILE_WIDTH * 25)} ,
    {x: (TILE_WIDTH * 30), y: (TILE_WIDTH * 25)} ,
    {x: (TILE_WIDTH * 30), y: (TILE_WIDTH * 20)} ],
    "enemy_1", "guard"
    );
    
    create_enemy( [ {x: (TILE_WIDTH * 30), y: (TILE_WIDTH * 30) }, 
    {x: (TILE_WIDTH * 30), y: (TILE_WIDTH * 35)} ,
    {x: (TILE_WIDTH * 40), y: (TILE_WIDTH * 35)} ,
    {x: (TILE_WIDTH * 40), y: (TILE_WIDTH * 30)} ],
    "enemy_2", "boss"
    );
}

function create_enemy(walkPath, myID, myType) {
    gbox.addObject({
    id:      myID,    // id refers to the specific object.
    group:   'enemy',       // The rendering group
    //Put in an if statement to set the tileset
    tileset: 'enemy_tiles', // tileset is where the graphics come from.
    colh:    gbox.getTiles('enemy_tiles').tileh,
    walkIndex : 0,
    steps : walkPath,
    type : myType,
    turning : true,
    testDetection : 0,
    sightRange : 30,
    theta : 90,
    
    ///For debugging purposes
    testHealth: 100,

    initialize: function() {
      toys.topview.initialize(this, {});
      this.x = this.steps[0].x;
      this.y = this.steps[0].y;
    },

    first: function() {
        /*
        if(this.type == "guard"){
            //Use guard tileset
        }else{
            //Use boss tileset
        }
        
        */   
    
        this.take_step();
        this.checkSight();
    },
    
    take_step: function() { 
        var compareTo;      
        
        if(this.turning){        
            if(this.walkIndex < this.steps.length-1){
                compareTo = this.walkIndex + 1;
                turning = false;
            }else{
                compareTo = 0;
                turning = false;
            }
        }
        
        if (this.steps[this.walkIndex].x > this.steps[compareTo].x){
            //If walking to the left
            if (this.x >=this.steps[this.walkIndex].x){
                //If you overshoot to the left
                this.x =this.steps[this.walkIndex].x;
                this.walkIndex = compareTo;
                this.turning = true;
            }
            
            this.x++;                         
            this.theta = 180;
        }
        
        else if (this.steps[this.walkIndex].x <this.steps[compareTo].x){
            //If walking to the right
            if (this.x <=this.steps[this.walkIndex].x){
                //If you overshoot to the right
                this.x =this.steps[this.walkIndex].x;
                this.walkIndex = compareTo;
                this.turning = true;
            }else{
                this.x--;
            } 
                
            this.theta = 0;
        }
        
        else if (this.steps[this.walkIndex].y >this.steps[compareTo].y){
            //If walking up ?
            if (this.y >=this.steps[this.walkIndex].y){
                //If you overshoot to the right
                this.y =this.steps[this.walkIndex].y;
                this.walkIndex = compareTo;
                this.turning = true;
            }else{
                this.y++;
            }       
            
            this.theta = 270;
        }
        
        else if (this.steps[this.walkIndex].y <this.steps[compareTo].y){
            //If walking down       
            if (this.y <=this.steps[this.walkIndex].y){
                //If you overshoot to the right
                this.y =this.steps[this.walkIndex].y;
                this.walkIndex = compareTo;
                this.turning = true;
            }else{
                this.y--;
            }
            
            this.theta = 90;
        }                            
    },
    
    checkSight : function() {
        var convertedAngle = radToDeg( trigo.getAngle( {x: player.x, y: player.y}, {x: this.x, y: this.y} ) );        
        if( (convertedAngle < this.theta+15) && (convertedAngle > this.theta-15)){   
            
            if(this.type == "guard"){
                /*
                if(working){
                    //Increase boss happiness
                }else{
                    //Decrease boss hapiness
                }
                
                */
                
            }else if(this.type == "boss"){
                maingame.playerDied({wait:10}); 
            }else{
            }
        }
    },

    blit: function() {
      gbox.blitTile(gbox.getBufferContext(), {
        tileset: this.tileset,
        tile:    this.frame,
        dx:      this.x,
        dy:      this.y,
        fliph:   this.fliph,
        flipv:   this.flipv,
        camera:  this.camera,
        alpha:   1.0
      });
    }
  });
}
