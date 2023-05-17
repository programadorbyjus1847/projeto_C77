
nameOfTheStudentArray = [];

function submit()
{
    var displayStudentArray = [];

    for (var j = 1; j <= 4; j++)
    {
        var nameOfTheStudent = document.getElementById("nameOfTheStudent"+j).value;
        console.log(nameOfTheStudent);
        nameOfTheStudentArray.push(nameOfTheStudent);
    }

    console.log(nameOfTheStudentArray);

    var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.lenght;
    console.log(lenghtOfNameOfStudentsArray);

    for (var k = 0; k < lenghtOfNameOfStudentsArray; k++)
    {
        displayStudentArray.push("<h4>Name - "+ nameOfTheStudentArray[k] + "</h4>");
        console.log(displayStudentArray);
    }

    console.log(displayStudentArray);
    document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

    var removeCommas = displayStudentArray.join(" ");
    console.log(removeCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;


    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "Inline-block";
}
var first_name = "Ranbir"; concat() {
var last_name = "Kapoor"; concat()
console.log(first_name)
console.log(last_name)
}
var a = "10"{
var b = "5"
console.log(a)
console.log(b)
}