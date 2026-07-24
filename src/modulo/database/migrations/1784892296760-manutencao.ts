import { MigrationInterface, QueryRunner } from "typeorm";

export class Manutencao1784892296760 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS manutencoes(
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                bicicleta_id UUID NOT NULL,
                tecnico_id UUID  ,
                responsavel_id UUID NOT NUll,
                status VARCHAR(20) NOT NULL DEFAULT 'AGUARDANDO',
                descricao 
                dt_aberta DATE NOT NULL DEFAULT 'now()',
                dt_atualizacao TIMESTAMP,
                dt_finalizada TIMESTAMP,
                CONSTRAINT fk_manutencao_bicicleta FOREIGN KEY (bicicletas_id) REFERENCES
                    bicicleta(id) ON UPDATE NO ACTION ON DELETE CASCADE,
                CONSTRAINT fk_manutencao_tecnico FOREIGN KEY (tecnico_id) REFERENCES
                    usuarios(id) ON UPDATE NO ACTION ON DELETE CASCADE
                    CONSTRAINT fk_manutencao_responsavel FOREIGN KEY (responsavel_id) REFERENCES
                    usuarios(id) ON UPDATE NO ACTION ON DELETE CASCADE
            );                
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
