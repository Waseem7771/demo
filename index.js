// Hides all control buttons
function hideAllButtons() {
    $("#about, #work, #contact").hide();
}

// Shows all control buttons
function showAllButtons() {
    $("#about, #work, #contact").show();
}

// Toggles the display and animation of a container
function toggleContainer(containerId, action) {
    var $container = $("#" + containerId);
    var animationClass = (action === 'show') ? 'animated slideIn' : 'animated slideOut';
    var direction = containerId.includes('about') ? 'Left' : containerId.includes('work') ? 'Right' : 'Up';

    if (action === 'show') {
        hideAllButtons();
    }

    $container.css("display", action === 'show' ? "inherit" : "none");
    $container.addClass(animationClass + direction);

    setTimeout(function(){
        $container.removeClass(animationClass + direction);
        if (action === 'close') {
            $container.css("display", "none");
            showAllButtons();
        }
    }, 800);
}

// Shows the 'about' container
function showabout(){
    toggleContainer('about_container', 'show');
}

// Hides the 'about' container
function closeabout(){
    toggleContainer('about_container', 'close');
}

// Shows the 'work' container
function showwork(){
    toggleContainer('work_container', 'show');
}

// Hides the 'work' container
function closework(){
    toggleContainer('work_container', 'close');
}

// Shows the 'contact' container
function showcontact(){
    toggleContainer('contact_container', 'show');
}

// Hides the 'contact' container
function closecontact(){
    toggleContainer('contact_container', 'close');
}

// Hides the loading animation after a set time
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display", "none");
      $("#box").css("display", "none");
      $("#about, #contact, #work").removeClass("animated fadeIn");
    }, 1000);
}, 1500);



const canvas = document.getElementById('canvas'); // Replace with your actual canvas ID
canvas.addEventListener('mousemove', function(event) {
    console.log('Mouse move detected', event);
    // Your code to handle particle movement...
});
