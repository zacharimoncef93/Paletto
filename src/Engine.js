'use strict';

var Paletto = function () {
    var board;
// private attributes and methods
    var start=function(){
        var i;
        var j;
        board = new Array(6);
        for(i=0; i<6; i++){
            board[i]=new Array(6);
            for(j=0;j<6;j++){
                board[i][j]="vide";
            }
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
        var numberCase=36;
       /* var i;
        var j;
        for(i=0; i<6; i++){
            for(j=0;j<6;j++){
                if(board[i][j]!="vide")
                {
                    numberCase+=1;
                }
            }
        }*/
        return numberCase;
    };
// public methods
};
