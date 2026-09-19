import mongoose from "mongoose";

import { Password } from "../services/password";

interface UsuarioAtributos {
  nombre: string;
  apellido: string;
  usuario: string;
  correo: string;
  password: string;
}

interface UsuarioModelo extends mongoose.Model<UsuarioDoc> {
  build(attrs: UsuarioAtributos): UsuarioDoc;
}

interface UsuarioDoc extends mongoose.Document {
  nombre: string;
  apellido: string;
  usuario: string;
  correo: string;
  password: string;
}

const usuarioEsquema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
    },
    usuario: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,

    toJSON: {
      transform(_doc, ret) {
        const { _id, __v, password, ...usuario } = ret;

        return {
          id: _id.toString(),
          ...usuario,
        };
      },
    },
  },
);

usuarioEsquema.pre<UsuarioDoc>("save", async function () {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
});

usuarioEsquema.statics.build = (attrs: UsuarioAtributos) => {
  return new Usuario(attrs);
};

const Usuario = mongoose.model<UsuarioDoc, UsuarioModelo>(
  "Usuario",
  usuarioEsquema,
);

export { Usuario };
