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
      imagen:
        "https://i.imgur.com/qJ4UV1i.png",
    });
  }
}

export default Animal;
