<?php 
require ('header.php'); 
?>

<?php 
require ('nav.php'); 
?>

    <div class="w-full mt-10 p-4">

        <div class="md:max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
            <div class="w-[400px] h-[400px] mr-10">
                <img src="img/postres-vaso.jpg" class="object-cover rounded-lg">
            </div>
            <div class="w-full">
                <div class="mx-auto md:mx-0">
                    <h2 class="text-base">Taller práctico de 1 día</h2>
                    <h1 class="font-petrona text-4xl text-bordoInforcap">TALLER "POSTRES EN VASO"</h1>
                </div>
                <div class="md:flex my-10">
                    <div class="px-6 border-r-2 border-amarilloInforcap">
                        <p class="text-base text-gris">Mes</p>
                        <p class="text-2xl font-petrona text-bordoInforcap">Noviembre</p>
                    </div>
                    <div class="px-6 border-r-2 border-amarilloInforcap">
                        <p class="text-base text-gris">Día</p>
                        <p class="text-2xl font-petrona text-bordoInforcap">Sábado</p>
                    </div>
                    <div class="px-6 border-r-2 border-amarilloInforcap">
                        <p class="text-base text-gris">Fecha</p>
                        <p class="text-2xl font-petrona text-bordoInforcap">29/11/2025</p>
                    </div>
                    <div class="px-6 border-r-2 border-amarilloInforcap">
                        <p class="text-base text-gris">Hora</p>
                        <p class="text-2xl font-petrona text-bordoInforcap">08:00 a 12:00</p>
                    </div>
                </div>

                <p class="text-2xl mb-6 text-bordoInforcap font-bold">Aprenderás a elaborar</p>
                <ul class="text-base/loose">
                        <li>&rarr; POSTRE BROWNIE - SELVA NEGRA - RED VELVET.</li>
                        <li>&rarr; CÁLCULO DE COSTO.</li>
                </ul>

                <div class="mt-6">
                    <p><strong>Duración:</strong> 1 día<br>
                    <!-- <strong>Frecuencia:</strong> 1 vez a la semana<br><br>-->

                     <p class="mt-8 text-2xl font-bold text-bordoInforcap"><span class="bg-naranjaInforcap text-white px-4 py-2 rounded-lg">Costo: Gs. 175.000</span></p>
                 </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto bg-amarilloInforcap h-auto drop-shadow-xl mt-20 grid grid-cols-1 md:grid-cols-2 rounded-lg pb-10">
            
            <div class="w-full rounded-l-lg overflow-hidden">
                <h1 class="text-4xl p-10 font-bold text-bordoInforcap">¡No pierdas esta oportunidad! Elige tu carrera, elige un futuro mejor.</h1>
                <img src="https://images.pexels.com/photos/15587528/pexels-photo-15587528/free-photo-of-comida-azucar-postre-dulce.jpeg" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
            </div>
   
            </div>
        </div>
    </div>
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
                <input type="text" name="phone" id="phone" placeholder="Correo Electrónico" autocomplete="phone" class="block w-72 md:w-96 rounded-md border-0 px-2.5 py-2.5 text-gris shadow-sm ring-1 ring-inset ring-gray placeholder:text-gris focus:ring-2 focus:ring-inset focus:ring-gris sm:text-sm sm:leading-6">
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