CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"name" varchar(255) DEFAULT '' NOT NULL,
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
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "goals" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"title" varchar(255) DEFAULT '' NOT NULL,
	"targetAmount" integer DEFAULT 0 NOT NULL,
	"currentAmount" integer DEFAULT 0 NOT NULL,
	"isCompleted" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "incomes" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"amount" integer NOT NULL,
	"title" varchar(255) DEFAULT '' NOT NULL,
	"note" varchar(255) DEFAULT '' NOT NULL,
	"categoryId" integer,
	"goalId" integer,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"image" varchar(255) NOT NULL,
	"role" varchar(255) DEFAULT 'user' NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"balance" integer DEFAULT 0 NOT NULL,
	"currency" varchar(255) DEFAULT 'POUND' NOT NULL,
	"newUser" boolean DEFAULT true NOT NULL,
	"incomesCount" integer DEFAULT 0 NOT NULL,
	"expensesCount" integer DEFAULT 0 NOT NULL,
	"savingsCount" integer DEFAULT 0 NOT NULL,
	"goalsCount" integer DEFAULT 0 NOT NULL,
	"emailVerified" boolean DEFAULT false NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
