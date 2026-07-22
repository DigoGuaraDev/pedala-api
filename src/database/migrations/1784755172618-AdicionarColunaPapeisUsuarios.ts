import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class AdicionarColunaPapeisUsuarios1784755172618 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("usuarios",
            new TableColumn({
               name: "papeis",
                type: "enum",
                enum: ["ADMIN","CLIENTE","TECNICO"],
                default: "'CLIENTE",
                isNullable: false,

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("usuario","papeis");
    }

}
