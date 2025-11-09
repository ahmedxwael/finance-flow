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
CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "expenses" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"amount" integer NOT NULL,
	"title" varchar(255) DEFAULT '' NOT NULL,
	"note" varchar(255) DEFAULT '' NOT NULL,
	"categoryId" integer,
	"goalId" integer,
	"transactionDate" timestamp DEFAULT now() NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "goals" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"targetAmount" integer NOT NULL,
	"currentAmount" integer DEFAULT 0 NOT NULL,
	"percentage" integer DEFAULT 0 NOT NULL,
	"isCompleted" boolean DEFAULT false NOT NULL,
	"startDate" timestamp DEFAULT now() NOT NULL,
	"dueDate" timestamp NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "incomes" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"amount" integer NOT NULL,
	"title" varchar(255) NOT NULL,
	"note" varchar(255) NOT NULL,
	"categoryId" integer,
	"goalId" integer,
	"transactionDate" timestamp DEFAULT now() NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar(50) DEFAULT 'USER',
	"image" varchar(500),
	"provider" varchar(50) DEFAULT 'local',
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	"balance" integer DEFAULT 0,
	"totalIncomes" integer DEFAULT 0,
	"totalExpenses" integer DEFAULT 0,
	"totalSavings" integer DEFAULT 0,
	"currency" varchar(255) DEFAULT 'POUND',
	"newUser" boolean DEFAULT true,
	"emailVerified" boolean DEFAULT false,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "allocations" ADD CONSTRAINT "allocations_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "allocations" ADD CONSTRAINT "allocations_categoryId_categories_id_fk" FOREIGN KEY ("categoryId") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories" ADD CONSTRAINT "categories_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_categoryId_categories_id_fk" FOREIGN KEY ("categoryId") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_goalId_goals_id_fk" FOREIGN KEY ("goalId") REFERENCES "public"."goals"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "goals" ADD CONSTRAINT "goals_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incomes" ADD CONSTRAINT "incomes_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incomes" ADD CONSTRAINT "incomes_categoryId_categories_id_fk" FOREIGN KEY ("categoryId") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incomes" ADD CONSTRAINT "incomes_goalId_goals_id_fk" FOREIGN KEY ("goalId") REFERENCES "public"."goals"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "allocations_userId_idx" ON "allocations" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "allocations_categoryId_idx" ON "allocations" USING btree ("categoryId");--> statement-breakpoint
CREATE INDEX "allocations_period_idx" ON "allocations" USING btree ("period");--> statement-breakpoint
CREATE INDEX "categories_userId_idx" ON "categories" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "categories_type_idx" ON "categories" USING btree ("type");--> statement-breakpoint
CREATE INDEX "expenses_userId_idx" ON "expenses" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "expenses_categoryId_idx" ON "expenses" USING btree ("categoryId");--> statement-breakpoint
CREATE INDEX "expenses_goalId_idx" ON "expenses" USING btree ("goalId");--> statement-breakpoint
CREATE INDEX "expenses_transactionDate_idx" ON "expenses" USING btree ("transactionDate");--> statement-breakpoint
CREATE INDEX "goals_userId_idx" ON "goals" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "goals_isCompleted_idx" ON "goals" USING btree ("isCompleted");--> statement-breakpoint
CREATE INDEX "goals_dueDate_idx" ON "goals" USING btree ("dueDate");--> statement-breakpoint
CREATE INDEX "incomes_userId_idx" ON "incomes" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "incomes_categoryId_idx" ON "incomes" USING btree ("categoryId");--> statement-breakpoint
CREATE INDEX "incomes_goalId_idx" ON "incomes" USING btree ("goalId");--> statement-breakpoint
CREATE INDEX "incomes_transactionDate_idx" ON "incomes" USING btree ("transactionDate");--> statement-breakpoint
CREATE INDEX "users_email_idx" ON "users" USING btree ("email");