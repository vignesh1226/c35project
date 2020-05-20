class Voter{
    constructor(){

    }
    getCount(){
        var voterno = database.ref('voterCount');
        voterno.on('value',function(number){
            voterCount = number.val();
        })
    }
    updateCount(updateNumber){
        database.ref('/').update({
            'voterCount':updateNumber
        })
    }
    update(email){
        var voterIndex = "voter"+voterCount;
        database.ref(voterIndex).set({
            email:email
        })
    }
}
