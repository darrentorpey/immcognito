
//walkPath element 0 should be the start location of this enemy
//need variable for tile size
function addEnemies()
{
    create_enemy( [ {x: (TILE_WIDTH * 20), y: (TILE_WIDTH * 20) }, 
    {x: (TILE_WIDTH * 20), y: (TILE_WIDTH * 25)} ,
    {x: (TILE_WIDTH * 30), y: (TILE_WIDTH * 25)} ,
    {x: (TILE_WIDTH * 30), y: (TILE_WIDTH * 20)} ]
    );
}

function create_enemy(walkPath) {
    gbox.addObject({
    id:      'enemy_1',    // id refers to the specific object.
    group:   'enemy',       // The rendering group
    tileset: 'enemy_tiles', // tileset is where the graphics come from.
    colh:    gbox.getTiles('enemy_tiles').tileh,
    walkIndex : 0,
    steps : walkPath,
    turning : true,
    //sightSquare : [ { x: this.x - (TILE_WIDTH * 2) , y: this.y + (TILE_WIDTH * 5) }, {x: this.x + (TILE_WIDTH * 3), y: 0} ],

    initialize: function() {
      toys.topview.initialize(this, {});
      this.x = this.steps[0].x;
      this.y = this.steps[0].y;
    },

    first: function() {
        this.take_step();
        
       // ctx.fillStyle = "rgb(200,0,0)";  
        //ctx.fillRect (10, 10, 55, 50);  
        
        
    },
    
    take_step: function() { 
      //  debugger;
        var compareTo;           
        //Compare indecies
        
        if(this.turning){        
            if(this.walkIndex < this.steps.length-1){
                compareTo = this.walkIndex + 1;
                turning = false;
            }else{
                compareTo = 0;
                turning = false;
            }
        }
      //  debugger;
        
        if (this.steps[this.walkIndex].x > this.steps[compareTo].x){
            //If walking to the left
            if (this.x >=this.steps[this.walkIndex].x){
                //If you overshoot to the left
                this.x =this.steps[this.walkIndex].x;
                this.walkIndex = compareTo;
                this.turning = true;
            }
            
            this.x++;
            
            //Re-orient the sightSquare
            //sightSquare = [ {x: (this.x + (TILE_WIDTH * -2)) , y: (this.y + (TILE_WIDTH * 5)}, {x: (this.x + (TILE_WIDTH * 3), y: 0} ],                          
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
            
            //Re-orient the sightSquare
            //sightSquare = [ {x: 0, y: (this.y + (TILE_WIDTH * 2)}, {x: (this.x + (TILE_WIDTH * -5), y: (this.y + (TILE_WIDTH * -3)} ],       
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
            
            //Re-orient the sightSquare
            //sightSquare = [ {x: (this.x - (TILE_WIDTH * 2)) , y: (this.y + (TILE_WIDTH * 5)}, {x: (this.x + (TILE_WIDTH * 3), y: 0} ], 
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
            
            //Re-orient the sightSquare
            //sightSquare = [ {x: (this.x - (TILE_WIDTH * 2)) , y: (this.y + (TILE_WIDTH * 5)}, {x: (this.x + (TILE_WIDTH * 3), y: 0} ], 
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
       
       /* 
        
       return {
            this.walkIndex: 1,
            steps: walkPath,
            //Defines upper right and lower left coordinates
            sightSquare = [ {x: (this.x - (tileLength * 2)) , y: (this.y + (tileLength * 5)}, {x: (this.x + (tileLength * 3), y: 0} ],
            //sightSquare defaults to facing UP
            //REMINDER TO SELF: sightSquare needs to adjust based on facing direction of enemy
                 
            take_step: function() {            
                //Compare indecies
                
                if(this.walkIndex <= steps.length-1){
                    compareTo = this.walkIndex + 1;
                }else{
                    compareTo = 0;
                }
                
                if (steps[this.walkIndex].x > steps[compareTo].x){
                    //If walking to the left
                    if (this.x >= steps[this.walkIndex].x){
                        //If you overshoot to the left
                        this.x = steps[this.walkIndex]x;
                        this.walkIndex = compareTo;
                    }
                    
                    //Re-orient the sightSquare
                    sightSquare = [ {x: (this.x + (tileLength * -2)) , y: (this.y + (tileLength * 5)}, {x: (this.x + (tileLength * 3), y: 0} ],                          
                }
                
                else if (steps[this.walkIndex].x < steps[compareTo].x){
                    //If walking to the right
                    if (this.x <= steps[this.walkIndex].x){
                        //If you overshoot to the right
                        this.x = steps[this.walkIndex].x;
                        this.walkIndex = compareTo;
                    } 
                    
                    //Re-orient the sightSquare
                    sightSquare = [ {x: 0, y: (this.y + (tileLength * 2)}, {x: (this.x + (tileLength * -5), y: (this.y + (tileLength * -3)} ],       
                }
                
                else if (steps[this.walkIndex].y > steps[compareTo].y){
                    //If walking up ?
                    if (this.y >= steps[this.walkIndex].y){
                        //If you overshoot to the right
                        this.y = steps[this.walkIndex].y;
                        this.walkIndex = compareTo;
                    }       
                    
                    //Re-orient the sightSquare
                    sightSquare = [ {x: (this.x - (tileLength * 2)) , y: (this.y + (tileLength * 5)}, {x: (this.x + (tileLength * 3), y: 0} ], 
                }
                
                else if (steps[this.walkIndex].y < steps[compareTo].y){
                    //If walking down       
                    if (this.y <= steps[this.walkIndex].y){
                        //If you overshoot to the right
                        this.y = steps[this.walkIndex].y;
                        this.walkIndex = compareTo;
                    }
                    
                    //Re-orient the sightSquare
                    sightSquare = [ {x: (this.x - (tileLength * 2)) , y: (this.y + (tileLength * 5)}, {x: (this.x + (tileLength * 3), y: 0} ], 
                }                               
            } 
      }
    }
    
    function make_boss(steps) {
      enemy = make_enemy();
      enemy.steps = steps;
      enemy.do_specific_stuff = function() {
        console.log("I'm a boss!");
      }
    
      return enemy;
    }
    
    function make_guard() {
      enemy = make_enemy();
      enemy.do_specific_stuff = function() {
        console.log("I'm a guard!");
      }
    
      return enemy;
    }
    
    var boss = make_boss();
    boss.do_stuff();
    
    var guard = make_guard();
    guard.do_stuff();
    */
