// TODO: Modelo temporal, sujeto a cambios.
class Animal {
  id = 0;
  date = "";
  name = "";
  specie = "";
  breed = "";
  sex = "";
  size = "";
  color = "";
  photo = "";
  description = "";
  rage = false;
  danger = false;
  sterile = false;
  bornDate = "";
  adoptionDate = "";

  static from(json) {
    return Object.assign(new Animal(), json);
  }

  static preview() {
    return Animal.from({
      date: "2022-05-17T22:00:00.000Z",
      id: 4709,
      name: "Terry (G)",
      specie: "CANINA",
      breed: "AMERICAN STAFFORDSHIRE TERRIER",
      sex: "Macho",
      size: "Grande (26-44 kg)",
      color: "Blanco y Atigrado",
      photo: "//www.zaragoza.es/cont/paginas/IMSP/mascotas/terry2.jpg",
      description:
        "es necesaria licencia y seguro.   ES muy  bueno y jugueton con la gente, muy activo. Pero no se lleva bien con otros perros y perras.  Ideal para una casa sin perros Está esterilizado SE MERECE UN HOGAR!! Terry actualmente no se encuentra en el centro por lo que si quieres adoptarlo debes contactar con nosotros en el 976836554.",
      rage: false,
      danger: true,
      sterile: true,
      bornDate: "2010-09-06T22:00:00.000Z",
      adoptionDate: "2014-09-06T22:00:00.000Z",
    });
  }
}

export default Animal;
