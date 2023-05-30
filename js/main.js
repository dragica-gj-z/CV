function sendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_z14k8kd", "template_2vwj0ld", params).then(function (res) {
        alert("Message sended! " + res.status);
    })
} 

// jQuery funkcija so koja se otkriva i sokriva text

/*$("p").hide();
$("#btn_hide").click(function(){
    $(".content").slideToggle();    
})
$("#btn_show").click(function(){
    $(".content2").slideToggle();    
})*/
document.getElementById("span1").addEventListener('click',function(){
    document.getElementById("holder").classList.toggle("active");
});

document.getElementById("span2").addEventListener('click',function(){
    document.getElementById("wraper").classList.toggle("active");
});



