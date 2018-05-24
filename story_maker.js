function makeStory() {
  // get form values
  var boyName1 = document.getElementById('noun1').value;
  var girlName1 = document.getElementById('noun2').value;
  var ingVerb1= document.getElementById('verb1').value;
  var ingVerb2 = document.getElementById('verb2').value;
  var ingVerb3 = document.getElementById('verb3').value;
  var skill1 = document.getElementById('skill1').value;
  var song1 = document.getElementById('song1').value;
  var boyname2 = document.getElementById('boyname2').value;
  var adjective1 = document.getElementById('adjective1').value;
  var car1 = document.getElementById('car1').value;
  var clothing1 = document.getElementById('clothing1').value;
  var flavor1 = document.getElementById('flavor1').value;
  var height1 = document.getElementById('height1').value;
  var animal1 = document.getElementById('animal1').value;
  var noun3 = document.getElementById('noun3').value;
  var pickUp1= document.getElementById('pickUp1').value;
  var noun4 = document.getElementById('noun4').value;
  var bodyPart1 = document.getElementById('bodyPart1').value;

    // Set title of story.
    var title = "The Luv Docta";

    // Build story.
    var paragraph1 = boyName1 +" was very lonely.  He really liked this girl "+ girlName1 +
                     ".  The only problem was she didn't like him.  He tried everything from "+ ingVerb1+
                     " her to "+ ingVerb2+" her but nothing seemed to do the trick.  One day while he was thinking about him and "+
                     girlName1 + " "+ ingVerb3+ " together, he came across a flyer. It said...  Having trouble with the girls? Is " +
                     ingVerb1 + " and " + ingVerb2 + " the girls not working for you?  Call the Luv Docta!  His famous " +
                     skill1 + " skills will help you get all them babes ;)  Call 867-5309 to change your life for the better.  " +
                     boyName1 + " decided to call the number...bbrriingg... brriiingg... Please hold.  As he was waiting " +
                     song1 + " was playing on the line.  Finally the Luv Docta's assistant " + boyname2 +
                     " picked up the phone. They set up a date for him to meet with the Docta himself.  The Luv Docta was a very " +
                     adjective1 + " man. He drove a " + car1 + " and never wore a " + clothing1 + ".  He smoked a " + flavor1 +
                     " cigar and was only " + height1 + " feet tall.  He told " + boyName1+
                     " that if he was ever going to get " + girlName1 + " he needed to activate his inner " + animal1 +
                     ".  The Luv Docta taught him his most valued secrects of the women.  He called them the Three Tricks.  First, never aporach a women with a "
                     + noun3 + ". She will not like that. Second, when flirting with your special lady friend always start the conversation with " + pickUp1 +
                     ".  This is like the mating call that draws in your lady friends wild side. And Third, whatever you do never ever talk about your "
                     + noun4 + ". With new found confidence " + boyName1 + " approached " + girlName1 + " and said "
                     +pickUp1 + ".  She turned around kicked him in the " + bodyPart1 + " and ran away.  The End.";



    // Display story.
    document.getElementById('intro_paragraph').innerHTML = paragraph1;
}
