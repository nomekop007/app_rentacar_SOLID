import { AllowNull, AutoIncrement, Column, Model, NotEmpty, PrimaryKey, Table } from "sequelize-typescript";

export interface UsuarioInterface {
    id_usuario: number;
    estado_usuario: boolean;
    nombre_usuario: string;
    email_usuario: string;
    clave_usuario: string;
    userAt: string;
}

@Table({
    tableName: "usuarios", timestamps: true
})
export default class Usuario extends Model implements UsuarioInterface {

    @AutoIncrement
    @PrimaryKey
    @Column
    public id_usuario?: number;

    @AllowNull(false)
    @NotEmpty
    @Column
    public estado_usuario!: boolean;

    @AllowNull(false)
    @NotEmpty
    @Column
    public nombre_usuario!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    public email_usuario!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    public clave_usuario!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    public userAt!: string;

}
