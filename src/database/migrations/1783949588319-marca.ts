import { MigrationInterface, QueryRunner } from "typeorm";

export class Marca1783949588319 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF  NOT EXISTS estacoes(
           id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
           nome VARSHAR(150) NOT NULL UNIQUE
            `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
