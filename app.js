$(document).ready(function(){
        $(".text-capitalize").slideUp(2000).slideDown(2000, smallText);
        // $(".text-capitalize").slideDown("slow", smallText);
        
        function smallText(){
            $(".text-small").slideUp(2000).slideDown(2000);
        }
});
