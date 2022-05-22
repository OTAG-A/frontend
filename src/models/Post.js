import { default as User } from "./User";
import { default as Comment } from "./Comment";

class Post {
  id = "";
  user_id = "";

  title = "";
  user_explanation = "";
  category = "";

  user = new User();
  createdAt = "";
  updatedAt = "";

  replies = [];

  static from(json) {
    return Object.assign(new Post(), json);
  }

  static preview() {
    return Post.from({
      id: "123123123",
      title: "Cómo cuidar un gato",
      user_explanation:
        "Compra una jaula grande. A los canarios les gusta volar de un lado a otro. Por lo tanto, es importante que consigas una jaula muy amplia, aunque no necesariamente alta. Si solo tienes un canario, su jaula debe medir aproximadamente 40 cm (16 pulgadas) de alto y 80 cm (30 pulgadas) de ancho. Cuanto más grande sea la jaula, mejor será para el canario. Instala perchas.Compra madera natural en la tienda de animales para colocarla a manera de perchas a lo largo de la jaula.Compra perchas de diámetros diferentes para añadir un poco de diversidad a la experiencia del canario.Debido a que a los canarios les gusta volar horizontalmente, en lugar de hacerlo hacia arriba o abajo, coloca las perchas a los lados de la jaula, una frente a la otra.",
      category: "canina",
      user: User.preview(),
      createdAt: "2022-05-19T12:17:52.036Z",
      updatedAt: "2022-05-19T12:17:52.036Z",
      replies: [...Array(10)].map(() => Comment.preview()),
    });
  }

  get_url() {
    return "/foro/" + this.category + "/" + this.id;
  }
}

export default Post;
