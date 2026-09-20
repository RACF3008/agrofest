import mongoose from "mongoose";

import { ProductoServicio } from "../types/ProductoServicio";

interface ReservaAttrs {
  evento: string;
  fecha: Date;
  usuarioId: string;
  productosIds: string[];
  serviciosIds: string[];
}

interface ReservaModel extends mongoose.Model<ReservaDoc> {
  build(attrs: ReservaAttrs): ReservaDoc;
}

interface ReservaDoc extends mongoose.Document {
  evento: string;
  fecha: Date;
  usuarioId: string;
  productosIds: string[];
  serviciosIds: string[];
}

const reservaEsquema = new mongoose.Schema(
  {
    evento: {
      type: String,
      required: true,
    },
    fecha: {
      type: Date,
      required: true,
    },
    usuarioId: {
      type: String,
      required: false,
    },
    productosIds: {
      type: [String],
      required: true,
    },
    serviciosIds: {
      type: [String],
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        const { _id, ...usuario } = ret;

        return {
          id: _id.toString(),
          ...usuario,
        };
      },
    },
  },
);

reservaEsquema.statics.build = (attrs: ReservaAttrs) => {
  return new Reserva(attrs);
};

const Reserva = mongoose.model<ReservaDoc, ReservaModel>(
  "Reserva",
  reservaEsquema,
);

export { Reserva };
