var config = {
   apiKey: "AIzaSyC309JznQjwixDm7VGp3sCd5BZo7yaVI3I",
   authDomain: "train-project-6ba19.firebaseapp.com",
   databaseURL: "https://train-project-6ba19.firebaseio.com",
   projectId: "train-project-6ba19",
   storageBucket: "train-project-6ba19.appspot.com",
   messagingSenderId: "754151337861"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function(event) {
     event.preventDefault();

    var trainName = $("#trainname").val().trim();
    var trainDest = $("#traindestination").val().trim();
    var trainTime = $("#traintime").val().trim();
    var trainFreq = $("#trainfrequency").val().trim();

    var trainInfo = {
        name: trainName,
        destination: trainDest,
        time: trainTime,
        frequency: trainFreq
    };
    database.ref().push(trainInfo);

    console.log(trainInfo.name);
    console.log(trainInfo.destination);
    console.log(trainInfo.time);
    console.log(trainInfo.frequency);

    $("#trainname").val("");
    $("#traindestination").val("");
    $("#traintime").val("");
    $("#trainfrequency").val("");

    database.ref().on("child_added", function(childSnapshot) {
        var trainName = childSnapshot.val().name;
        var trainDest = childSnapshot.val().destination;
        var trainTime = childSnapshot.val().time;
        var trainFreq = childSnapshot.val().frequency;

        $("#train-table").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainTime + "</td><td>" + trainFreq + "</td><td>");

    });


});
