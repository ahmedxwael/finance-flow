CREATE TABLE "accounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"type" varchar(50) DEFAULT 'BANK' NOT NULL,
	"balance" integer DEFAULT 0 NOT NULL,
	"currency" varchar(10) DEFAULT 'POUND' NOT NULL,
	"description" varchar(500),
	"color" varchar(7),
	"icon" varchar(50),
	"isActive" boolean DEFAULT true NOT NULL,
	"isPrimary" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "allocations" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"categoryId" integer,
	"name" varchar(255) NOT NULL,
	"description" varchar(500),
	"amount" integer NOT NULL,
	"period" varchar(50) DEFAULT 'MONTHLY' NOT NULL,
	"startDate" timestamp DEFAULT now() NOT NULL,
	"endDate" timestamp,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "categories" ALTER COLUMN "name" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "goals" ALTER COLUMN "title" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "goals" ALTER COLUMN "targetAmount" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "incomes" ALTER COLUMN "title" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "incomes" ALTER COLUMN "note" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" DROP IDENTITY;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "image" SET DATA TYPE varchar(500);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'USER';--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "type" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "expenses" ADD COLUMN "accountId" integer;--> statement-breakpoint
ALTER TABLE "expenses" ADD COLUMN "transactionDate" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "goals" ADD COLUMN "description" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "goals" ADD COLUMN "percentage" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "goals" ADD COLUMN "startDate" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "goals" ADD COLUMN "dueDate" timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE "incomes" ADD COLUMN "accountId" integer;--> statement-breakpoint
ALTER TABLE "incomes" ADD COLUMN "transactionDate" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" varchar(255);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "provider" varchar(50) DEFAULT 'local';--> statement-breakpoint
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "allocations" ADD CONSTRAINT "allocations_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "allocations" ADD CONSTRAINT "allocations_categoryId_categories_id_fk" FOREIGN KEY ("categoryId") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "accounts_userId_idx" ON "accounts" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "accounts_type_idx" ON "accounts" USING btree ("type");--> statement-breakpoint
CREATE INDEX "accounts_isActive_idx" ON "accounts" USING btree ("isActive");--> statement-breakpoint
CREATE INDEX "accounts_isPrimary_idx" ON "accounts" USING btree ("isPrimary");--> statement-breakpoint
CREATE INDEX "allocations_userId_idx" ON "allocations" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "allocations_categoryId_idx" ON "allocations" USING btree ("categoryId");--> statement-breakpoint
CREATE INDEX "allocations_period_idx" ON "allocations" USING btree ("period");--> statement-breakpoint
ALTER TABLE "categories" ADD CONSTRAINT "categories_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_accountId_accounts_id_fk" FOREIGN KEY ("accountId") REFERENCES "public"."accounts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_categoryId_categories_id_fk" FOREIGN KEY ("categoryId") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_goalId_goals_id_fk" FOREIGN KEY ("goalId") REFERENCES "public"."goals"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "goals" ADD CONSTRAINT "goals_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incomes" ADD CONSTRAINT "incomes_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incomes" ADD CONSTRAINT "incomes_accountId_accounts_id_fk" FOREIGN KEY ("accountId") REFERENCES "public"."accounts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incomes" ADD CONSTRAINT "incomes_categoryId_categories_id_fk" FOREIGN KEY ("categoryId") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incomes" ADD CONSTRAINT "incomes_goalId_goals_id_fk" FOREIGN KEY ("goalId") REFERENCES "public"."goals"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "categories_userId_idx" ON "categories" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "categories_type_idx" ON "categories" USING btree ("type");--> statement-breakpoint
CREATE INDEX "expenses_userId_idx" ON "expenses" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "expenses_accountId_idx" ON "expenses" USING btree ("accountId");--> statement-breakpoint
CREATE INDEX "expenses_categoryId_idx" ON "expenses" USING btree ("categoryId");--> statement-breakpoint
CREATE INDEX "expenses_goalId_idx" ON "expenses" USING btree ("goalId");--> statement-breakpoint
CREATE INDEX "expenses_transactionDate_idx" ON "expenses" USING btree ("transactionDate");--> statement-breakpoint
CREATE INDEX "goals_userId_idx" ON "goals" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "goals_isCompleted_idx" ON "goals" USING btree ("isCompleted");--> statement-breakpoint
CREATE INDEX "goals_dueDate_idx" ON "goals" USING btree ("dueDate");--> statement-breakpoint
CREATE INDEX "incomes_userId_idx" ON "incomes" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "incomes_accountId_idx" ON "incomes" USING btree ("accountId");--> statement-breakpoint
CREATE INDEX "incomes_categoryId_idx" ON "incomes" USING btree ("categoryId");--> statement-breakpoint
CREATE INDEX "incomes_goalId_idx" ON "incomes" USING btree ("goalId");--> statement-breakpoint
CREATE INDEX "incomes_transactionDate_idx" ON "incomes" USING btree ("transactionDate");--> statement-breakpoint
CREATE INDEX "users_email_idx" ON "users" USING btree ("email");--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "incomesCount";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "expensesCount";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "savingsCount";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "goalsCount";