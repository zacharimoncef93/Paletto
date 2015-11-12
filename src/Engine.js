'use strict';

var Paletto = function () {
    var board;
    var nbrBilleplayer1=0;
    var nbrBilleplayer2=0;
    var myArrayPlayer1;
    var myArrayPlayer2 ;
// private attributes and methods
    this.start=function(){
        var i;
        var j;
        board = new Array(6);
        for(i=0; i<6; i++){
            board[i]=new Array(6);
            for(j=0;j<6;j++){
                board[i][j]="vide";
            }
        }
        myArrayPlayer1=[];
        myArrayPlayer2=[];
        for(i=0;i<18;i++){
            myArrayPlayer1[i]="vide";
            myArrayPlayer2[i]="vide";
        }
        board[0][0]="noire";
        board[0][1]="vert";
        board[0][2]="blanc";
        board[0][3]="bleue";
        board[0][4]="rouge";
        board[0][5]="blanc";
        //************************
        board[1][0]="jaune";
        board[1][1]="blanc";
        board[1][2]="vert";
        board[1][3]="rouge";
        board[0][4]="jaune";
        board[0][5]="bleue";
        //************************
        board[2][0]="bleue";
        board[2][1]="jaune";
        board[2][2]="bleue";
        board[2][3]="blanc";
        board[2][4]="noire";
        board[2][5]="rouge";
        //**********************
        board[3][0]="rouge";
        board[3][1]="noire";
        board[3][2]="rouge";
        board[3][3]="vert";
        board[3][4]="bleue";
        board[3][5]="blanc";
        //*********************
        board[4][0]="blanc";
        board[4][1]="vert";
        board[4][2]="jaune";
        board[4][3]="noire";
        board[4][4]="jaune";
        board[4][5]="vert";
        //*********************
        board[5][0]="jaune";
        board[5][1]="bleue";
        board[5][2]="noire";
        board[5][3]="rouge";
        board[5][4]="vert";
        board[5][5]="noire";



    };
    this.getCasepleine = function () {

        return 36;
    };
    this.getcase = function (couleur,ligne,colone,player) {
        if(player==1){
        if(board[ligne][colone]==couleur){
            myArrayPlayer1[nbrBilleplayer1]=board[ligne][colone];
            board[ligne][colone]= "vide";
            nbrBilleplayer1+=1;
        }
        }
        else{
            if(board[ligne][colone]==couleur){
                myArrayPlayer2[nbrBilleplayer2]=board[ligne][colone];
                board[ligne][colone]= "vide";
                nbrBilleplayer2+=1;
            }
        }
        return true;
    };
    this.getcase = function (couleur,player) {
        var i;
        var j;
        board = new Array(6);
        for(i=0; i<6; i++){
            board[i]=new Array(6);
            for(j=0;j<6;j++){
                board[i][j]="vide";
            }
        }
       /* if(player==1){
            if(board[ligne][colone]==couleur){
                myArrayPlayer1[nbrBilleplayer1]=board[ligne][colone];
                board[ligne][colone]= "vide";
                nbrBilleplayer1+=1;
            }
        }
        else{
            if(board[ligne][colone]==couleur){
                myArrayPlayer2[nbrBilleplayer2]=board[ligne][colone];
                board[ligne][colone]= "vide";
                nbrBilleplayer2+=1;
            }
        }*/
        return true;
    };
// public methods
};
