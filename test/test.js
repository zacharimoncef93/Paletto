MonTestCase= TestCase(" MonTestCase ");
//premiere histoire initialise le plateau et vérifie que tout est remplit
MonTestCase.prototype.testHistoire1=function (){
    var game = new Paletto();
    game.start();
    assertTrue (game.getCasepleine()==36);
};
MonTestCase.prototype.testHistoire2=function (){
    var game = new Paletto();
    game.start();

    assertTrue (game.getcase("jaune",1,0,1)==0);
};
MonTestCase.prototype.testHistoire3=function (){
    var game = new Paletto();
    game.start();
    assertTrue (game.checkcase("jaune",5,0)==true);
    assertTrue (game.getcase("jaune",5,0,1)==0);
};
MonTestCase.prototype.testHistoire4=function (){
    var game = new Paletto();
    game.start();
    assertTrue (game.getcase("jaune",1,0,1)==0);
    assertTrue (game.checkcase("noire",5,5)==true);
    assertTrue (game.checkcase("noire",0,0)==true);
    assertTrue (game.getcase("noire",0,0,2)==0);
    assertTrue (game.getcase("noire",5,5,2)==0);
};
MonTestCase.prototype.testHistoire5=function (){
    var game = new Paletto();
    game.start();
    assertTrue (game.getcase("jaune",1,0,1)==0);
    assertTrue (game.getcase("noire",0,0,2)==0);
    assertTrue (game.getcase("noire",5,5,2)==0);
    //tableau tjrs plein le bleue à 4 voisins
    assertTrue (game.checkcase("bleue",2,2)==false);
};
MonTestCase.prototype.testHistoire6=function (){
    var game = new Paletto();
    game.start();
    //p1
    assertTrue (game.getcase("noire",0,0,1)==0);
    assertTrue (game.getcase("noire",5,5,1)==0);
    //******************************//p2
    assertTrue (game.getcase("vert",0,1,2)==0);
    assertTrue (game.getcase("vert",5,4,2)==0);
    assertTrue (game.getcase("vert",4,5,2)==0);
    //******************************//p1
    assertTrue (game.getcase("jaune",1,0,1)==0);
    assertTrue (game.getcase("jaune",5,0,1)==0);
    //******************************//p2
    assertTrue (game.getcase("bleue",2,0,2)==0);
    //******************************//p1
    assertTrue (game.getcase("blanc",4,0,1)==0);
    assertTrue (game.getcase("blanc",3,5,1)==0);
    assertTrue (game.getcase("blanc",0,5,1)==0);
    assertTrue (game.getcase("blanc",0,2,1)==0);
    //******************************//p2
    assertTrue (game.getcase("rouge",0,4,2)==0);
    assertTrue (game.getcase("rouge",2,5,2)==0);
    assertTrue (game.getcase("rouge",5,3,2)==0);
    assertTrue (game.getcase("rouge",3,0,2)==0);
    //******************************//p1
    assertTrue (game.getcase("bleue",2,3,1)==0);
    assertTrue (game.getcase("bleue",1,5,1)==0);
    assertTrue (game.getcase("bleue",5,1,1)==0);
    //******************************//p2
    assertTrue (game.getcase("jaune",2,1,2)==0);
    assertTrue (game.getcase("jaune",1,4,2)==0);
    assertTrue (game.getcase("jaune",4,4,2)==0);
    //******************************//p1
    assertTrue (game.getcase("noire",3,1,1)==0);
    assertTrue (game.getcase("noire",5,2,1)==0);
    assertTrue (game.getcase("noire",4,3,1)==0);
    assertTrue (game.getcase("noire",2,4,1)==1);
};
MonTestCase.prototype.testHistoire7=function (){
    var game = new Paletto();
    game.start();
    //p1
    assertTrue (game.getcase("noire",0,0,1)==0);
    assertTrue (game.getcase("noire",5,5,1)==0);
    //******************************//p2
    assertTrue (game.getcase("jaune",1,0,2)==0);
    assertTrue (game.getcase("jaune",5,0,2)==0);
    //******************************//p1
    assertTrue (game.getcase("blanc",4,0,1)==0);
    assertTrue (game.getcase("blanc",0,5,1)==0);
    //******************************//p2
    assertTrue (game.getcase("vert",5,4,2)==0);
    assertTrue (game.getcase("vert",0,1,2)==0);
    assertTrue (game.getcase("vert",4,5,2)==0);
    //******************************//p1
    assertTrue (game.getcase("bleue",2,0,1)==0);
    assertTrue (game.getcase("bleue",1,5,1)==0);
    //******************************//p2
    assertTrue (game.getcase("blanc",0,2,2)==0);
    assertTrue (game.getcase("blanc",3,5,2)==0);
    //******************************//p1
    assertTrue (game.getcase("rouge",0,4,1)==0);
    assertTrue (game.getcase("rouge",5,3,1)==0);
    assertTrue (game.getcase("rouge",3,0,1)==0);
    assertTrue (game.getcase("rouge",2,5,1)==0);
    //******************************//p2
    assertTrue (game.getcase("bleue",0,3,2)==0);
    assertTrue (game.getcase("bleue",5,1,2)==0);
    //******************************//p1
    assertTrue (game.getcase("jaune",1,4,1)==0);
    assertTrue (game.getcase("jaune",4,4,1)==0);
    //*****************************//p2
    assertTrue (game.getcase("noire",5,2,2)==0);
    assertTrue (game.getcase("noire",4,3,2)==0);
    assertTrue (game.getcase("noire",2,4,2)==0);
    //******************************//p1
    assertTrue (game.getcase("vert",4,1,1)==0);
    //*****************************//p2
    assertTrue (game.getcase("rouge",1,3,2)==0);
    //******************************//p1
    assertTrue (game.getcase("blanc",1,1,1)==0);
    assertTrue (game.getcase("blanc",2,3,1)==0);
    //*****************************//p2
    assertTrue (game.getcase("bleue",3,4,2)==0);
    //******************************//p1
    assertTrue (game.getcase("jaune",4,2,1)==0);
    assertTrue (game.getcase("jaune",2,1,1)==0);
    //*****************************//p2
    assertTrue (game.getcase("vert",3,3,2)==0);
    assertTrue (game.getcase("vert",1,2,2)==0);
    //******************************//p1
    assertTrue (game.getcase("bleue",2,2,1)==0);
    //*****************************//p2
    assertTrue (game.getcase("noire",3,1,2)==0);
    //******************************//p1
    assertTrue (game.getcase("rouge",3,2,1)==1);



};

