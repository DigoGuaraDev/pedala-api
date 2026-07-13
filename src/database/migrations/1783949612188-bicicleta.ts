import { MigrationInterface, QueryRunner } from "typeorm";

export class Bicicleta1783949612188 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.query(`
            CREATE TABLE IF  NOT EXISTS estacoes(
           id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
           modelo_id UUID NOT NULL,
           status BOOLEAN NOT NULL DEFAULT false,
           dataCadastro TIMESTAMP DEFAULT  'now()',
           dataAtualizacao TIMESTAMP DEFAULT 'now()',
           CONSTRAINT fk_modelo_bicicleta FOREIGN KEY (modelo_id)
             REFERENCES modelo(id) ON UPDATE NO ACTION ON DELETE CASCADE

         `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
