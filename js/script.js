/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
        
        if (q1Result.length <= 4){
           totalScore = totalScore + 1;
        }
        else if (q1Result.length > 4 && q1Result.length <= 10){
           totalScore = totalScore + 2
        }
        else if(q1Result.length > 10){
           totalScore = totalScore + 3
        }
        
        if (q1Result.length <= 4){
           totalScore = totalScore + 1;
        }
        else if (q1Result.length > 4 && q1Result.length <= 10){
           totalScore = totalScore + 2
        }
        else if(q1Result.length > 10){
           totalScore = totalScore + 3
        }
        
    });

});
