onEvent("AskAQuestion", "click", function( ) {
	console.log("AskAQuestion clicked!");
	setScreen("QuestionAskingScreen");
	setText("SpiralSpeech", "Ask me a question and I will answer 1-10. 1 is unlikely and 10 is most likely.");
	playSpeech("Ask me a question and I will answer 1-10. 1 is unlikely and 10 is most likely.", "female", "English");
});
onEvent("AskingBox", "change", function( ) {
	console.log("AskingBox entered text: " + getText("AskingBox"));
	if (getText("AskingBox") == "") {
	  playSpeech("", "female", "English");
	} else {
	  setText("SpiralSpeech", randomNumber(1, 10));
	  playSpeech(getText("SpiralSpeech"), "female", "English");
	  setTimeout(function() {
	    setText("AskingBox", "");
	    setText("SpiralSpeech", "Ask me another if you wish.");
	    playSpeech(getText("SpiralSpeech"), "female", "English");
	  }, 2000);
	}
});
onEvent("BackToMenu", "click", function( ) {
	console.log("BackToMenu clicked!");
	setScreen("Menu");
});
onEvent("About", "click", function( ) {
  setScreen("AboutScreen");
});
onEvent("BackToMenu2", "click", function( ) {
  setScreen("Menu");
});
onEvent("Feedback", "click", function( ) {
  setScreen("FeedbackScreen");
});
onEvent("ContactButton", "click", function( ) {
  open("https://forms.gle/mZht8m9u365xKmAw8");
});
onEvent("BackToMenu3", "click", function( ) {
  setScreen("Menu");
});
