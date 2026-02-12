CREATE TABLE `users_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`primaryemail` text NOT NULL,
	`secondaryemail` text NOT NULL,
	`username` text NOT NULL,
	`password` text NOT NULL,
	`phonenumber` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_primaryemail_unique` ON `users_table` (`primaryemail`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_secondaryemail_unique` ON `users_table` (`secondaryemail`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_username_unique` ON `users_table` (`username`);