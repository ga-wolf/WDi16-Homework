var winSequences = [[1,2,3],
                    [4,5,6],
                    [7,8,9],
                    [1,4,7],
                    [2,5,8],
                    [3,6,9],
                    [1,5,9],
                    [3,5,7]];
var playerOne = [];
var playerTwo = [];
var numClicks = 0;

var resetBoard = function(){
        location.reload();
};

var isWinSequence = function(player){
        var result = false;
        if (player.length >= 3) {
                for (var i = 0; i<winSequences.length; i++){
                        result = (winSequences[i].length === _.intersection(winSequences[i], player).length);
                        if (result === true) {
                                return result;
                        }
                }
        }
        return result;
};

var clickEvent = function(){
        var $onClick = $("td");
        $onClick.on("click",function(){
                if ( ! $(this).hasClass("clicked")){
                        numClicks++;
                        if (numClicks%2 === 0){
                                $(this).css({"background":"url(https://usercontent2.hubstatic.com/7406807_f260.jpg)","background-size":"cover"});
                                $(this).addClass("clicked");
                                playerTwo.push(parseInt($(this).attr("id")));
                                if (isWinSequence(playerTwo.sort())){
                                        window.alert("Player 2 has won!");
                                        resetBoard();
                                } else if (numClicks===9){
                                    window.alert("Its a Draw");
                                    resetBoard();
                                }
                        } else {
                                $(this).css({"background":"url(https://usercontent1.hubstatic.com/7406806_f260.jpg)","background-size":"cover"});
                                $(this).addClass("clicked");
                                playerOne.push(parseInt($(this).attr("id")));
                                if (isWinSequence(playerOne.sort())){
                                        window.alert("Player 1 has won!");
                                        resetBoard();
                                } else if (numClicks===9){
                                    window.alert("Its a Draw");
                                    resetBoard();
                                }
                        }
                }
        });
};

clickEvent();
