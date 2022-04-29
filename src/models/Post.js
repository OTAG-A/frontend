import { default as User } from "./User";

class Post {
  id = 0;
  category = "";

  title = "";
  body = "";

  user = new User();
  creationDate = new Date();

  static from(json) {
    return Object.assign(new Post(), json);
  }

  static preview() {
    return Post.from({
      id: 0,
      category: "gatos",
      title: "Cómo cuidar un gato",
      body: "Compra una jaula grande. A los canarios les gusta volar de un lado a otro. Por lo tanto, es importante que consigas una jaula muy amplia, aunque no necesariamente alta. Si solo tienes un canario, su jaula debe medir aproximadamente 40 cm (16 pulgadas) de alto y 80 cm (30 pulgadas) de ancho. Cuanto más grande sea la jaula, mejor será para el canario. Instala perchas.Compra madera natural en la tienda de animales para colocarla a manera de perchas a lo largo de la jaula.Compra perchas de diámetros diferentes para añadir un poco de diversidad a la experiencia del canario.Debido a que a los canarios les gusta volar horizontalmente, en lugar de hacerlo hacia arriba o abajo, coloca las perchas a los lados de la jaula, una frente a la otra.",
      user: User.preview(),
      creationDate: Date.now(),
    });
  }

  get_url() {
    return "/foros/" + this.category + "/" + this.id;
  }
}

export default Post;
