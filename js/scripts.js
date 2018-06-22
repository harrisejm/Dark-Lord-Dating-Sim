//Constructors
var Person = function(name, age, astrological, occupation, hobby, profileImage, score, aboutMe) {
  this.name = name;
  this.age = age;
  this.astrological = astrological;
  this.occupation = occupation;
  this.hobby = hobby;
  this.profileImage = profileImage;
  this.likeScore = score;
  this.aboutMe= aboutMe;
}

var Messages = function(name, localLikeScore) {
  this.name = name;
  this.localLikeScore = localLikeScore;
}

//Prototype Methods
Person.prototype.firstName = function() {
  var splitName = this.name.split(" ");
  return splitName[0];
}

//Global variables
var Player = new Person ()
var messageDutchess = false;
var messageSupul = false;
var messageBrenda = false;
var personResponse = 0;
var dutchessScore = 5;
var supulScore = 5;
var brendaScore = 5;

//Functions
function messengingSequence (name, messageNumber, arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  $("#" + name + "-form-" + messageNumber).submit(function(event) {
    event.preventDefault();
    $(".initial-show-" + name).hide();
    var message = parseInt($("#" + name + "-options-" + messageNumber).val());
    personResponse = message;
    var messageNum = messageNumber;
    if (messageNumber === 0 && message === 3) {
      $(".message-area-" + name).append('<div><span class="player-message-multiple">HI</span></div>')
      setTimeout(function(){$(".message-area-" + name).append('<div><span class="player-message-multiple">HEY</span></div>')}, 500);
      setTimeout(function(){$(".message-area-" + name).append('<div><span class="player-message-multiple">HEEELLLOOOOO???</span></div>')}, 1000);
    } else {
    $(".message-area-" + name).append('<div><span class="player-message">' + arrayOfResponses[messageNumber][message] + '</span></div>');
    }
    messageDutchess = false;
    messageSupul = false;
    messageBrenda = false;
    if (name === "Dutchess") {
      messageDutchess = true;
      $(".newMessageDutchess").hide();
    } else if (name === "Supul") {
      messageSupul = true;
      $(".newMessageSupul").hide();
    } else if (name === "Brenda") {
      messageBrenda = true;
      $(".newMessageBrenda").hide();
    }
    $("#" + name + "-form-" + messageNumber).hide();
    setTimeout(function(){$("#" + name + "-form-" + (messageNumber + 1)).show()}, 2000);
    allResponses (messageNum, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
    if (messageNumber === 5)
      if (name === "Dutchess") {
        $("#" + name + "-form-" + messageNumber).hide();
        setTimeout(function(){$("#message-options-Dutchess").append('<button type="button" id="date-Dutchess" class="btn btn-primary btn-block" onclick="dutchessAudio(); hello()">Go On Date with Dutchess</button>')}, 3000);
        setTimeout(function(){$("#date-Dutchess").click(function(){
          Player.likeScore = dutchessScore;
          console.log(Player);
          $("#profiles").empty();
          $("#date-div").show();
          dateDutchess = true;
          showText("#date-text", dateGardenText[0], 0, 1);
          dateSequenceDutchess();
        })}, 3100);
      } else if (name === "Supul") {
        $("#" + name + "-form-" + messageNumber).hide();
        setTimeout(function(){$("#message-options-Supul").append('<button type="button" id="date-Supul" class="btn btn-primary btn-block" onclick="supulAudio(); hello()">Go On Date with Supul</button>')}, 3000);
        setTimeout(function(){$("#date-Supul").click(function(){
          Player.likeScore = supulScore;
          console.log(Player);
          $("#profiles").empty();
          $("#date-div").show();
          dateSupul = true;
          showText("#date-text", dateGardenText[0], 0, 1);
          dateSequenceSupul();
        })}, 3100);
      } else if (name === "Brenda") {
        $("#" + name + "-form-" + messageNumber).hide();
        setTimeout(function(){$("#message-options-Brenda").append('<button type="button" id="date-Brenda" class="btn btn-primary btn-block" onclick="brendaAudio(); hello()">Go On Date with Brenda</button>')}, 3000);
        setTimeout(function(){$("#date-Brenda").click(function(){
          Player.likeScore = brendaScore;
          console.log(Player);
          $("#profiles").empty();
          $("#date-div").show();
          dateBrenda = true;
          showText("#date-text", dateGardenText[0], 0, 1);
          dateSequenceBrenda();
        })}, 3100);
      }
  });
}
function allResponses (messageNumber) {
  if (messageNumber === 0) {
    messengingResponse0 (profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
  }
  if (messageNumber === 1) {
    messengingResponse1 (profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
  }
  if (messageNumber === 2) {
    messengingResponse2 (profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
  }
  if (messageNumber === 3) {
    messengingResponse3 (profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
  }
  if (messageNumber === 4) {
    messengingResponse4 (profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
  }
  if (messageNumber === 5) {
    messengingResponse5 (profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
  }
}
function messengingResponse0(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  //Dark person Dutchess
  if (messageDutchess === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[0][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 0;
  } else if (messageDutchess === true && personResponse === 1) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[0][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore -= 2;
  } else if (messageDutchess === true && personResponse === 2) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[0][2] + '</span></div>')}, 2000);
    $(".entered-name").text(Player.name);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 2;
  } else if (messageDutchess === true && personResponse === 3) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[0][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore -= 1;
    //Crazy person Supul
  } else if (messageSupul === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[0][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 0;
  } else if (messageSupul === true && personResponse === 1) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[0][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore -= 2;
  } else if (messageSupul === true && personResponse === 2) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[0][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore -= 1;
  } else if (messageSupul === true && personResponse === 3) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[0][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 2;
    //Normal Person Brenda
  } else if (messageBrenda === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[0][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore += 1;
  } else if (messageBrenda === true && personResponse=== 1) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[0][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 2;
  } else if (messageBrenda === true && personResponse === 2) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[0][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 2;
  } else if (messageBrenda === true && personResponse === 3) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[0][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 1;
  }
}
function messengingResponse1(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  if (messageDutchess === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[1][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 0;
  } else if(messageDutchess === true && personResponse === 1){
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[1][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore -= 2;
  } else if(messageDutchess === true && personResponse  === 2){
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[1][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 2;
  } else if(messageDutchess === true && personResponse  === 3){
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[1][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 0;

  } else if (messageSupul  === true && personResponse  === 0) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[1][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 0;
  } else if(messageSupul  === true && personResponse === 1){
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[1][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore -= 2;
  } else if(messageSupul === true && personResponse  === 2){
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[1][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore -= 1;
  } else if(messageSupul === true && personResponse  === 3){
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[1][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 2;

  } else if (messageBrenda === true && personResponse  === 0) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[1][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore += 2;
  } else if(messageBrenda  === true && personResponse  === 1){
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[1][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 2;
  } else if(messageBrenda === true && personResponse  === 2){
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[1][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 1;
  } else if(messageBrenda === true && personResponse  === 3){
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[1][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore += 0;
  }
}
function messengingResponse2(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  if (messageDutchess === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[2][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
  } else if (messageSupul === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[2][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
  } else if (messageBrenda === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[2][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
  }
}
function messengingResponse3(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  if (messageDutchess === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[3][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 1;
  } else if (messageDutchess === true && personResponse === 1) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[3][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);

  } else if (messageSupul === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[3][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 1;
  } else if (messageSupul === true && personResponse === 1) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[3][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);

  } else if (messageBrenda === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[3][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 1;
  } else if (messageBrenda === true && personResponse === 1) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[3][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
  }
}
function messengingResponse4(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  if (messageDutchess === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[4][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore -= 1;
  } else if (messageDutchess === true && personResponse === 1){
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[4][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore -= 2;
  } else if (messageDutchess=== true && personResponse === 2){
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[4][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 2;
  } else if (messageDutchess=== true && personResponse === 3){
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[4][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 0;

  } else if (messageSupul === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[4][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore -= 1;
  } else if(messageSupul === true && personResponse === 1){
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[4][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 0;
  } else if(messageSupul === true && personResponse === 2){
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[4][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 1;
  } else if(messageSupul === true && personResponse === 3){
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[4][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 2;

  } else if (messageBrenda === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[4][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore += 2;
  } else if(messageBrenda === true && personResponse === 1){
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[4][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore += 0;
  } else if(messageBrenda === true && personResponse === 2){
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[4][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 1;
  } else if(messageBrenda === true && personResponse === 3){
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[4][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 2;
  }
}
function messengingResponse5(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  if (messageDutchess === true && dutchessScore >= 5) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[5][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
  } else if (messageDutchess === true && dutchessScore < 5){
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[5][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);

  } else if (messageSupul === true && supulScore >= 5) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[5][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
  } else if(messageSupul === true && supulScore < 5){
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[5][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);

  } else if (messageBrenda === true && brendaScore >= 5) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[5][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
  } else if(messageBrenda === true && brendaScore < 5){
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[5][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
  }
}
function dateResonse0(){  //only one option
  if (profileDark === true) {
    $("#date-text-output").text(arrayOfDutchessDateResponse[0]);
  ///CRAZY PROFILE
  } else if (profileCrazy === true) {
    $("#date-text-output").text(arrayOfsupulDateResponse[0]);
  ///NORMAL PROFILE
  } else if (profileNormal === true){
    $("#date-text-output").text(arrayOfbrendaDateResponse[0]);
  }
}
function dateResponse1(){  //only one option
  if (profileDark === true) {
    $("#date-text-output").text(arrayOfDutchessDateResponse[1]);
    ///CRAZY PROFILE
  } else if (profileCrazy === true) {
    $("#date-text-output").text(arrayOfsupulDateResponse[1]);
    ///NORMAL PROFILE
  } else if (profileNormal === true){
    $("#date-text-output").text(arrayOfbrendaDateResponse[1]);
  }
}
function dateResponse2(){  //only one option
  if (profileDark === true) {
    $("#date-text-output").text(arrayOfDutchessDateResponse[2]);
    ///CRAZY PROFILE
  } else if (profileCrazy === true) {
    $("#date-text-output").text(arrayOfsupulDateResponse[2]);
    ///NORMAL PROFILE
  } else if (profileNormal === true){
    $("#date-text-output").text(arrayOfbrendaDateResponse[2]);
  }
}
function dateResponse3(){  //only one option
   if (profileDark === true){
    $("#date-text-output").text(arrayOfDutchessDateResponse[3]);
    ///CRAZY PROFILE
  } else if(profileCrazy === true){
    $("#date-text-output").text(arrayOfsupulDateResponse[3]);
    ///NORMAL PROFILE
  } else if (profileNormal === true){
    $("#date-text-output").text(arrayOfbrendaDateResponse[3]);
  }
}
function dateResponse4(){  //only one option
   if (profileDark === true){
    $("#date-text-output").text(arrayOfDutchessDateResponse[4]);
  ///CRAZY PROFILE
  } else if(profileCrazy === true){
    $("#date-text-output").text(arrayOfsupulDateResponse[4]);
    ///NORMAL PROFILE
  } else if (profileNormal === true){
    $("#date-text-output").text(arrayOfbrendaDateResponse[4]);
  }
}
function playerChoice(singleWord1, singleWord2, singleWord3, string1, string2, string3){
  $("#date-text").append("<div class='choice1'>" + singleWord1 + "</div>" +
                         "<div class='choice2'>" + singleWord2 + "</div>" +
                         "<div class='choice3'>" + singleWord3 + "</div>"
            );
  var message1 = string1;
  var message2 = string2;
  var message3 = string3;
  $(".choice1").click(function(){
    $(".choice1").hide();
    $(".choice2").hide();
    $(".choice3").hide();
    showText("#date-text", message1, 0, 1);
  });
  $(".choice2").click(function(){
    $(".choice1").hide();
    $(".choice2").hide();
    $(".choice3").hide();
    showText("#date-text", message2, 0, 1);
  });
  $(".choice3").click(function(){
    $(".choice1").hide();
    $(".choice2").hide();
    $(".choice3").hide();
    showText("#date-text", message3, 0, 1);
  });
}
function createDateButtons (){
  for (index = 0; index < 16; index++)
  {
    $("#date-button").append("<div class='the-date-button-div" + index + "'><button class='btn btn-danger' id='the-date-button" + index + "'type='button'>Continue</button></div>");
  }

};
function dateText(aString, index, whichDate) {
  var dialogue = aString
  $("#the-date-button" + index).click(function(){
    $("#date-text").text("");
    $(".the-date-button-div" + index).hide();
    setTimeout(function(){$(".the-date-button-div" + (index + 1)).show()}, 1000);
    showText("#date-text", dialogue, 0, 1);
    if(index === 2 && dateDutchess === true) {
      playerChoice("Oblivious", "Shocked", "Polite", playerDutchessDateResponses0[0], playerDutchessDateResponses0[1], playerDutchessDateResponses0[2]);
    } else if (index === 2 && dateSupul === true) {
      playerChoice("Perplexed", "Shocked", "Sad", playerSupulDateResponses0[0], playerSupulDateResponses0[1], playerSupulDateResponses0[2]);
    } else if (index === 2 && dateBrenda === true) {
      playerChoice("Hesitant", "Dismissive", "Patronizing", playerBrendaDateResponses0[0], playerBrendaDateResponses0[1], playerBrendaDateResponses0[2]);
    } else if (index === 5 && dateDutchess === true) {
      playerChoice("Steak", "Fettuccine Alfredo", "Salad", "Steak", "Fettuccine Alfredo", "Salad");
    } else if (index === 5 && dateSupul === true) {
      playerChoice("Steak", "Fettuccine Alfredo", "Salad", "Steak", "Fettuccine Alfredo", "Salad");
    } else if (index === 5 && dateBrenda === true) {
      playerChoice("Steak", "Fettuccine Alfredo", "Salad", "Steak", "Fettuccine Alfredo", "Salad");
    } else if (index === 6 && dateDutchess === true) {
      playerChoice("Concerned", "Impressed", "Joking", playerDutchessDateResponses1[0], playerDutchessDateResponses1[1], playerDutchessDateResponses1[2]);
    } else if (index === 6 && dateSupul === true) {
      playerChoice("Disgusted", "Annoyed", "Joking", playerSupulDateResponses1[0], playerSupulDateResponses1[1], playerSupulDateResponses1[2]);
    } else if (index === 6 && dateBrenda === true) {
      playerChoice("Impolite", "Impressed", "Clueless", playerBrendaDateResponses1[0], playerBrendaDateResponses1[1], playerBrendaDateResponses1[2]);
    } else if (index === 9 && dateDutchess === true) {
      playerChoice("Oblivious", "Impressed", "Hesitant", playerDutchessDateResponses2[0], playerDutchessDateResponses2[1], playerDutchessDateResponses2[2]);
    } else if (index === 9 && dateSupul === true) {
      playerChoice("Boastful", "Reluctant", "Relive old memory", playerSupulDateResponses2[0], playerSupulDateResponses2[1], playerSupulDateResponses2[2]);
    } else if (index === 9 && dateBrenda === true) {
      playerChoice("Oblivious", "Uninformed", "Honest", playerBrendaDateResponses2[0], playerBrendaDateResponses2[1], playerBrendaDateResponses2[2]);
    } else if (index === 12 && dateDutchess === true) {
      playerChoice("Impolite", "Complimentary", "Confused", playerDutchessDateResponses3[0], playerDutchessDateResponses3[1], playerDutchessDateResponses3[2]);
    } else if (index === 12 && dateSupul === true) {
      playerChoice("Concerned", "Boastful", "Confident", playerSupulDateResponses3[0], playerSupulDateResponses3[1], playerSupulDateResponses3[2]);
    } else if (index === 12 && dateBrenda === true) {
      playerChoice("Curious", "Dismissive", "Clueless", playerBrendaDateResponses3[0], playerBrendaDateResponses3[1], playerBrendaDateResponses3[2]);
    }
  });
};
function showText(target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
};

function dateSequenceDutchess(){
  dateText(playerDateQuestions[0], 0, true);
  dateText(dutchessDateResponse0[0], 1, true);
  dateText("", 2, true)
  dateText(dateGardenText[1], 3, true);
  dateText(dutchessDateResponse1[0], 4, true);
  dateText("", 5, true);
  dateText("", 6, true);
  dateText(playerDateQuestions[1], 7, true);
  dateText(dutchessDateResponse2[0], 8, true);
  dateText("", 9, true);
  dateText(playerDateQuestions[2], 10, true);
  dateText(dutchessDateResponse3[0], 11, true);
  dateText("", 12, true);
  dateText(dateGardenText[2], 13, true);
  dateText(dutchessDateResponse4[0], 14, true);
  dateText("The End?", 15, true);
}
function dateSequenceSupul(){
  dateText(playerDateQuestions[0], 0, true);
  dateText(supulDateResponse0[0], 1, true);
  dateText("", 2, true);
  dateText(dateGardenText[1], 3, true);
  dateText(supulDateResponse1[0], 4, true);
  dateText("", 5, true);
  dateText("", 6, true);
  dateText(playerDateQuestions[1], 7, true);
  dateText(supulDateResponse2[0], 8, true);
  dateText("", 9, true);
  dateText(playerDateQuestions[2], 10, true);
  dateText(supulDateResponse3[0], 11, true);
  dateText("", 12, true);
  dateText(dateGardenText[2], 13, true);
  dateText(supulDateResponse4[0], 14, true);
  dateText("The End?", 15, true);
}
function dateSequenceBrenda(){
  dateText(playerDateQuestions[0], 0, true);
  dateText(brendaDateResponse0[0], 1, true);
  dateText("", 2, true);
  dateText(dateGardenText[1], 3, true);
  dateText(brendaDateResponse1[0], 4, true);
  dateText("", 5, true);
  dateText("", 6, true);
  dateText(playerDateQuestions[1], 7, true);
  dateText(brendaDateResponse2[0], 8, true);
  dateText("", 9, true);
  dateText(playerDateQuestions[2], 10, true);
  dateText(brendaDateResponse3[0], 11, true);
  dateText("", 12, true);
  dateText(dateGardenText[2], 13, true);
  dateText(brendaDateResponse3[0], 14, true);
  dateText("The End?", 15, true);
}
//Profile Information
var profileNames = ["Dutchess Capreanu", "Supul Sinac", "Brenda Smith"];
var profileAges = [30, 27, 25];
var profileAboutMes = [
                        "Just moved to the area from Transylvania. Back in the market for love after a misunderstanding with the locals. No garlic please.",

                        "On the prowl for that special someone who can respect my space when I need it (regular monthly trips).",

                        "Vegan.  Not really sure what I am doing on here, my friends made me set up a profile. Must love dogs."

                      ];
var profileAstrologicals = ["Capricorn","Leo","Virgo"];
var profileOccupations = ["Night Shift", "Bartender", "Wage Slave"];
var profileHobbies = ["Candelabra", "Hunting", "Netflix"];
var profileImages = ["vampire", "wolf", "basic"];
var profileLikeScore = [10, 10, 10];

//Player Response Messages

var playerResponses0 = ["Hello", "Sup Honey Bo Bo", "Greetings, M'lady of the night", "HI // HEY // HEEELLLOOOOO???"];
var playerResponses1 = ["I'm going to Wholefoods later, can I pick you up anything?", "Heaven must be missing an Angel", "You so spooky my skeleton is shakin'", "You look like you wanna get WILD!"];
var playerResponses2 = ["Tell me more about yourself."];
var playerResponses3 = ["The Dark Lord's Kingdom... Yeah, I really love it here, great place! How do you feel about it?", "The Dark Lord's Kingdom... Mmmm yeah idk this place is kinda weird... How do you feel about it?"];
var playerResponses4 = ["Oh you know the usual, I work as a programmer, I enjoy watching Netflix, taking the occasional walk, and eating.", "#chillaxin at the beach with some brewskis, workin on my tan and hangin out with the bros at the gym #gymlyfe #beachbrews", "Midnight graveyard walks, fog dancing, hula-hooping, and watching movies.", "Huntin, fishin, muddin, rock crawlin, and sleepin."];
var playerResponses5 = ["Would you like to go out?"]
var arrayOfResponses = [playerResponses0, playerResponses1, playerResponses2, playerResponses3, playerResponses4, playerResponses5];

//Dutchess Response Messages
var dutchessResponse0 = ["...", "... ugh", "Greetings morta... er <span class='entered-name'></span>", "um... hello?"];
var dutchessResponse1 = ["Oh, no... they don't have anything I could eat", "Speak not of the accursed ones!", "Oh my, well let us hope it doesn't rattle right out of you haha ;)", "Eh, on occasion I suppose..."];
var dutchessResponse2 = ["First you should know, as my profile mentioned, I am a widow and a recent immigrant to this fine kingdom. Second, I am, due to my work of course, a creature of the night and must spend my days sleeping. I've not yet seen everything the Dark Lord's Kingdom has to offer, but so far I feel right at home."];
var dutchessResponse3 = ["Yeah, I really love it here, great place!  Tell me more about yourself.", "How unfortunate.  Tell me more about yourself."];
var dutchessResponse4 = ["How... pedantic.", "In... in the sun?", "How delightful", "Well, I do love to feed"];
var dutchessResponse5 = ["Absolutely, darling.", "I suppose I have the time..."];
var arrayOfDutchessResponses = [dutchessResponse0, dutchessResponse1, dutchessResponse2, dutchessResponse3, dutchessResponse4, dutchessResponse5];

//Supul Response Messages
var supulResponse0 = ["Huh? WhaT? You talking to MEEE?", "HONEY WHAT???", "WHAT?? WHO TOLD YOU???", "HEEEEEEEEEEEEEEEEYYYY!!!!"];
var supulResponse1 = ["Bah, where's the fun if the food's just sitting there waitin' for ya?", "REEEEEEEE", "Look, this hair is impossible OK?", "AAAWWWWOOOOOOOOOOOOOOOOO!!!!"];
var supulResponse2 = ["Where to start, where to start??? I am a fulltime bartender/athletics instructor/hunter (damn site would only let me put in one job). I loooove being out in the wild, the smell of the grass, the scent of the prey... ooooh and the Dark Lord's Kingdom as THE best places to hunt!!!"];
var supulResponse3 = ["YA, it's AMAZING! Tell me more about you.", "You wrong but ok.  Tell me more about you."];
var supulResponse4 = ["BO-RING", "Mmmm fresh meat", "Did you say... HULA-HOOPING??", "Yeeeeah! Yes! YES! YESS!"];
var supulResponse5 = ["YAYAYAYAYAYA!", "What have I got to lose?"];
var arrayOfSupulResponses = [supulResponse0, supulResponse1, supulResponse2, supulResponse3, supulResponse4, supulResponse5];

//Brenda Response Messages
var brendaResponse0 = ["Sup", "Ew", "EW", "Ugh"];
var brendaResponse1 = ["OOOMG can you pick me up some chai??", "Ew", "What?? How am I spooky???", "Wow ok slow down there..."];
var brendaResponse2 = ["Let's see... I moved to the Dark Lord's Kingdom on a student visa 8 years ago. After school I already had lots of wage slave offers and so I decided to stay and apply for a work visa. I think maybe it was the seclution in college, but I never realized until afterwards how... strange this country is, and I'm not sure I really fit in..."];
var brendaResponse3 = ["Mmmm yeah idk this place is kinda weird... What do you do anyway?", "I know right??? It's totally wack. What do you do, like for work or something?"];
var brendaResponse4 = ["OMG I luv Netflix!!!!!!!!!!!!!!!! I've watched every episode of The Office 7 times!", "Uuuuuh... cooooooool?", "You kinda sound like a creeper.", "I'm a Vegan."];
var brendaResponse5 = ["Uh sure.", "Sigh, I guess."];
var arrayOfBrendaResponses = [brendaResponse0, brendaResponse1, brendaResponse2, brendaResponse3, brendaResponse4, brendaResponse5];

//Date Dialogue

var dateGardenText = ["[You show up to the Olive Garden on Main and 15th at the agreed upon time. Your date shows up " + Math.floor((Math.random() * 20) + 5) + " minutes late, citing issues finding parking. Together you proceed inside. You didn't phone ahead, and the Olive Garden is extremely busy this time of day. There is a " + Math.floor((Math.random() * 35) + 10) + " minute  wait before getting a table, however unlimited breadsticks begin to flow and you feel yourself finally able to open up...]",
"[Your waiter arrives with another basket of breadsticks, as well as glasses of wine and asks to take your orders]",
"[The waiter arrives surprisingly quickly considering how busy it is in here with your food. You and your date scarff down your meals wordlessly, after which point your date excusses themselves for" + Math.floor((Math.random() * 20) + 10) + " minutes before returning. They ask if you would like to take a walk, and given that you are all paid up and a loud chidren's birthday party just entered the establishment, you agree. Upon walking out into the cool night air, your date...]"]

var dutchessDateResponse0 = ["Of course darling, even before I moved to the Dark Lord's Kingdom I was a creature of the night. I'm currently haunting the Old Farm Hotel between 11pm and sunrise. I don't see many people these days but that is ok with me, I only need a few to survive. You should stay a night if you haven't already, the decor is to die for!"];
var dutchessDateResponse1 = ["Just another glass of wine for me, I'm on a all liquid diet."];
var dutchessDateResponse2 = ["Well, I have a great penchant for candelabra, and they have let me do some interior decorating at the hotel when the nights are slow. I am also a collector of fine -red- wines, although unlike most I prefer a younger blend... [she gazes off into the distance apparently lost in this thought]"];
var dutchessDateResponse3 = ["Ten years? The blink of an eye... Why I may be still sitting here in ten years..."];
var dutchessDateResponse4 = ["[Gazes up at the sky as a colony of bats swoops by] I must go darling, my apologies [Before you can respond, Dutchess vanishes...]"];
var arrayOfDutchessDateResponse = [dutchessDateResponse0, dutchessDateResponse1, dutchessDateResponse2, dutchessDateResponse3, dutchessDateResponse4];

var supulDateResponse0 = ["Aaaah what's to tell?? I flip bottles and bounce drunks most of the time, but I also make a good deal with all the fresh meat I bring in from my hunts! The bartending is just to fill in the gaps. I live for the hunt!"];
var supulDateResponse1 = ["Raw steak, as much blood as possible."];
var supulDateResponse2 = ["YOU BETCHA! Did I mention that I love hunting? I am also a master taxidermist and decorated marathon runner!!! THINK YOU CAN KEEP UP?!?!"];
var supulDateResponse3 = ["What?? Ten years? Time flys, who knows. One day you are the apex preditor, the next BLAMO!!!"];
var supulDateResponse4 = ["[Looks towards the sky as the clouds lazily part, revealing a full moon] OH! UUUUUHH, GOTTA GO! Sorry!![You watch as they sprint off faster than any human you have ever seen in your life...]"];
var arrayOfsupulDateResponse = [supulDateResponse0, supulDateResponse1, supulDateResponse2,supulDateResponse3, supulDateResponse4];

var brendaDateResponse0 = ["Oooooh you knooooow, I just work a boring nine to five over at the Wage Slave Industries. I got my degree in Wage Slavery, and the Dark Lord's Kingdom has world class Wage Slavery! The work is fine, it's the weirdos that get to me..."];
var brendaDateResponse1 = ["Salad, no croutons."];
var brendaDateResponse2 = ["Ooooh well you know, everyone and everything in this place so so strange and foreign, I basically just watch Netflix these days. Have you seen the Office??"];
var brendaDateResponse3 = ["Well, I'm kinda hoping to get out of this town... maybe the way I got in, a masters abroad."];
var brendaDateResponse4 = ["[Trips on the sidewalk and falls directly into a puddle in the street. Before you can do anything, she cries out that she is melting and slowly dissolves into a sanguine puddle...]"];
var arrayOfbrendaDateResponse = [brendaDateResponse0, brendaDateResponse1, brendaDateResponse2, brendaDateResponse3, brendaDateResponse4];

var playerDateQuestions = ["So, tell me more about your work.", "Tell me more about what you like to do for fun.", "Interesting, well where do you see yourself in ten years?"]

var playerDinnerChoices = ["Steak", "Fettuccine Alfredo", "Salad"]

var playerDutchessDateResponses0 = ["The Old Farm Hotel you say? Huh, I feel like I recall reading about a string of mysterious disappearances that have been plaguing that establishment for months... you be careful!",
"You work at THAT creepy old place?? Yikes, count me out.", "I hear they have amazing candelabra, I would love to check it out sometime."]
var playerSupulDateResponses0 = ["A true blooded hunter? I always wondered how Butcher Bret kept so well in stock of such fresh meats...", "Yikes, well I know I could sure use a drink... waiter!", "Oh no all my poor animal friends..."]
var playerBrendaDateResponses0 = ["Yeah this place really weirds me out, I'm considering a change in location.", "If your don't like your job you should just switch professions! Back when I was in college...[you monologue for a while about your boring past]", "Uuuh, huh? Yeah mmhmmm riiiight riiiight..."]

var playerDutchessDateResponses1 = ["Everything Ok? You sure that's all you want, I am paying.", "I like a woman that can hold her own, waiter!", "Wine before liqour, amirite??"]
var playerSupulDateResponses1 = ["*Audible Sounds of Disgust*", "If I had known that's what you wanted I would have taken you out to the forest to catch our own dinner!", "Is it a full moon out there tonight? Ha ha!"]
var playerBrendaDateResponses1 = ["For every animal that you don't eat, I'll eat three", "Wow, you're so healthy, I'm impressed!", "I... I wonder what kind of lettuce they have here..."]

var playerDutchessDateResponses2 = ["Candles? You mean like from Yankee Candle? Yeah that's cool, I guess... speaking of wine, GARCON!", "Ah, fine art and fine wine? I would love to sample your collection sometime...", "Ok, so nothing too crazy.. what about getting out into nature, hiking up a mountain, and feeling the sun beat down on your face?!"]
var playerSupulDateResponses2 = ["Hah! Well with my 89 horsepower ATV and fully automatic AR15 that I bought online without a background check, I'd say I'm quite the huntsman myself!", "Yikes, no, no I don't think I could. A relaxing weekend in front the TV for me, thanks.", "My father was a Taxidermist. When I was 7 years old, he took me out into the woods. He said we were going camping, but when I came back from gathering kindling for the fire he was gone, and I never saw him again..."]
var playerBrendaDateResponses2 = ["Net... flix? Is that a new product?", "Oooooh yeah yeah yeah the Office? With Jam Helper? And Pim Bestley? Haha they crack me up.", "Eh I've seen an episode or two, but I'm more of an outdoorsman myself."]

var playerDutchessDateResponses3 = ["How old did you say you were again?", "How poetic, have you considered being a writer?", "I... uh what?"]
var playerSupulDateResponses3 = ["My goodness, well are you insured?", "Ha, yeah us humans sure are the apex predators", "You know what I always: Live for a minute, die kicking and screaming."]
var playerBrendaDateResponses3 = ["Any ideas what you want to study?", "Change could be good, but whats wrong with the Dark Lord's Kingdom?", "Yeah, I do love these breadsticks... wait, what?"]

var playerDutchessDateEndings = ["", "", ""]
var playerSupulDateEndings = ["", "", ""]
var playerBrendaDateEndings = ["", "", ""]

var intro = document.getElementById("introAudio");
function introAudio() {
  intro.loop = true;
  intro.load();
  intro.play();
}

var match = document.getElementById("matchAudio");
function matchAudio() {
    match.loop = true;
    match.load();
    match.play();
}
var dateDutchess = document.getElementById("dateDutchess");
function dutchessAudio() {
    dateDutchess.play();
}
var dateSupul = document.getElementById("dateSupul");
function supulAudio() {
    dateSupul.play();
}
var dateBrenda = document.getElementById("dateBrenda");
function brendaAudio() {
    dateBrenda.play();
}
var dateStarts = document.getElementById("dateStarts");
function hello() {
  setTimeout(function(){
  dateStarts.play();
}, 9000);
}




var intro = document.getElementById("introAudio");
function introAudio() {
  intro.loop = true;
  intro.load();
  intro.play();
}

var match = document.getElementById("matchAudio");
function matchAudio() {
    match.loop = true;
    match.load();
    match.play();
}
var dateDutchess = document.getElementById("dateDutchess");
function dutchessAudio() {
    dateDutchess.play();
}
var dateSupul = document.getElementById("dateSupul");
function supulAudio() {
    dateSupul.play();
}
var dateBrenda = document.getElementById("dateBrenda");
function brendaAudio() {
    dateBrenda.play();
}
var dateStarts = document.getElementById("dateStarts");
function hello() {
  setTimeout(function(){
  dateStarts.play();
}, 9000);
}


$(document).ready(function(){
  $("#sign-up").click(function() {
    $(".header").hide();
    $("#sign-up").hide();
    $("#create-profile").fadeIn();
  })
  $("#form-match").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("#user-name").val();
    var inputtedAge = $("#user-age").val();
    var inputtedAstrological = $("#astrological-sign").val();
    var inputtedOccupation = $("#user-occupation").val();
    var inputtedHobby = $("input:radio[name=hobby]:checked").val();
    if (inputtedHobby === "user-input-hobby") {
      inputtedHobby = $("#user-input-hobby").val();
    }
    Player = new Person (inputtedName, inputtedAge, inputtedAstrological, inputtedOccupation, inputtedHobby);
    if (Player.name === "" || Player.occupation === "" || Player.hobby === "") {
      $("#blank-form").show();
    } else {
      //Create Profile Panels
      for (i = 0; i < profileNames.length; i++) {
        var newPerson = new Person (profileNames[i], profileAges[i], profileAstrologicals[i], profileOccupations[i], profileHobbies[i], profileImages[i], profileLikeScore[i], profileAboutMes[i]);
        $("#profiles").append(
                              '<div class="col-md-4">' +
                                '<div class="panel panel-danger" style="background: rgba(60,60,60,0.7);">' +
                                  '<h2 class = "panel-heading profile-h2"><span class = "profile-name" >' + newPerson.name + '</span></h2>' +
                                  '<div class="panel-body profile-panels">' +
                                    '<div class="row">' +
                                      '<div class="col-md-6">' +
                                        '<strong>Age:</strong> <span class = "profile-age" >' + newPerson.age + '</span>' +
                                      '</div>' +
                                      '<div class="col-md-6">' +
                                        '<strong>Interested In:</strong> <span class = "gender-interests">Male</span>' +
                                      '</div>' +
                                    '</div>' +
                                    '<img src="img/' + newPerson.profileImage + '.jpg" alt="">' +
                                    '<div class="">' +
                                      '<p><strong>Astrological Sign:</strong> <span class ="profile-astrological">' + newPerson.astrological + '</span></p>' +
                                      '<p><strong>Occupation:</strong> <span class = "profile-occupation">' + newPerson.occupation + '</span></p>' +
                                      '<p><strong>Hobby:</strong> <span class = "profile-hobby">' + newPerson.hobby + '</span></p>' +
                                      '<div class="about-box">' +
                                        '<strong>About me:</strong> <span class = "profile-about-me">' + newPerson.aboutMe + '</span>' +
                                      '</div>' +
                                    '</div>' +
                                    '<div class="panel-body row">' +
                                      '<button type="button" class="btn btn-primary inline-button" id="message-' + newPerson.firstName() + '">Message Me!</button>' +
                                      '<div class="newMessage' + newPerson.firstName() + '">' +
                                        '<p><strong>1 New Message</strong></p>' +
                                      '</div>' +
                                    '</div>' +
                                  '</div>' +
                                '</div>' +
                                '<div class="panel panel-primary initial-hidden message-box-' + newPerson.firstName() + '">' +
                                  '<div class="panel-heading">' +
                                    newPerson.firstName() + ' is Online' +
                                  '</div>' +
                                  '<div class="panel-body" id="response-' + newPerson.firstName() + '">' +
                                    '<div class="text-window message-area-' + newPerson.firstName() + '">' +
                                      '<p class="initial-show-' + newPerson.firstName() + '"><strong>*Send ' + newPerson.firstName() + ' a message*</strong></p>' +
                                    '</div>' +
                                    '<div id="message-options-' + newPerson.firstName() + '">' +
                                    '</div>' +
                                  '</div>' +
                                '</div>' +
                              '</div>'
                            );

        for (b = 0; b < arrayOfResponses.length; b++) {
          $("#message-options-" + newPerson.firstName()).append('<form id="' + newPerson.firstName() + '-form-' + b + '" class="form-inline message-hide' + b + '">' +
                                         '<select class="resize-input form-group input-sm" id="' + newPerson.firstName() + '-options-' + b + '">' +
                                         '</select>' +
                                         '<div class="messageButton">' +
                                           '<button type="submit" class="btn btn-primary btn-sm">Send Message</button>' +
                                         '</div>' +
                                       '</form>'
         );
          for (c = 0; c < arrayOfResponses[b].length; c++) {
            $("#" + newPerson.firstName() + "-options-" + b).append(
              '<option value="' + c + '">' + arrayOfResponses[b][c] + '</option>'
            );
          }
        }
      }
      // //Fill in blanks
      // $(".entered-occupation").append(Player.occupation);
      // $(".entered-hobby").append(Player.hobby);
      //Hide sign up, show profiles
      $("#create-profile").hide();
      $("#profiles").fadeIn();
      createDateButtons();
    }

    //Messenger toggles
    $("#message-Dutchess").click(function(){
      $(".message-box-Dutchess").slideToggle();
    });
    $("#message-Supul").click(function(){
      $(".message-box-Supul").slideToggle();
    });
    $("#message-Brenda").click(function(){
      $(".message-box-Brenda").slideToggle();
    });


    //Messenging Forms
      //Dutchess Messenger
      messengingSequence("Dutchess", 0, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Dutchess", 1, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Dutchess", 2, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Dutchess", 3, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Dutchess", 4, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Dutchess", 5, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);

      //Supul Messenger
      messengingSequence("Supul", 0, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Supul", 1, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Supul", 2, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Supul", 3, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Supul", 4, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Supul", 5, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);

      //Brenda Messenger
      messengingSequence("Brenda", 0, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Brenda", 1, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Brenda", 2, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Brenda", 3, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Brenda", 4, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Brenda", 5, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);

    });
});
