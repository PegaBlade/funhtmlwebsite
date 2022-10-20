var score = 0 //Self explainatory
var questionsAnswered = 0



//Question 1
var submit1 = document.getElementById("submit1");
function question1()
{
 var ans1 = document.getElementById("answer1");
 var selectedValue1 = ans1.options[ans1.selectedIndex].value;
    if (selectedValue1 == "selectanswer")
   {
    swal.fire('Please Select An Answer!');
   }
   else if (selectedValue1 == "egg")
   {
    submit1.originalLink = submit1.href
    submit1.href = "javascript:void(0)";
    submit1.style.animation = "disbled";
    submit1.style.cursor = "default";
    submit1.style.color = "lime";
    submit1.textContent = "Correct";
    score = score + 1;
    questionsAnswered = questionsAnswered + 1;
   }
   else
   {
    Swal.fire("Wrong, it's an egg");
    submit1.originalLink = submit1.href
    submit1.href = "javascript:void(0)";
    submit1.style.animation = "disbled";
    submit1.style.cursor = "default";
    submit1.style.color = "red";
    submit1.textContent = "Wrong";
    questionsAnswered = questionsAnswered + 1;
   }
}

//Question 2
var submit2 = document.getElementById("submit2");
function question2()
{
 var ans2 = document.getElementById("answer2");
 var selectedValue2 = ans2.options[ans2.selectedIndex].value;
    if (selectedValue2 == "selectanswer")
   {
    swal.fire('Please Select An Answer!');
   }
   else if (selectedValue2 == "all")
   {
    submit2.originalLink = submit2.href
    submit2.href = "javascript:void(0)";
    submit2.style.animation = "disbled";
    submit2.style.cursor = "default";
    submit2.style.color = "lime";
    submit2.textContent = "Correct";
    score = score + 1;
    questionsAnswered = questionsAnswered + 1;
   }
   else
   {
    Swal.fire("Wrong, it's all of them. All of them have at least 28 days!");
    submit2.originalLink = submit1.href
    submit2.href = "javascript:void(0)";
    submit2.style.animation = "disbled";
    submit2.style.cursor = "default";
    submit2.style.color = "red";
    submit2.textContent = "Wrong";
    questionsAnswered = questionsAnswered + 1;
   }
}

//Question 3
var submit3 = document.getElementById("submit3");
function question3()
{
 var ans3 = document.getElementById("answer3");
 var selectedValue3 = ans3.options[ans3.selectedIndex].value;
    if (selectedValue3 == "selectanswer")
   {
    swal.fire('Please Select An Answer!');
   }
   else if (selectedValue3 == "prom")
   {
    submit3.originalLink = submit3.href
    submit3.href = "javascript:void(0)";
    submit3.style.animation = "disbled";
    submit3.style.cursor = "default";
    submit3.style.color = "lime";
    submit3.textContent = "Correct";
    score = score + 1;
    questionsAnswered = questionsAnswered + 1;
   }
   else
   {
    Swal.fire("Wrong, it's a promise!");
    submit3.originalLink = submit1.href
    submit3.href = "javascript:void(0)";
    submit3.style.animation = "disbled";
    submit3.style.cursor = "default";
    submit3.style.color = "red";
    submit3.textContent = "Wrong";
    questionsAnswered = questionsAnswered + 1;
   }
}

//Question 4
var submit4 = document.getElementById("submit4");
function question4()
{
 var ans4 = document.getElementById("answer4");
 var selectedValue4 = ans4.options[ans4.selectedIndex].value;
    if (selectedValue4 == "selectanswer")
   {
    swal.fire('Please Select An Answer!');
   }
   else if (selectedValue4 == "shadow")
   {
    submit4.originalLink = submit4.href
    submit4.href = "javascript:void(0)";
    submit4.style.animation = "disbled";
    submit4.style.cursor = "default";
    submit4.style.color = "lime";
    submit4.textContent = "Correct";
    score = score + 1;
    questionsAnswered = questionsAnswered + 1;
   }
   else
   {
    Swal.fire("Wrong, the answer is your shadow!");
    submit4.originalLink = submit1.href
    submit4.href = "javascript:void(0)";
    submit4.style.animation = "disbled";
    submit4.style.cursor = "default";
    submit4.style.color = "red";
    submit4.textContent = "Wrong";
    questionsAnswered = questionsAnswered + 1;
   }
}

function getScore()
{
if (questionsAnswered == "4")
{
    swal.fire("You got " + score + " questions correct!");
}
else
{
    swal.fire("You did not answer all the questions yet!")
}
}