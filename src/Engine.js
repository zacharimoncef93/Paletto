'use strict';

var Paletto = function () {
    var board;
    var nbrBilleplayer1=0;
    var nbrBilleplayer2=0;
    var myArrayPlayer1;
    var myArrayPlayer2 ;
    var possible=true;
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
   /* this.getcaseDynamique = function (couleur,player) {
        var i;
        var j;
        board = new Array(6);
        if(player=1){
        for(i=0; i<6; i++){
            for(j=0;j<6;j++){
               if(board[i][j]==couleur){
               if (i>0 && j>0)
               {
               if(board[i][j-1]!=board[i][j+1]&&board[i-1][j]!=board[i+1][j]){
               myArrayPlayer1[nbrBilleplayer1]=couleur;
                   nbrBilleplayer1+=1;
                   board[i][j]="vide";
               }
               }
               }
            }
        }
        }
        else{
            for(i=0; i<6; i++){
                for(j=0;j<6;j++){
                    if(board[i][j]==couleur){
                        if (i>0 && j>0)
                        {
                            if(board[i][j-1]!=board[i][j+1]&&board[i-1][j]!=board[i+1][j]){
                                myArrayPlayer2[nbrBilleplayer2]=couleur;
                                nbrBilleplayer2+=1;
                                board[i][j]="vide";
                            }
                        }
                    }
                }
            }
        }
        return true;
    };*/
// public methods
    this.checkcase = function (couleur,ligne,colone) {
        if(board[ligne][colone]==couleur){
        var nbrvoisin=0;
        var nbrvidevoisin=0;
        if(colone<6){
            if(board[ligne][colone+1]!="vide"){
                nbrvoisin+=1;
            }
            else{
                nbrvidevoisin+=1;
            }
        }
        if(ligne<6){
             if(board[ligne+1][colone]!="vide"){
                nbrvoisin+=1;
            }
            else{
                 nbrvidevoisin+=1;
             }
        }

        if(ligne>0){
        if(board[ligne-1][colone]!="vide"){
            nbrvoisin+=1;
        }
        else{
            nbrvidevoisin+=1;
        }
        }
        if(colone>0){
        if(board[ligne][colone-1]!="vide"){
            nbrvoisin+=1;
        }
        else{
            nbrvidevoisin+=1;
        }
        }

     if(nbrvoisin==2 && nbrvidevoisin==2){
     possible=false;
     }
     if(nbrvoisin==3){
            possible=false;
     }
     if(nbrvoisin==4){
         possible=false;
     }
        }
        return possible;
    };
};
