-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "kakao_id" VARCHAR(100),
    "facebook_id" VARCHAR(100),
    "nickname" VARCHAR(20) NOT NULL,
    "profile_url" VARCHAR(100),
    "email" VARCHAR(100),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_access_token" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "access_token" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_access_token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_access_token_access_token_key" ON "user_access_token"("access_token");

-- AddForeignKey
ALTER TABLE "user_access_token" ADD CONSTRAINT "user_access_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
