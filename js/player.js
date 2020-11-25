class Player{
constructor(){

    this.name=null;
    this.distance=0;
    this.index=0;
    this.rank=null;

}
getCount(){

    var countref=database.ref('playerCount');
    countref.on("value",(data)=>{
        playerCount = data.val();
    })
}

updateCount(count){

    database.ref('/').update({
        playerCount : count
    })
}
update(){
var playerindex="players/player"+this.index
database.ref(playerindex).set({
    name:this.name,
    distance:this.distance
})
}
static getPlayerInfo(){
    var playerref=database.ref('players');
    playerref.on("value",(data)=>{
        allPlayers=data.val();

    })
    
}
getcarsatend(){
    database.ref('cars_at_end').on("value",(data)=>{
        this.rank=data.val();
    })
}
updatecarsatend(rank){
database.ref('/').update({
  cars_at_end:rank
})

}
}