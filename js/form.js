
var x = document.getElementById("form_sample"); // This is the Div #form_sample

var createform = document.createElement('form'); // this is the form element
createform.setAttribute("action","");
createform.setAttribute("method", "post")
x.appendChild(createform);

var heading = document.createElement('h2'); //this is the h2 heading
heading.innerHTML = "Contact Form";
createform.appendChild(heading);

var line = document.createElement('hr'); //This is a line in the form
createform.appendChild(line);


var linebreak = document.createElement('br'); //this is a break
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // This is the name label
namelabel.innerHTML = "Your Name: ";
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // This is the input attributes for the name label
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br'); // this is another break
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // This is the email label
emaillabel.innerHTML = "Your Email: ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); //This is the email label input
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br'); // This is another break
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label'); // This is the message label
messagelabel.innerHTML = "Your Message: ";
createform.appendChild(messagelabel);

var textareaelement = document.createElement('textarea'); // This is the textarea 
textareaelement.setAttribute("name", "dmessage");
createform.appendChild(textareaelement);

var messagebreak = document.createElement('br'); // This is another break
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // This is the submit button area
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);
