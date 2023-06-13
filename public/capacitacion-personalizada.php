<?php 
require ('header.php'); 
?>

<?php 
require ('nav.php'); 
?>

    <div class="w-full bg-slate-50">
        <div class="max-w-7xl text-center py-8 px-8 mx-auto bg-slate-50">
            <h1 class="text-3xl font-bold tracking-tight font-petrona mb-8 text-bordoInforcap">Capacitación Personalizada </h1>
            <h3 class="text-base tracking-tight text-gris mb-8">Las organizaciones hoy en día buscan la constante capacitación para sus empleados o tales así grupos de personas que se unen para un fin común como es así. El Progreso de su desarrollo de vida para ello hemos pensado en capacitaciones personalizadas con el objetivo de ayudar a la formación de un determinado grupo de personas interesadas en el crecimiento profesional</h3>
        </div>
    </div>

<!--Sliders-->
<div class="w-full bg-bordoInforcap py-10">

    <div class="container max-w-7xl mx-auto text-white grid grid-cols-1 md:grid-cols-3">
            
            <div class="mt-10 ml-8 md:ml-0">
                <h1 class="font-bold mb-4 text-amarilloInforcap uppercase">Capacitaciones realizadas</h1>
                <div class="mb-4"><a href="#" class="hover:text-naranjaInforcap">&rarr; Clase con el Profesor José Alves</a></div>
                <div class="mb-4"><a href="#" class="hover:text-naranjaInforcap">&rarr; Capacitación Villarrica</a></div>
                <div class="mb-4"><a href="#" class="hover:text-naranjaInforcap">&rarr; Capacitación Encarnación</a></div>
                <div class="mb-4"><a href="#" class="hover:text-naranjaInforcap">&rarr; Capacitación Coronel Oviedo</a></div>
                <div class="mb-4"><a href="#" class="hover:text-naranjaInforcap">&rarr; Capacitación CDE</a></div>
                <div class="mb-4"><a href="#" class="hover:text-naranjaInforcap">&rarr; Capacitación Caaguazú</a></div>
            </div>

            <div class="col-span-2">

                <div class="" id="galeriaCursos">
                    
                    <div><img src="./img/capacitacion-10.jpg" alt=""></div>
                    <div><img src="./img/capacitacion-11.jpeg" alt=""></div>
                    <div><img src="./img/capacitacion-12.jpeg" alt=""></div>
                    <div><img src="./img/capacitacion-13.jpeg" alt=""></div>

                    <div><img src="./img/capacitacion-10.jpg" alt=""></div>
                    <div><img src="./img/capacitacion-11.jpeg" alt=""></div>
                    <div><img src="./img/capacitacion-12.jpeg" alt=""></div>
                    <div><img src="./img/capacitacion-13.jpeg" alt=""></div>
                
                </div>
     
                <div id="galeriaCursos-pager" class="w-full md:w-[800px] bg-grisClaro grid grid-cols-2 md:grid-cols-4">
        
                    <div class="w-auto m-2"><a href="#"><img src="./img/capacitacion-10.jpg" alt=""></a></div>
                    <div class="w-auto m-2"><a href="#"><img src="./img/capacitacion-11.jpeg" alt=""></a></div>
                    <div class="w-auto m-2"><a href="#"><img src="./img/capacitacion-12.jpeg" alt=""></a></div>
                    <div class="w-auto m-2"><a href="#"><img src="./img/capacitacion-13.jpeg" alt=""></a></div>

                    <div class="w-auto m-2"><a href="#"><img src="./img/capacitacion-10.jpg" alt=""></a></div>
                    <div class="w-auto m-2"><a href="#"><img src="./img/capacitacion-11.jpeg" alt=""></a></div>
                    <div class="w-auto m-2"><a href="#"><img src="./img/capacitacion-12.jpeg" alt=""></a></div>
                    <div class="w-auto m-2"><a href="#"><img src="./img/capacitacion-13.jpeg" alt=""></a></div>
                </div>
            </div>
        </div>
    </div>
</div>








<!--Cursos Disponibles-->

<div class="text-center py-8 px-6">
    <h1 class="text-6xl font-bold tracking-tight font-sacramento text-bordoInforcap">Cursos disponibles</h1>
    <h3 class="text-base tracking-tight text-gris">Nuestros talleres y seminarios están enfocados a impartir clases 1 vez a la semana. <br /> Descubre las mejores técnicas de la más deliciosa profesión.</h3>
</div>

<div class="w-56 md:container mx-auto flex grid grid-cols-1 md:grid-cols-5 md:max-w-7xl items-center place-content-center">
    <a href="#" class="w-48 md:w-56 mx-auto"><img src="img/icon-panaderia.png"></a>
    <a href="#" class="w-48 md:w-56 mx-auto"><img src="img/icon-reposteria.png"></a>
    <a href="#" class="w-48 md:w-56 mx-auto"><img src="img/icon-heladeria.png"></a>
    <a href="#" class="w-48 md:w-56 mx-auto"><img src="img/icon-confiteria.png"></a>
    <a href="#" class="w-48 md:w-56 mx-auto"><img src="img/icon-pasteleria.png"></a>
</div>

<!--Form de suscripcion Newsletter-->
<div class="md:w-full bg-[url('../img/bg-newsletter.png')] bg-cover bg-center my-20 px-8">
    <div class="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center place-content-center py-40">
        <div class="mb-8 md:mb-0">
            <h1 class="text-3xl text-white font-petrona">¿Te interesa uno de nuestros cursos?</h1>
            <p class="text-white">Suscribite a nuestro Boletín y te enviamos mensualmente nuestros cursos habilitados</p>
        </div>

        <div class="h-20 md:flex mx-auto">
            <div class="mr-2">
                <input type="text" name="phone" id="phone" placeholder="Correo Electrónico" autocomplete="phone" class="block w-80 md:w-96 rounded-md border-0 px-2.5 py-2.5 text-gris shadow-sm ring-1 ring-inset ring-gray placeholder:text-gris focus:ring-2 focus:ring-inset focus:ring-gris sm:text-sm sm:leading-6">
              </div>
              <div class="mt-4 md:mt-0">
                <button type="submit" class="block w-4/6 md:w-full rounded-md bg-bordoInforcap px-5 py-2.5 text-center text-base text-white shadow-sm hover:bg-amarilloInforcap hover:text-bordoInforcap">Inscribite</button>
              </div>
        
        </div>
    </div>
</div>

<!--Auspician-->

<div class="text-center py-0 md:py-8">
    <h1 class="text-6xl font-bold tracking-tight font-sacramento text-bordoInforcap">Auspician</h1>
    <h3 class="text-base tracking-tight text-gris">Las marcas que nos ayudan a que nuestros productos sean de la mejor calidad</h3>
</div>


    <div class="max-w-7xl grid grid-cols-1 md:grid-cols-4 mx-auto mb-20">
        <div class="mx-auto"><img src="./img/alcotec.png"></div>
        <div class="mx-auto"><img src="./img/copalsa.png"></div>
        <div class="mx-auto mx-auto"><img src="./img/trebol.png"></div>
        <div class="mx-auto"><img src="./img/yemita.png"></div>
    </div>


    <?php 
    require ('footer.php'); 
    ?>