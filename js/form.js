class Form{
    constructor(){
        
    }
    display(){
        var title = createElement('h2');
        title.html("survey");
        title.position(400,0);

        var inputname = createInput("name");
        inputname.position(400,160);

        var inputemail = createInput("email id");
        inputemail.position(400,200);
        
        var button = createButton("vote");
        button.position(520,250);

        var greeting = createElement('h3');

        var question = createElement('h4');
        var yes = createButton("yes");
        var no = createButton("no");
        var question1 = createElement('h4');
        var yes1 = createButton("yes");
        var no1 = createButton("no");

        button.mousePressed(
            function(){
                inputname.hide();
                inputemail.hide()
                button.hide();

                var name = inputname.value();
                var email = inputemail.value();

                voterCount+=1;
                voter.update(email);
                voter.updateCount(voterCount);

                greeting.html("Hello "+name);
                greeting.position(400,30);

                question.html("Do you think we should donate money to corona fund?");
                question.position(370,100);
                yes.position(370,175);
                no.position(410,175);
                question1.html("Will you donate above 1000 rupees?");
                question1.position(370,225);
                yes1.position(370,300);
                no1.position(410,300);
            }
        )
        yes.mousePressed(arr.push("yes"));
        no.mousePressed(arr.push("no"));
        yes1.mousePressed(arr.push("yes"));
        no1.mousePressed(arr.push("no"));
    }
}
