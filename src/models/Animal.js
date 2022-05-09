// TODO: Modelo temporal, sujeto a cambios.
class Animal {
  id = 0;
  ficha = "";
  raza = "";
  sexo = "";
  fechaNac = Date();
  edad = "";
  tamagno = "";
  peso = "";
  observaciones = "";
  nombre = "";
  especie = "";
  color = "";
  chenil = "";
  peligroso = false;
  microchip = "";
  cartilla = "";
  rabia = false;
  fechaRabia = Date();
  esterilizado = false;
  perdido = false;
  evaluacion = "";
  caracter = "";
  observacionesVet = "";
  fechaIngreso = Date();
  formaEntrada = "";
  entrada = "";
  urgencias = false;
  horaUrgencias = "";
  numPolicia = "";
  nombreSolicitante = "";
  apellidosSolicitante = "";
  dniSolicitante = "";
  telefonoSolicitante = "";
  domicilioSolicitante = "";
  mailSolicitante = "";
  disponible = "";
  fechaAdopcion = Date();
  nombreInteresado = "";
  apellidosInteresado = "";
  dniInteresado = "";
  telefonoInteresado = "";
  mailInteresado = "";
  direccionInteresado = "";
  tasa = "";
  importe = 0;
  pago = "";
  bloquear = false;
  desbloquear = false;
  fechaBloqueo = Date();

  static from(json) {
    return Object.assign(new Animal(), json);
  }

  static preview() {
    return Animal.from({
      id: 0,
      sexo: "masculino",
      fechaNac: Date.now(),
      tamagno: "chiquito",
      nombre: "Misifú",
      imagen: "https://i.imgur.com/qJ4UV1i.png",
      especie: "gatos",
      raza: "siames",
      edad: "1 mes",
      peso: "300 g",
      microchip: "si",
      esterilizado: "no",
      fechaIngreso: Date.now(),
      color: "Blanco y negro",
      peligroso: false,
      nombreSolicitante: "Policía Local",
      domicilioSolicitante: "C/ Rioja nº 14",
      observacionesVet:
        "Es muy bueno y juguetón con la gente, muy activo. Pero no se lleva bien con otros gatos.",
      observaciones:
        "Actualmente no se encuentra en el centro por lo que si quieres adoptarlo debes contactar con nosotros en el 976836554.",
    });
  }
}

export default Animal;
