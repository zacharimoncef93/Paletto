MonTestCase= TestCase(" MonTestCase ");

MonTestCase.prototype.testHistoire1=function (){
    var game = new Paletto();
    game.start;
    assertTrue (game.getCasepleine()==36);
};
