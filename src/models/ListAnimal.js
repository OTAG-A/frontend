class ListAnimal {
  id = 0;
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
      id: 123,
      breed: "CRUCE DE AMERICAN STAFFORDSHIRE TERRIER",
      name: "Lola",
      photo: "//www.zaragoza.es/cont/paginas/IMSP/mascotas/LOLA.jpg",
      sex: "Hembra",
      specie: "CANINA",
    });
  }
}

export default ListAnimal;
