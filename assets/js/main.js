$(document).ready(function(){
    $('.sidenav').sidenav();

    function startScreen() {
        startButton = "<div class='row'><div class='col offset-s4'><button class='btn btn-large waves-effect waves-light start_button' type='submit' name='action'>View Me!<i class='material-icons right'>search</i></button></div></div>";
        $(".v-center").html(startButton);
    }
    startScreen();

    $("main").on("click", ".start_button", function(event){
        event.preventDefault();
        window.open('about.html','_self',false);
    });
});
