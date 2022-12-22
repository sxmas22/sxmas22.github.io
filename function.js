document.addEventListener('DOMContentLoaded', function() {
 
    document.getElementsByTagName('form')[0].onsubmit = function(evt) {
      evt.preventDefault(); // Preventing the form from submitting
      checkWord(); // Do your magic and check the entered word/sentence
      window.scrollTo(0,150);
    }
   
    // Get the focus to the text input to enter a word right away.
    document.getElementById('terminalTextInput').focus();
   
    // Getting the text from the input
    var textInputValue = document.getElementById('terminalTextInput').value.trim();
   
    //Getting the text from the results div
    var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;
   
    // Clear text input
    var clearInput = function(){
      document.getElementById('terminalTextInput').value = "";
    }
   
    // Scrtoll to the bottom of the results div
    var scrollToBottomOfResults = function(){
      var terminalResultsDiv = document.getElementById('terminalReslutsCont');
      terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    }
   
    // Scroll to the bottom of the results
    scrollToBottomOfResults();
   
    // Add text to the results div
    var addTextToResults = function(textToAdd){
      document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
      scrollToBottomOfResults();
    }
   
    // Getting the list of keywords for help & posting it to the screen
    var postHelpList = function(){
      // Array of all the help keywords
      var helpKeyWords = [
        "- 'Start' to begin the quiz",
        "- 'Hint' + 'question', for hints for each questions",
        "- 'Time' will display the current time.",
        "- 'Date' will display the current date.",
        "* There are more keywords that you have to discover by yourself."
      ].join('<br>');
      addTextToResults(helpKeyWords);
    }
   
// Select the body element
const body = document.querySelector('body');

// Set the body's background to be a repeating image of small Christmas gifts
body.style.background = 'url(https://media3.giphy.com/media/Z4QogYbNJrzqUSLjiP/giphy.gif?cid=790b7611b52b876ed546e6fd66447aa1440fd95061bd0294&rid=giphy.gif&ct=g) repeat';

// Set the body's background size to be the width and height of the window
body.style.backgroundSize = `10% 50%`;




    // Getting the time and date and post it depending on what you request for
    var getTimeAndDate = function(postTimeDay){
      var timeAndDate = new Date();
      var timeHours = timeAndDate.getHours();
      var timeMinutes = timeAndDate.getMinutes();
      var dateDay = timeAndDate.getDate();
      console.log(dateDay);
      var dateMonth = timeAndDate.getMonth() + 1; // Because JS starts counting months from 0
      var dateYear = timeAndDate.getFullYear(); // Otherwise we'll get the count like 98,99,100,101...etc.
   
      if (timeHours < 10){ // if 1 number display 0 before it.
        timeHours = "0" + timeHours;
      }
   
      if (timeMinutes < 10){ // if 1 number display 0 before it.
        timeMinutes = "0" + timeMinutes;
      }
   
      var currentTime = timeHours + ":" + timeMinutes;
      var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;
   
      if (postTimeDay == "time"){
        addTextToResults(currentTime);
      }
      if (postTimeDay == "date"){
        addTextToResults(currentDate);
      }
    }
   
    // Opening links in a new window
    var openLinkInNewWindow = function(linkToOpen){
      window.open(linkToOpen, '_blank');
      clearInput();
    }
   
    // Having a specific text reply to specific strings
    var textReplies = function() {
      switch(textInputValueLowerCase){
        // replies
        case "code":
          clearInput();
          addTextToResults("Get web elements source code at... Nevermind! Don't cheat");
          break;
   
        case "founder":
          clearInput();
          addTextToResults("Jonas is the founder - now get on with the questions!");
          break;

          case "next":
          case "skip":
            clearInput();
            addTextToResults("No no no, no skipping here");
            break;

        case "gift":
        case "present":
            clearInput();
            addTextToResults("yesyesyes..  this is the gift.");
            break;

        case "joke":
          clearInput();
          addTextToResults("What do you get when you cross a snowman and a vampire? ---- Frostbite!");
          break;


   
        case "i love you":
        case "love you":
        case "love":
          clearInput();
          addTextToResults("Aww! Love you too ❤ - but this won't help you");
          break;
   
        case "hello":
        case "hi":
        case "hola":
          clearInput();
          addTextToResults("Hello, I am your present... ");
          break;
   
        case "what the":
        case "wtf":
          clearInput();
          addTextToResults("F***.");
          break;
   
        case "shit":
        case "poop":
        case "💩":
          clearInput();
          addTextToResults("💩");
          break;

        case "start":
        case "begin":
        case "quiz":
          clearInput();
          addTextToResults("1 or 11?");
          break;

        case "plateup":
          clearInput();
          addTextToResults("Lad os spille - skriv til mig");
          break;

          case "hint":
            clearInput();
            addTextToResults("hint + current question - e.g. 'hint where is the milk hidden'");
            break;

            case "hint where is the milk hidden":
              clearInput();
              addTextToResults("It was just an example, dang it. But if it smells, under the bed of something... Now back to the real quiz!");
              break;

              
        case "hint 1 or 11":
        case "hint 1 or 11?":
        case "hint 1/11":
          clearInput();
          addTextToResults("Batmans nemesis is hiding among kings and queens");
          break;

        case "hint an european or african swallow?":
        case "hint an european or african swallow":
        case "hint european swallow":
        case "hint african swallow":
              clearInput();
              addTextToResults("What is your name? What is your quest? What is your favorite colour?");
              break;
   
        case "aces":
        case "ace":
        case "es":
          clearInput();
          addTextToResults("An European or African swallow?");
          break;
              
        case "monty python":
        case "montypython":
        case "theholygrail":
        case "the holy grail":
        case "holygrail":
        case "holy grail":
        case "monty python and the holy grail":
        case "monty python the holy grail":
          clearInput();
          addTextToResults("What is there one of in every corner and two of in every room");
          break;

          case "hint what is there one of in every corner and two of in every room?":
          case "hint what is there one of in every corner and two of in every room":
          case "hint every corner":
          case "hint every room":
                clearInput();
                addTextToResults("Almost all search results and videos are owned by this");
                break;

        case "the letter o":
        case "thelettero":
        case "o":
        case "letter o":
        case "lettero":
        case "bogstavet o":
        case "bogstaveto":
          clearInput();
          addTextToResults("When I am needed you throw me away, but when I am of no use you take me back");
          break;

          case "hint when i am needed you throw me away, but when i am of no use you take me back":
          case "hint when i am needed you throw me away but when i am of no use you take me back":
          case "hint when i am needed you throw me away":
          case "hint when i am needed by you":
                  clearInput();
                  addTextToResults("A bar that hinders the way. A beam but no laser. A bow but no applause. Saloon but no western. A course without learning. A deck without cards.");
                  break;


          case "hint voiceless it cries, wingless flutters, toothless bites, mouthless mutters":
          case "hint voiceless it cries wingless flutters toothless bites mouthless mutters":
          case "hint voiceless it cries":
          case "hint voiceless it cries wingless flutters":
          case "hint voiceless it cries, wingless flutters":
              clearInput();
              addTextToResults("Hey, hey, hey, Ba-dee-ya, say, do you remember? Ba-dee-ya, dancin' in September, Ba-dee-ya, never was a cloudy daaaaaaay");
              break;

          case "an anchor":
          case "anchor":
          case "ananchor":
          case "anker":
          case "etanker":
          case "et anker":
              clearInput();
              addTextToResults("Voiceless it cries, wingless flutters, toothless bites, mouthless mutters") 
              break;

          case "the wind":
          case "wind":
          case "vind":
              clearInput();
              addTextToResults("TILLYKKE!! - du har vundet et 200 kroner gift card! - skriv til mig for at modtage det") 
              break;
        
   
        // replies 
   
        case "youtube":
          clearInput();
          addTextToResults("Type youtube + something to search for.");
          break;
   
        case "google":
          clearInput();
          addTextToResults("Type google + something to search for.");
          break;
   
          case "wiki":
          case "wikipedia":
            clearInput();
            addTextToResults("Type wiki + something to search for.");
            break;  
   
        case "time":
          clearInput();
          getTimeAndDate("time");
          break;
   
        case "date":
          clearInput();
          getTimeAndDate("date");
          break;
   
        case "help":
        case "?":
          clearInput();
          postHelpList();
          break;
   
        default:
        clearInput();
        addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to see all commands.</i></p>");
        break;
      }
    }
   

    const typewriter = document.querySelector('.typewriter');
    const text = typewriter.textContent;
    typewriter.innerHTML = '';
    
    let i = 0;
    const type = () => {
      if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    }
    
    setTimeout(type, 2000);



  // Main function to check the entered text and assign it to the correct function
    var checkWord = function() {
      textInputValue = document.getElementById('terminalTextInput').value.trim(); //get the text from the text input to a variable
      textInputValueLowerCase = textInputValue.toLowerCase(); //get the lower case of the string
   
      if (textInputValue != ""){ //checking if text was entered
        addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
        if (textInputValueLowerCase.substr(0,5) == "open ") { //if the first 5 characters = open + space
          openLinkInNewWindow('http://' + textInputValueLowerCase.substr(5));
          addTextToResults("<i>The URL " + "<b>" + textInputValue.substr(5) + "</b>" + " should be opened now.</i>");
        } else if (textInputValueLowerCase.substr(0,8) == "youtube ") {
          openLinkInNewWindow('https://www.youtube.com/results?search_query=' + textInputValueLowerCase.substr(8));
          addTextToResults("<i>I've searched on YouTube for " + "<b>" + textInputValue.substr(8) + "</b>" + " it should be opened now.</i>");
        } else if (textInputValueLowerCase.substr(0,7) == "google ") {
          openLinkInNewWindow('https://www.google.com/search?q=' + textInputValueLowerCase.substr(7));
          addTextToResults("<i>I've searched on Google for " + "<b>" + textInputValue.substr(7) + "</b>" + " it should be opened now.</i>");
        } else if (textInputValueLowerCase.substr(0,5) == "wiki "){
          openLinkInNewWindow('https://wikipedia.org/w/index.php?search=' + textInputValueLowerCase.substr(5));
          addTextToResults("<i>I've searched on Wikipedia for " + "<b>" + textInputValue.substr(5) + "</b>" + " it should be opened now.</i>");
        } else{
          textReplies();
        }
      }
    };
   
  });