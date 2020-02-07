    document.addEventListener ('DOMContentLoaded',function(){
        
        // variables
        var pagina = document.getElementById("general") ;
        var nombrePagina = "" ;



        //Div
            //Id
            var divId1 = "" ;
            var divId2 = "" ;

            //Class
            var divClass1 = "contenedor" ;
            var divClass2 = "banner" ;

        function div(divId,divClass){
            return " <div id=\"" + divId + "\" class=\"" + divClass + "\"> " ;
        }
        var divs = " </div>" ;
        //H
            //Id
            var h1Id1 = "" ;
            var h2Id1 = "" ;
            var h3Id1 = "" ;
            var h4Id1 = "" ;

            //Class
            var h1Class1 = "logo" ;
            var h2Class1 = "bannerTitulo" ;
            var h3Class1 = "" ;
            var h4Class1 = "" ;

        function h1(h1Id,h1Class){
            return " <h1 id=\"" + h1Id + "\" class=\"" + h1Class + "\"> " ;
        }
        function h2(h2Id,h2Class){
            return " <h1 id=\"" + h2Id + "\" class=\"" + h2Class + "\"> " ;
        }
        function h3(h3Id,h3Class){
            return " <h1 id=\"" + h3Id + "\" class=\"" + h3Class + "\"> " ;
        }
        function h4(h4Id,h4Class){
            return " <h1 id=\"" + h4Id + "\" class=\"" + h4Class + "\"> " ;
        }
        var h1s = " </h1> " ;
        var h2s = " </h2> " ;
        var h3s = " </h3> " ;
        var h4s = " </h4> " ;
        //Span
            //Id
            var spanId1 = "btnMenu" ;

            //Class
            var spanClass1 = "iconMenu" ;

        function span(SpanId,SpanClass){
            return " <span id=\"" + SpanId + "\" class=\"" + SpanClass + "\"> " ;
        }
        var spans = " </span> " ;
        //Header
            //Id
            var headerId1 = "" ;

            //Class
            var headerClass1 = "header" ;

        function header(HeaderId,headerClass){
            return " <header id=\"" + HeaderId + "\" class=\"" + headerClass + "\"> " ;
        }
        var headers = " </header> " ;
        //P
            //Id
            var pId1 = "" ;

            //Class
            var pClass1 = "bannerTxt" ;

        function p(pId,pClass){
            return " <p id=\"" + pId + "\" class=\"" + pClass + "\"> " ;
        }
        var ps = " </p> " ;
        //Ul
            //Id
            var ulId1 = "" ;

            //Class
            var ulClass1 = "menu" ;
        function ul(ulID,ulClass){
            return " <ul id=\"" + ulID + "\" class=\"" + ulClass + "\"> " ;
        }
        var uls = " </ul> " ;
        //Li
            //Id
            var liId1 = "" ;

            //Class
            var liClass1 = "menuItem" ;

        function li(liId,liClass){
            return " <li id=\"" + liId + "\" class=\"" + liClass + "\"> " ;
        }
        var lis = " </li> " ;
        //Nav
            //Id
            var navId1 = "nav" ;

            //Class
            var navClass1 = "nav" ;

        function nav(navId,navClass){
            return " <nav id=\"" + navId + "\" class=\"" + navClass + "\"> " ;
        }
        var navs = " </nav> " ;
        //Input
            //Id
            var inputId = "" ;

            //Class
            var inputClass = "" ;

            //Type
            var inputType = "" ;

            //Name
            var inputName = "";

        function input(inputId,inputClass,inputType,inputName){
            return "<input type=\"" + inputType + "\" name=\"" + inputName + "\" id=\"" + inputId + "\" class=\"" + inputClass + "\">";
        }
        //Button
            //Id
            var buttonId = "" ;

            //Class
            var buttonClass = "" ;

            //Type
            var buttonType = "" ;

            //Name
            var buttonName = "";

        function button(buttonId,buttonClass,buttonType,buttonName){
            return "<button type=\"" + buttonType + "\" name=\"" + buttonName + "\" id=\"" +buttonId + "\" class=\"" + buttonClass + "\">";
        }
        //Imagenes
        var srcImagen1 = "Images/img1.png";
        var altImagen1 = "Imagen1" ;
        var classImagen1 = "logo" ;

        function insertarImagen(ImagenClass,imagenImagen,altImagen){
            return " <img src=\"" + imagenImagen + "\" alt=\"" + altImagen + "\"  " + " class=\"" + ImagenClass + "\">  " ;
        }
        //Video
        var widthVideo1 = "" ;
        var heightVideo1 = "" ;
        var classVideo1 = "" ;
        var srcVideo1 = "" ;
        var typeVideo1 = "" ;
        function insertarVideo(classVideo,widthVideo,heightVideo,srcVideoMp4,typeVideoMp4,srcVideoOgg,typeVideoOgg){
            var videoReturn = "<video width=\"" + widthVideo + "\" height=\"" + heightVideo + "\" class=\"" + classVideo + "\" controls>" +
                                "<source src=\"" + srcVideoMp4 + "\" type=\"" + typeVideoMp4 + "\" >" +
                                "<source src=\"" + srcVideoOgg + "\" type=\"" + typeVideoOgg + "\" >" ;
            return videoReturn;
        }
        //A
            //Href
            var aHref1 = "" ;

           //Class
           var aClass1 = "menuLink" ;
           var aClass2 = "select" ;

        function a(aHref,aClass){
            return "<a href=\"" + aHref + "\" class=\"" + aClass + "\"> " ;
        }
        var as = " </a> ";

        //////////////////////////////////////////Pagina//////////////////////////////////////////////////////////////////////

        //Header
        var header = header(headerId1,headerClass1)
                         + div(divId1,divClass1)
                            + h1(h1Id1,h1Class1) + "MascoTaz" + h1s//+ insertarImagen(directorioImagen1,altImagen1,classImagen1)
                                + span(spanId1,spanClass1) + spans
                                    + nav(navId1,navClass1)
                                        + ul(ulId1,ulClass1)
                                            +li(liId1,liClass1) + a(aHref1,aClass1 + " " + aClass2) + "Inicio" + as + lis
                                            +li(liId1,liClass1) + a(aHref1,aClass1) + "Cursos" + as + lis
                                            +li(liId1,liClass1) + a(aHref1,aClass1) + "Docentes" + as + lis
                                            +li(liId1,liClass1) + a(aHref1,aClass1) + "Contactos" + as  + lis
                                        + uls
                                    + navs
                         + divs
                   + headers ;
        var banner = div(divId2,divClass2)
                        + insertarImagen(divClass2,srcImagen1,altImagen1)
                            + div(divId2,divClass1)
                                + h2(h2Id1,h2Class1) + "La Mejor Veterinaria" + h2s
                                    + p(pId1,pClass1) + "Consiga los mejores productos al mejor precio" + ps
                            + divs
                     divs ;
        //DOM  
        pagina.innerHTML = header + banner ;

        var nav = document.getElementById(navId1) ;
        console.log(nav);
        var btnMenu = document.getElementById(spanId1) ;
        btnMenu.addEventListener('click',function(){
            nav.classList.toggle('mostrar');
        });     
    });
    
