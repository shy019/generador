    document.addEventListener ('DOMContentLoaded',function(){
        
        // variables
        var pagina = document.getElementById("general") ;
        var nombrePagina = "" ;

        //Div
            //Id
            var divId1 = "" ;

            //Class
            var divClass1 = "contenedor" ;

        function div(divId,divClass){
            return " <div id=/\" " + divId + " \" class=\" " + divClass + " \"> " ;
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
            var h2Class1 = "" ;
            var h3Class1 = "" ;
            var h4Class1 = "" ;

        function h1(h1Id,h1Class){
            return " <h1 id=/\" " + h1Id + " \" class=\" " + h1Class + " \"> " ;
        }
        function h2(h2Id,h2Class){
            return " <h1 id=/\" " + h2Id + " \" class=\" " + h2Class + " \"> " ;
        }
        function h3(h3Id,h3Class){
            return " <h1 id=/\" " + h3Id + " \" class=\" " + h3Class + " \"> " ;
        }
        function h4(h4Id,h4Class){
            return " <h1 id=/\" " + h4Id + " \" class=\" " + h4Class + " \"> " ;
        }
        var h1s = " </h1> " ;
        var h2s = " </h2> " ;
        var h3s = " </h3> " ;
        var h4s = " </h4> " ;
        //Span
            //Id
            var spanId1 = "" ;

            //Class
            var spanClass1 = "icon-menu" ;

        function span(SpanId,SpanClass){
            return " <span id=/\" " + SpanId + " \" class=\" " + SpanClass + " \"> " ;
        }
        var spans = " </span> " ;
        //Header
            //Id
            var headerId1 = "" ;

            //Class
            var headerClass1 = "header" ;

        function header(HeaderId,headerClass){
            return " <header id=/\" " + HeaderId + " \" class=\" " + headerClass + " \"> " ;
        }
        var headers = " </header> " ;
        //P
            //Id
            var pId1 = "" ;

            //Class
            var pClass1 = "" ;

        function p(pId,pClass){
            return " <p id=/\" " + pId + " \" class=\" " + pClass + " \"> " ;
        }
        var ps = " </p> " ;
        //Ul
            //Id
            var ulId1 = "" ;

            //Class
            var ulClass1 = "" ;
        function ul(ulID,ulClass){
            return " <ul id=/\" " + ulID + " \" class=\" " + ulClass + " \"> " ;
        }
        var uls = " </ul> " ;
        //Li
            //Id
            var liId1 = "" ;

            //Class
            var liClass1 = "menuItem" ;

        function li(liId,liClass){
            return " <li id=/\" " + liId + " \" class=\" " + liClass + " \"> " ;
        }
        var lis = " </li> " ;
        //Nav
            //Id
            var navId1 = "" ;

            //Class
            var navClass1 = "nav" ;

        function nav(navId,navClass){
            return " <nav id=/\" " + navId + " \" class=\" " + navClass + " \"> " ;
        }
        var navs = " </nav> " ;
        //Imagenes

        var directorioImagen1 = "Images/img1.png";
        var altImagen1 = "Imagen1" ;

        function insertarImagen(Imagen,alt){
            return " <img src=\"" + Imagen + "\" alt=\"" + alt + "\">  " ;
        }
        //A
            //Href
            var aHref1 = "" ;

           //Class
           var aClass1 = "menuLink" ;

        function a(aHref,aClass){
            return "<a href=\"" + aHref + "\" class=\" " + aClass + " \"> " ;
        }
        var as = " </a> ";

        //////////////////////////////////////////Pagina//////////////////////////////////////////////////////////////////////

        //Header
        var header = header(headerId1,headerClass1)
                         + div(divId1,divClass1)
                            + insertarImagen(directorioImagen1,altImagen1)
                                + span(spanId1,spanClass1) + spans
                                    + nav(navId1,navClass1)
                                        + ul(ulId1,ulClass1)
                                            +li(liId1,liClass1) + a(aHref1,aClass1) + "Inicio" + as + lis
                                            +li(liId1,liClass1) + a(aHref1,aClass1) + "Cursos" + as + lis
                                            +li(liId1,liClass1) + a(aHref1,aClass1) + "Docentes" + as + lis
                                            +li(liId1,liClass1) + a(aHref1,aClass1) + "Contactos" + as  + lis
                                        + uls
                                    + navs
                         + divs
                   + headers ;
        //DOM

        pagina.innerHTML = header;
    });
