//Checks that name field does not contain numbers//
function getName(){
	var yourName;
    yourName = document.getElementById("name").value;
    if(yourName == " " || isNaN(yourName) == false){
        yourName="null";
        alert("Please Enter a Valid Name");
        return false;
    }
    	window.location = "quiz.html";
    	return true;
}

//Global variable
var contentHTML="";

//All questions with answer choices and correct answer
var questions=[
			//History of the Internet and the World Wide Web
			["When did Sir Tim Berners-Lee invent the World Wide Web?","1993","1989","1984","1991","2"],
			["A series of networks that allow computers to connect and communicate with each other globally:","Internet","World Wide Web","Web","Computer Networking","1"],
			["Which three protocols are used in the World Wide Web?","HTML, SMTP, URL","HTML, CSS, Javascript","HTML, HTTP, SMTP","HTTP, HTML, URL","4"],
			["An information system that allows users to share and access informational documents on the internet:","Internet","World Wide Web","Networking","Computer","2"],
			["During the Cold War, the Soviet Union could use its missile to attack and destroy American telephone systems. As military experts and scientists were concerned, MIT scientist, J.C.R. Licklider proposed a solution that allows computers to talk to one another. What is this solution called?","Computers Network","Internet","Galactic Network","Technology Network","3"],
			["What does packet switching do?","Exchanges packets from one computer to another.","Breaks down data into smaller packets and transport them through a specific route to their destination.","Breaks down data into smaller packets and transport them through different routes to their destination.","Transports the entire data from one computer to another.","3"],
			["What is a TCP/IP and when was it first written?","Transmission Control Protocol/Internet Protocol, 1973","Transport Control Protocol/Internet Protocol, 1983","Transmission Computer Protocol/Internet Protocol, 1970","Transport Computer Protocol/Internet Protocol, 1980","1"],
			["The National Center for Supercomputing Applications (NCSA) developed the first web browser that become popular with the general public in 1993, what is it called?","Mozilla Firefox 1.0","Nexus 1.0","Lynex 2.0","Mosaic 1.0","4"],
			["What was the first search engine?","Yahoo!","Archie","Lycos","Excite","2"],
			["Who created W3C and why?","Tim Berners-Lee created W3C to set Web standards for the public to use.","Jeffrey Jaffe created W3C to set Web standards for the public to use.","Tim Berners-Lee created W3C to provide a platform for programmers to communicate and invent Web standards.","Jeffrey Jaffe created W3C to to provide a platform for programmers to communicate and invent Web standards.","1"],
			//HTML
			["When was HTML created?","1997","1991","1989","1983","3"],
			["What is the first line of an HTML document?","< !DOCTYPE html >","< !DOCTYPE >","DOCTYPE","< html >","1"],
			["Which of the following is NOT a completely new element in HTML5?","< canvas >","< article >","< audio >","< time >","2"],
			["What is the correct HTML element to insert a line break?","< break >","< br >","< brk >","< line >","2"],
			["Which of the following is the correct way to close a 'div' tag?","div","< div >","/div/","< /div >","4"],
			["Which of the following are elements for creating a table?","< table >< td >< tr >","< table >< tt >< th >","< caption >< tr >< tt >","< thead >< tt >< col >","1"],
			['What is the correct way to style the background color of the Body section to black?','< body backgroundColor: “black” >','< body“background-color:black” >','< body style= “background-color: black” >','< style backgoundColor=“black” >',"3"],
			['What is the correct way to link to an email of example@html.com?','< email >example@html.com< /email >','< a src = email: “example”@:html.com>Email Me!< /a >','< a href = “mailto:example@html.com” >Email Me!< /a >','< a:“email-open”, “send” >example@html.com< /a >',"3"],
			["How do you end an HTML document?","< /end >","There is no end tag.","< /!DOCTYPE html >","< /html >","4"],
			["What is the correct way to add an image?",'< image(href= “../../../”) >','< img src = “../../../” alt= “This is an image” >','< image src = “../../../” alt= “This is an image” >','< img href = “../../../” alt = “This is an image” >',"2"],
			//CSS 
			["To apply a certain style to the entire site, which of the following would you place that attribute in?","entireSite","body","whole","page","2"],
			["Which of the following would be used in css to style a class named “example”?","#example","myExample",".example",".myExample","1"],
			["Which of the following styles a navigation bar in CSS?","nav","navBar","navigation","NAV","1"],
			["What does a default “ul” create?","Roman numeral","Numbered List","Unique List","Bulleted List","4"],
			["Which of the following is NOT a unit of size?","em","px","sz","%","3"],
			["Which is used to change fonts?","font","font-family","text","text-font","2"],
			["Which is NOT part of the box model?","Padding","Margin","Border","Spacing","4"],
			["Which is used to identify an id in css?","# pound",". period","* asterisk","& ampersand","1"],
			["What does the following denotate: /* example */","Style","Attribute","Comment","Tag","3"],
			["Which is NOT an option under “list-style-type”?","Disc","Diamond","Square","Decimal","2"],
			//Javascript
			["What year did JavaScript begin?","1989","1983","1995","2001","3"],
			["Which of the following is NOT an event name?","onclick","onmouseover","onload","onhover","4"],
			["What is “if” used for in JavaScript?","Conditional statement","Declarative statement","Interrogative statement","Imperative statement","1"],
			["Which of the following is used to enclose an array in JavaScript?","() Parentheses","// Slashes","{} Curly Braces","[] Brackets","4"],
			["What does the triple equal sign mean? (===)","Equality for left and right side values","Strictly equal to, identical","This is not used in JavaScript","Assignment of a value to a variable","2"],
			["Which of the following set of words creates and stops a loop?","if, var--","while, var++","then,varEnd","when,varStop","2"],
			["Which of the following does NOT give an output in the console?","console.text","console.log","console.error","console.warn","1"],
			["Which word is associated with a JavaScript list of items?","Series","Arrangement","Array","Inventory","3"],
			["Which can NOT be used for creating strings?",'"This is a string"',"This is a string","'This is a string'","These can all be used","2"],
			["What does DOM stand for and what is it?","Dictionary Obstacle Meter, defines words and determines their difficulties on a scale of 1-10","Domain Organized Motion, synchronized movement of domain names from one hosting site to another","Developer Occupation Meaning, explains tasks and actions of various developer types, often seen in page sources","Document Object Model, a way to reach into the page from our script and the way our page can reach into our script","4"]
		];
//Shorter name for writing questions.length (array)
var qCount = questions.length;

//Randomize the array questions
var seq = new Array(qCount);
for (var x1 = 0; x1 < qCount; x1++) {
    seq[x1] = -1;//var x1 cannot equal show up twice, shown later
}
		//Load questions onto the Web Page
		function loadQuestions(questionsNo){
			contentHTML+='<h2>'+questions[questionsNo][0]+'</h2>';
			//Add in a loop to display all answer choices
				var i;
				for (i = 1; i <= 4; i++) {
					contentHTML+='<input type="radio" name="radio'+questionsNo+'" value="'+questions[questionsNo][i]+'">'+questions[questionsNo][i]+'';
					contentHTML+='<br>';
			};
			//Defines where contentHTML goes on in HTML
			var content= document.getElementById("place-holder");
			content.innerHTML=contentHTML;
		}

		//Display all questions with answer choices
		function allQuestions(){
			//Add in a loop to display everything in loadQuestions function 
			var i;
			for (i = 0; i < qCount; i++) {
			    loadQuestions(nextAvailableNumber(i));//loadQuestion calls random generator *BELOW*
			};
        }

        //Random question generator 
        function nextAvailableNumber(i) {
        	//Randomize the number
            var nextNumber = Math.round(Math.random() * qCount);
	            //Goes into a loop when i is already generated, or showed up already
	            while (seq[nextNumber]!=-1) {
	                nextNumber = Math.round(Math.random() * qCount);
	            }
	        //Assigns a new number to the question and display them randomly
            seq[nextNumber] = i;
            //alert(nextNumber); Helps to debug, make sure all numbers are all different
            return nextNumber;
        }

        //Find question array number after randomizing all of the questions
        function findQuestionNumber(i) {
            var j=0;
            while (seq[j] != i) {
                j++;
            }
            return j;
        }

        //Check answers
		function checkAnswers(){
		    var correctNo = 0;
		    for (var qNo = 0; qNo < qCount; qNo++) {
		        var realqNo = findQuestionNumber(qNo);
		        var answers = document.getElementsByName('radio' + realqNo);
				var selected=-1;
				for (var i = 0; i<answers.length; i++) {
					//Testing if the answers are checked
					if(answers[i].checked){
					    selected = i;
					    //Check if the selected answer is correct or not
					    if (i+1==questions[realqNo][5]) {
					        correctNo++;
						};
					};
				};
				//If the question is not checked
				if (selected == -1) {
					alert('Question ' + (qNo+1) + ' is not answered!');
					return false;
				};
			};
		//Redirect to Thanks page
    	window.location = "thanks.html";
    	alert("You got" + " " + correctNo + "/40 Correct!");
		return true;
		}