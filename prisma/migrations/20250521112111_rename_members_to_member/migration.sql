/*
  Warnings:

  - You are about to drop the `members` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_MemberId_fkey";

-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_role_id_fkey";

-- DropTable
DROP TABLE "members";

-- CreateTable
CREATE TABLE "member" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(100),
    "mobile" VARCHAR(20) DEFAULT '-',
    "password" VARCHAR(256),
    "emailVerified" TIMESTAMP(3),
    "name" VARCHAR(256) DEFAULT '-',
    "firstName" VARCHAR(256) DEFAULT '-',
    "lastName" VARCHAR(45) DEFAULT '-',
    "koa_no" VARCHAR(8) DEFAULT 'A-1',
    "address_personal" VARCHAR(256) DEFAULT '-',
    "address_office" VARCHAR(256) DEFAULT '-',
    "img1" VARCHAR(1) DEFAULT 'n',
    "img2" VARCHAR(1) DEFAULT 'n',
    "img3" VARCHAR(1) DEFAULT 'n',
    "url_code" VARCHAR(45) DEFAULT '-',
    "para1" TEXT,
    "para2" TEXT,
    "para3" TEXT,
    "nick_name" VARCHAR(100) DEFAULT '-',
    "mobile_no_office1" VARCHAR(20) DEFAULT '-',
    "mobile_no_office2" VARCHAR(200) DEFAULT '-',
    "ug_college" VARCHAR(200) DEFAULT '-',
    "ug_passout" VARCHAR(40) DEFAULT '-',
    "pg_college" VARCHAR(200) DEFAULT '-',
    "pg_passout" VARCHAR(40) DEFAULT '-',
    "proposer_name" VARCHAR(256) DEFAULT '-',
    "propose_koa_num" VARCHAR(40) DEFAULT '-',
    "seconded_name" VARCHAR(256) DEFAULT '-',
    "seconded_koa_num" VARCHAR(40) DEFAULT '-',
    "qualifications" VARCHAR(45),
    "website" VARCHAR(45) DEFAULT '-',
    "location_office" VARCHAR(45) DEFAULT '-',
    "whatsapp_office" VARCHAR(45) DEFAULT '-',
    "facebook_office" VARCHAR(45) DEFAULT '-',
    "socialmedia1_title" VARCHAR(45) DEFAULT 'Instagram',
    "social_media1_handle" VARCHAR(100) DEFAULT '-',
    "socialmedia2_title" VARCHAR(45) DEFAULT 'X',
    "socialmedia2_handle" VARCHAR(100) DEFAULT '-',
    "dob" DATE,
    "doj" DATE,
    "status" VARCHAR(20) DEFAULT 'applied',
    "type" VARCHAR(20) DEFAULT 'lifeMember',
    "role_id" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "transationId" TEXT,

    CONSTRAINT "member_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "member_email_key" ON "member"("email");

-- AddForeignKey
ALTER TABLE "member" ADD CONSTRAINT "member_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "member_role"("role_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_MemberId_fkey" FOREIGN KEY ("MemberId") REFERENCES "member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
