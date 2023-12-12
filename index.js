const currentTime = new Date();
const year = currentTime.getFullYear();

window.onload = function () {
  document.getElementById("header").innerHTML = `
  <!-- HEADER -->
  <div class="text-center mt-8">
    <a href="/" class="font-bold text-2xl m-1 hover:text-gray-500 sm:text-5xl">MURU 7.8</a>
    <hr class="mt-2 m-auto">
  </div>

  <div class="grid grid-cols-2 gap-2 text-base font-bold text-center mt-3 m-auto md:grid-cols-6">
    <a href="index.html" class="hover:text-gray-500">PROYECTOS</a>
    <a href="./acerca-de.html" class="hover:text-gray-500">ACERCA DE</a>
    <a href="./quienes-somos.html" class="hover:text-gray-500">QUIÉNES SOMOS</a>
    <a href="./bitacora.html" class="hover:text-gray-500">BITÁCORA</a>
    <a href="./tienda.html" class="hover:text-gray-500">TIENDA</a>
    <a href="./contacto.html" class="hover:text-gray-500">CONTACTO</a>
  </div>
  <!-- HEADER -->`;

  document.getElementById("footer").innerHTML = `
<p class="fixed bottom-0 left-0 right-0 text-center p-1 text-xs text-gray-400 bg-gray-800">Colectivo MURU 7.8 @ 2019 - ${year}</p>
`;
};
