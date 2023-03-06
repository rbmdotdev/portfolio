import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1678063267737 implements MigrationInterface {
    name = 'migration1678063267737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "job_type" ("name" character varying NOT NULL, "entityId" SERIAL NOT NULL, "entityCreatedat" TIMESTAMP NOT NULL DEFAULT now(), "entityUpdatedat" TIMESTAMP NOT NULL DEFAULT now(), "entityDeletedat" TIMESTAMP, CONSTRAINT "PK_471808fc9e81d12fd63537b9f09" PRIMARY KEY ("entityId"))`);
        await queryRunner.query(`CREATE TABLE "role" ("title" character varying NOT NULL, "entityId" SERIAL NOT NULL, "entityCreatedat" TIMESTAMP NOT NULL DEFAULT now(), "entityUpdatedat" TIMESTAMP NOT NULL DEFAULT now(), "entityDeletedat" TIMESTAMP, CONSTRAINT "PK_16389d79a8659a9ef6da1ea2ffd" PRIMARY KEY ("entityId"))`);
        await queryRunner.query(`CREATE TABLE "job" ("isPublished" boolean NOT NULL, "title" character varying NOT NULL, "body" character varying NOT NULL, "location" character varying NOT NULL, "remote" boolean NOT NULL, "authorId" integer NOT NULL, "roleId" integer NOT NULL, "typeId" integer NOT NULL, "entityId" SERIAL NOT NULL, "entityCreatedat" TIMESTAMP NOT NULL DEFAULT now(), "entityUpdatedat" TIMESTAMP NOT NULL DEFAULT now(), "entityDeletedat" TIMESTAMP, CONSTRAINT "PK_09b1adf978a586fcd0bb0ef7618" PRIMARY KEY ("entityId"))`);
        await queryRunner.query(`CREATE TABLE "user" ("username" character varying NOT NULL, "password" character varying NOT NULL, "isAdmin" boolean NOT NULL, "entityId" SERIAL NOT NULL, "entityCreatedat" TIMESTAMP NOT NULL DEFAULT now(), "entityUpdatedat" TIMESTAMP NOT NULL DEFAULT now(), "entityDeletedat" TIMESTAMP, CONSTRAINT "PK_f3e653bbbd4b91cc7912569ead9" PRIMARY KEY ("entityId"))`);
        await queryRunner.query(`CREATE TABLE "org" ("name" character varying NOT NULL, "entityId" SERIAL NOT NULL, "entityCreatedat" TIMESTAMP NOT NULL DEFAULT now(), "entityUpdatedat" TIMESTAMP NOT NULL DEFAULT now(), "entityDeletedat" TIMESTAMP, CONSTRAINT "PK_c660f09b9366ae26836d687eaff" PRIMARY KEY ("entityId"))`);
        await queryRunner.query(`CREATE TABLE "org_profile" ("website" character varying NOT NULL, "entityId" SERIAL NOT NULL, "entityCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "entityUpdated_at" TIMESTAMP NOT NULL DEFAULT now(), "entityDeleted_at" TIMESTAMP, CONSTRAINT "PK_5a8d14bc056096e5440ca835c6e" PRIMARY KEY ("entityId"))`);
        await queryRunner.query(`CREATE TABLE "user_profile" ("description" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "location" character varying NOT NULL, "resumeLink" character varying NOT NULL, "avatarSrc" character varying NOT NULL, "entityId" SERIAL NOT NULL, "entityCreatedat" TIMESTAMP NOT NULL DEFAULT now(), "entityUpdatedat" TIMESTAMP NOT NULL DEFAULT now(), "entityDeletedat" TIMESTAMP, CONSTRAINT "PK_6c4e01b3b2a334cb430a8887f6a" PRIMARY KEY ("entityId"))`);
        await queryRunner.query(`ALTER TABLE "job" ADD CONSTRAINT "FK_f3e6789f2c84e5fdd2305096cf4" FOREIGN KEY ("authorId") REFERENCES "user"("entityId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job" ADD CONSTRAINT "FK_4ba0d6ac1cc2f9a8b02533b9afa" FOREIGN KEY ("roleId") REFERENCES "role"("entityId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job" ADD CONSTRAINT "FK_16a471e434b3266a7730715d7d6" FOREIGN KEY ("typeId") REFERENCES "job_type"("entityId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job" DROP CONSTRAINT "FK_16a471e434b3266a7730715d7d6"`);
        await queryRunner.query(`ALTER TABLE "job" DROP CONSTRAINT "FK_4ba0d6ac1cc2f9a8b02533b9afa"`);
        await queryRunner.query(`ALTER TABLE "job" DROP CONSTRAINT "FK_f3e6789f2c84e5fdd2305096cf4"`);
        await queryRunner.query(`DROP TABLE "user_profile"`);
        await queryRunner.query(`DROP TABLE "org_profile"`);
        await queryRunner.query(`DROP TABLE "org"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "job"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "job_type"`);
    }

}
