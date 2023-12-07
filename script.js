var ofertas = [
    "Corte de pelo con 20% de descuento",
    "Peinado gratis con cualquier servicio",
    "Coloración a mitad de precio",
    "Tratamiento de keratina con regalo sorpresa",
    "Masaje capilar de cortesía",
    "Descuento del 15% en servicios de estilista",
    "Corte y secado por el precio de un corte",
    "Peinado a elección con cualquier tinte",
    "Lavado y secado gratis en tu tercer visita",
    "Tratamiento capilar premium al precio de uno regular",
    "Descuento especial para nuevos clientes",
    "Corte y coloración a precio de promoción",
    "Corte de tendencia con asesoramiento gratuito",
    "Masaje relajante al agendar dos servicios",
    "Descuento del 25% en productos de cuidado capilar",
    "Corte de cabello de moda con 30% de descuento",
    "Promoción de aniversario: 2x1 en cortes",
    "Peinado de fiesta con 20% de descuento",
    "Tinte premium con aplicación gratis",
    "Corte clásico a precio especial",
    "Corte y tratamiento de hidratación a precio único",
    "Coloración fantasía con 15% de descuento",
    "Masaje capilar relajante en cada visita",
    "Descuento exclusivo para estudiantes",
    "Corte de flequillo con regalo sorpresa",
    "Promoción de verano: refresca tu look con descuentos",
    "Descuento del 20% en servicios de estilista senior",
    "Corte y peinado a precio de oferta",
    "Coloración premium con regalo de producto",
    "Descuento especial para grupos",
    "Masaje capilar revitalizante con cualquier servicio",
    "Oferta especial para hombres: corte y afeitado",
    "Peinado de novia con asesoramiento personalizado",
    "Corte de cabello para niños a mitad de precio",
    "Tratamiento de hidratación profunda con descuento",
    "Promoción del mes: tinte + corte + peinado",
    "Descuento del 30% en servicios de alisado",
    "Lavado y secado express a precio reducido",
    "Corte y styling con productos premium",
    "Coloración orgánica con 25% de descuento",
    "Tratamiento de reconstrucción capilar con obsequio",
    "Descuento del 15% en productos de cuidado en casa",
    "Corte clásico con masaje capilar de cortesía",
    "Peinado de tendencia con asesoría de imagen gratis",
    "Descuento del 20% en servicios de colorista",
    "Corte y tratamiento antifrizz a precio especial",
    "Masaje capilar rejuvenecedor en cada visita",
    "Descuento especial para clientes fieles",
    "Corte y peinado para ocasiones especiales con regalo",
    "Coloración de raíces con 20% de descuento"
];

var currentIndex = 0;

function cambiarOferta() {
    var nuevaOferta = obtenerNuevaOfertaDesdeElServidor();
    mostrarOferta(nuevaOferta);
}

function obtenerNuevaOfertaDesdeElServidor() {
    // Incrementa el índice y reinicia si alcanza el final del array
    currentIndex = (currentIndex + 1) % ofertas.length;
    return ofertas[currentIndex];
}

function mostrarOferta(oferta) {
    var offerTextElement = document.getElementById("offerText");
    if (offerTextElement) {
        offerTextElement.textContent = oferta;
    }
}

window.onload = function() {
    // Configurar el evento de clic para el botón
    var changeOfferBtn = document.getElementById("changeOfferBtn");
    if (changeOfferBtn) {
        changeOfferBtn.addEventListener("click", cambiarOferta);
    }
};




// *********************************************************************
