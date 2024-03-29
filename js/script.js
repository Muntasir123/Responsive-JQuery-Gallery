$(document).ready(function(){
    $('nav a').on('click',function(){
        
        //current class assignment
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');
        
        //set Heading text
        
        $('h1#heading').text($(this).text());
        
        // get and filter text
    
        var category = $(this).text().toLowerCase().replace(' ','-');
        
        //remove hidden class if 'all-projects' is selected
        
        if(category == "all-projects"){
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else{
            
            $('ul#gallery li').each(function(){
                
                if(!$(this).hasClass(category))
                    {
                        $(this).hide().addClass('hidden');
                    }
                else{
                    $(this).fadeIn('slow').removeClass('hidden');
                }
                
            });
        }
        //stop link from behaviour
        return false;
        
        
    });
    
    $('ul#gallery li').on('mouseenter',function(){
        // get data attribute values
        
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');
        
        //validation
        
        if(desc == null){
            
            desc = 'Click to Enlarge';
            
        }
        
        if(title == null){
            title = '';
        }
        //create overlay div
        
        $(this).append('<div class = "overlay"></div>');
        var overlay = $(this).children('.overlay');
        
        // add html to overlay
        
        overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
        // fade in overlay
        overlay.fadeIn(800);
        
    });
    
    // Mouseleave overlay
    
    $('ul#gallery li').on('mouseleave',function(){
        
          $(this).append('<div class = "overlay"></div>');
           var overlay = $(this).children('.overlay');
            overlay.fadeOut(500);
        
    });
    
    
});