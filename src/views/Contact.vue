<template>
    <div>
  <div class="flex justify-center pt-40 pb-20 bg-gray-200">
<div class="leading-loose">
  <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl" action="/sendMail.php">
    <p class="text-gray-800 font-medium">Formulario de contacto</p>
    <div class="">
      <label class="block text-sm text-gray-600" for="cus_name">Nombre de contacto</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" placeholder="Tu Nombre" aria-label="Name">
    </div>
        <div class="">
      <label class="block text-sm text-gray-600" for="cus_name">Nombre de la Organización</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" placeholder="Nombre de la Organización" aria-label="Name">
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-600" for="cus_email">Email</label>
      <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" placeholder="Tu Email" aria-label="Email">
    </div>
    <div class="mt-2">
      <label class=" block text-sm text-gray-600" for="cus_email">Dirección</label>
    </div>
    <div class="mt-2">
      <label class="hidden text-sm block text-gray-600" for="cus_email">Ciudad</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" placeholder="Ciudad" aria-label="Email">
    </div>
    <div class="inline-block mt-2 w-1/2 pr-1">
      <label class="hidden block text-sm text-gray-600" for="cus_email">Pais</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" placeholder="País" aria-label="Email">
    </div>
    <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
      <label class="hidden block text-sm text-gray-600" for="cus_email">Codigo Postal</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" placeholder="Codigo Postal" aria-label="Email">
    </div>
    <p class="mt-4 text-gray-800 font-medium">Info</p>
    <div class="">
      <label class="block text-sm text-gray-600" for="cus_name">Description</label>
      <textarea class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" cols="40" rows="5" placeholder=". . ." aria-label="Name"></textarea>
    </div>
    <div class="mt-4">
      <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded cursor-not-allowed" disabled type="submit">Send</button>
    </div>
  </form>
</div>
</div>    
    </div>
</template>
<script>
export default {
    name: "Contact",
    data:{
      form:[{
        "to": "djribelles@gmail.com",
        "subject": "",
        "msg": "",
        "email": "",

    }],
    },
    methods: {
      sendEmail(){
var xhttp;
xhttp = new XMLHttpRequest();

var formdata = new FormData();
formdata.append("email", form.email);
formdata.append("subject", form.subject);
formdata.append("msg", form.msg);
formdata.append("to", form.to);

xhttp.open("POST", "sendMail.php", true);
xhttp.send(formdata);
    }
}
}
</script>