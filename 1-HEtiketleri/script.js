$(document).ready(function () {
   
    $("#mesaj-form").submit(function (event) {
        event.preventDefault(); 

        
        $(".error-message").hide();
        $("input, textarea").removeClass("error");

        let formValid = true;

      
        const email = $("#email").val();
        if (email === "") {
            $("#email-error").text("Email alanı boş bırakılamaz.").show();
            $("#email").addClass("error");
            formValid = false;
        }

       
        const konu = $("#konu").val();
        if (konu === "") {
            $("#konu-error").text("Konu alanı boş bırakılamaz.").show();
            $("#konu").addClass("error");
            formValid = false;
        }

        
        const aciklama = $("#aciklama").val();
        if (aciklama === "") {
            $("#aciklama-error").text("Açıklama alanı boş bırakılamaz.").show();
            $("#aciklama").addClass("error");
            formValid = false;
        }

        
        if (formValid) {
            alert("Mesaj başarıyla gönderildi!");
            
        }
    });

   
    $("#geri-dön-btn").click(function () {
        $("#mesaj-formu").hide();
        $("div[id^='hakkimda'], div[id^='projeler'], div[id^='yetenekler']").show();
        $("#iletisim").show();

   
        $("#mesaj-form")[0].reset(); 
        $(".error-message").hide(); 
        $("input, textarea").removeClass("error"); 
    });

   
    $("#mesaj-btn").click(function () {
        $("#mesaj-formu").show(); 
        $("div[id^='hakkimda'], div[id^='projeler'], div[id^='yetenekler']").hide(); 
        $("#iletisim").hide(); 
    });

   
    $(".toggle").click(function () {
        const content = $(this).next(".content");
        content.slideToggle(300);
    });
});
