
class ListAnimal {
  _id = "";
  breed = "";
  name = "";
  photo = "";
  sex = "";
  specie = "";

  static from(json) {
    return Object.assign(new ListAnimal(), json);
  }

  static preview() {
    return ListAnimal.from({
      _id: "0d99c0dbb60bf00",
      breed: "CRUCE DE AMERICAN STAFFORDSHIRE TERRIER",
      name: "Lola",
      photo: "//www.zaragoza.es/cont/paginas/IMSP/mascotas/LOLA.jpg",
      sex: "Hembra",
      specie: "CANINA",
    });
  }
}

export default ListAnimal;
