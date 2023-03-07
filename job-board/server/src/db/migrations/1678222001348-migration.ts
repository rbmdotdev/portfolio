import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1678222001348 implements MigrationInterface {
    name = 'migration1678222001348'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "orgId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_4f5adb58513c2fe57eb9c79cc16" FOREIGN KEY ("orgId") REFERENCES "org"("entityId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_4f5adb58513c2fe57eb9c79cc16"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "orgId"`);
    }

}
