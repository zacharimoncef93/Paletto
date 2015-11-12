MonTestCase= TestCase(" MonTestCase ");

MonTestCase.prototype.testHistoire1=function (){
    var game = new Paletto();
    game.start();
    assertTrue (game.getCasepleine()==36);
};
MonTestCase.prototype.testHistoire2=function (){
    var game = new Paletto();
    game.start();
    assertTrue (game.getcase("jaune",1,0,1)==true);
};
MonTestCase.prototype.testHistoire3=function (){
    var game = new Paletto();
    game.start();
    assertTrue (game.getcase("jaune",5,0,1)==true);
};
MonTestCase.prototype.testHistoire4=function (){
    var game = new Paletto();
    game.start();
    assertTrue (game.getcase("jaune",1,0,1)==true);
    assertTrue (game.getcase("noire",0,0,2)==true);
    assertTrue (game.getcase("noire",5,5,2)==true);
};

