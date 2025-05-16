-- CreateTable
CREATE TABLE "a01_members" (
    "member_id" SERIAL NOT NULL,
    "member_email_for_koa" VARCHAR(100) DEFAULT '-',
    "member_mobile_no_for_koa" VARCHAR(20) DEFAULT '-',
    "member_pwd" VARCHAR(256),
    "member_name1" VARCHAR(256) DEFAULT '-',
    "member_name2" VARCHAR(45) DEFAULT '-',
    "member_koa_no" VARCHAR(8) DEFAULT 'A-1',
    "member_address_personal" VARCHAR(256) DEFAULT '-',
    "member_address_office" VARCHAR(256) DEFAULT '-',
    "member_img1" VARCHAR(1) DEFAULT 'n',
    "member_img2" VARCHAR(1) DEFAULT 'n',
    "member_img3" VARCHAR(1) DEFAULT 'n',
    "member_url_code" VARCHAR(45) DEFAULT '-',
    "member_para1" TEXT,
    "member_para2" TEXT,
    "member_para3" TEXT,
    "member_nick_name" VARCHAR(100) DEFAULT '-',
    "member_mobile_no_office1" VARCHAR(20) DEFAULT '-',
    "member_mobile_no_office2" VARCHAR(200) DEFAULT '-',
    "member_ug_passout" VARCHAR(40) DEFAULT '-',
    "member_pg_college" VARCHAR(200) DEFAULT '-',
    "member_pg_passout" VARCHAR(40) DEFAULT '-',
    "member_proposer_name" VARCHAR(256) DEFAULT '-',
    "member_propose_koa_num" VARCHAR(40) DEFAULT '-',
    "member_seconded_name" VARCHAR(256) DEFAULT '-',
    "member_seconded_koa_num" VARCHAR(40) DEFAULT '-',
    "member_qualifications" VARCHAR(45),
    "member_website" VARCHAR(45) DEFAULT '-',
    "member_location_office" VARCHAR(45) DEFAULT '-',
    "member_whatsapp_office" VARCHAR(45) DEFAULT '-',
    "member_facebook_office" VARCHAR(45) DEFAULT '-',
    "member_socialmedia1_title" VARCHAR(45) DEFAULT 'Instagram',
    "member_social_media1_handle" VARCHAR(100) DEFAULT '-',
    "member_socialmedia2_title" VARCHAR(45) DEFAULT 'X',
    "member_socialmedia2_handle" VARCHAR(100) DEFAULT '-',
    "member_dob" DATE,
    "member_doj" DATE,
    "member_status" VARCHAR(20) DEFAULT 'applied',
    "member_role_id" INTEGER,
    "member_createdAt" DATE DEFAULT CURRENT_TIMESTAMP,
    "member_updateAt" DATE,

    CONSTRAINT "a01_members_pkey" PRIMARY KEY ("member_id")
);

-- CreateTable
CREATE TABLE "a02_member_role" (
    "member_role_id" SERIAL NOT NULL,
    "member_role_name" VARCHAR(191) NOT NULL,
    "memebr_role_description" TEXT,

    CONSTRAINT "a02_member_role_pkey" PRIMARY KEY ("member_role_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "a02_member_role_member_role_name_key" ON "a02_member_role"("member_role_name");

-- AddForeignKey
ALTER TABLE "a01_members" ADD CONSTRAINT "a01_members_member_role_id_fkey" FOREIGN KEY ("member_role_id") REFERENCES "a02_member_role"("member_role_id") ON DELETE SET NULL ON UPDATE CASCADE;
