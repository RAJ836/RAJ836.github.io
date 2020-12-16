errorMessage = document.getElementById("errorMessage");
chatText = "chatTranscript.lines";

var updateCallback = function(data){
    var value = data.newValue;
    var line = value[value.length -1];
    var movieName = line.text;
    if (line.source.toLowerCase()==="visitor"){
        var url = "https://www.omdbai.com?t="+movieName+"&apikey=";
        fetch(url)
                .then(function(response){
                    return response.json();
                }
                ).then(function(res){
                    document.getElementById("Title").innerHTML = res.Title;
                    document.getElementById("Year").innerHTML = res.Year;

                }).catch(function(error){
                    console.log("Error Message : "+error);
                })
    }
};

var notifyWhenDone = function(error) {
    if (err){
        console.log("I am inside notifyWhenDone function : "+err);
    }
    var chatText = "chatTranscript.lines";
    errorMessage.innerHTML = "Unable to find the movie";
};

lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);
