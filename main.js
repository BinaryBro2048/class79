names = [];

function submit()
{
    names = [];
    document.getElementById("display_name").innerHTML = names;

    var name_1 = document.getElementById("name_of_the_student_1").value;
    var name_2 = document.getElementById("name_of_the_student_2").value;
    var name_3 = document.getElementById("name_of_the_student_3").value;
    var name_4 = document.getElementById("name_of_the_student_4").value;

    names.push(name_1);
    names.push(name_2);
    names.push(name_3);
    names.push(name_4);

    console.log(names);

    document.getElementById("display_name").innerHTML = names;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    names.sort();
    console.log(names);
    document.getElementById("display_name").innerHTML = names;
    document.getElementById("submit_button").style.display = "inline-block";
    document.getElementById("sort_button").style.display = "none";
}