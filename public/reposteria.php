<?php 
require ('header.php'); 
?>

<?php 
require ('nav.php'); 
?>



    <div class="w-full bg-slate-50">
        <div class="max-w-7xl py-8 px-8 mx-auto">
            <p>Clases Magistrales</p>
            <h1 class="text-3xl font-bold tracking-tight font-petrona text-bordoInforcap">Dictadas por invitados especiales como: </h1>
            <div class="text-xl tracking-tight text-gris mb-8">
                
            <p><strong>Dictadas por invitados especiales como: </strong><br>
                        <strong>Profesor José D'Alonzo:</strong> Maestro Pastelero y Heladero de la Escuela Profesional de Pastelería de Buenos Aires - Argentina<br></p>
                    <p><strong>Chef José Alves:</strong> Gran Maestro Pastelero y Chocolatero de la empresa Mavalerio - Brasil</p>

            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="md:col-span-2" id="galeriaCursos">
                    <div><img src="./img/magistrales-1.jpg"></div> 
                    <div><img src="./img/magistrales-2.jpg" alt=""></div>
                    <div><img src="./img/magistrales-3.jpg" alt=""></div>
                    <div><img src="./img/magistrales-4.jpg" alt=""></div>
                    <div><img src="./img/magistrales-6.jpg"></div> 
                    <div><img src="./img/magistrales-7.jpg" alt=""></div>
                    <div><img src="./img/magistrales-8.jpg" alt=""></div>
                    <div><img src="./img/magistrales-9.jpg" alt=""></div>
                    <div><img src="./img/magistrales-10.jpg" alt=""></div>
                </div>
                
                <div class="md:relative w-full h-full bg-amarilloInforcap md:w-96 md:h-96">
                        <div class="md:absolute p-10 font-sacramento text-4xl text-bordoInforcap text-left z-20">Elige tu carrera, elige tu mejor futuro</div>
                </div>
               
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