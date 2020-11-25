class Game{
    constructor(){
    
        
    
    }
    getState(){
    
        var countref=database.ref('gameState');
        countref.on("value",(data)=>{
            gameState = data.val()
        })
    }
    
    updateState(state){
    
        database.ref('/').update({
            gameState : state
        })
    }

    start(){
        form=new Form();
        form.display();
        player=new Player();
        player.getCount();    
        car1=createSprite(200,200);
        car2=createSprite(400,200);
        car3=createSprite(600,200);
        car4=createSprite(800,200);
        cars=[car1,car2,car3,car4];
        car1.addImage(car1img);
        car2.addImage(car2img);
        car3.addImage(car3img);
        car4.addImage(car4img);
        
    }

    play(){
        
        clear();
        Player.getPlayerInfo();
        player.getcarsatend();
        form.hide();
        if(allPlayers!==undefined){
            background(groundimg);
            image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
            var x=200;
            var y;
            var index=0;
            for(var p in allPlayers){
                index=index+1;
                x=x+200;
               y=displayHeight-allPlayers[p].distance;
               cars[index-1].x=x;
               cars[index-1].y=y; 
               if(index===player.index){
                   cars[index-1].shapeColor="red";
                   camera.position.x=displayWidth/2;
                   camera.position.y=cars[index-1].y;

               }
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+10;
            player.update();
        }
        if(player.distance>4050){
            gameState=2;
            player.rank=player.rank+1;
            player.updatecarsatend(player.rank);
     //       rank=player.rank;
        
        }
        drawSprites();
    }
    end(){
    console.log("gameended");
        form.end();
    }
    }