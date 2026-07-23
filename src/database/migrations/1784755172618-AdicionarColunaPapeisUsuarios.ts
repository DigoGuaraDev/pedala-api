import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class AdicionarColunaPapeisUsuarios1784755172618 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("usuarios",
            new TableColumn({
               name: "perfil",
                type: "varchar",//"enum",
                length:"20",
                default: "'CLIENTE'",
                isNullable: false,
              //enum: ["ADMIN","CLIENTE","TECNICO"],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("usuario","perfil",true);
    }

}
