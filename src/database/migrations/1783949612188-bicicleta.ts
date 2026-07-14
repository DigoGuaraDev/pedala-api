import { MigrationInterface, QueryRunner } from "typeorm";

export class Bicicleta1783949612188 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.query(`
            CREATE TABLE IF  NOT EXISTS bicicletas(
           id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
           modelo_id UUID NOT NULL,
           status BOOLEAN NOT NULL DEFAULT false,
           dt_cadastro DATE NOT NULL DEFAULT  'now()',
           dt_atualizar TIMESTAMP,
           CONSTRAINT fk_modelos_bicicletas FOREIGN KEY (modelo_id)
             REFERENCES modelos(id) ON UPDATE NO ACTION ON DELETE CASCADE
            );

         `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("bicicletas")
    }
}
