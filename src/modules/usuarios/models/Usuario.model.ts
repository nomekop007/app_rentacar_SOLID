import { Model } from "sequelize";
export default class Usuario extends Model {
    public id_usuario: number;
    public estado_usuario: boolean;
    public nombre_usuario: string;
    public email_usuario: string;
    public clave_usuario: string;
    public userAt: string;
}
