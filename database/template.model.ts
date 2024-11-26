import { model, models, Schema } from "mongoose";

interface IModel {}

const ModelSchema = new Schema<IModel>(
  {},
  {
    timestamps: true,
  }
);

const Model = models?.Model || model<IModel>("Model", ModelSchema);

export default Model;
