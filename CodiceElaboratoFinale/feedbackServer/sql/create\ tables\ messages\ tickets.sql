use feedback;

drop table if exists messages;
drop table if exists tickets;

create table tickets
SELECT ticket id, name, email, country,subject,createdAt,updatedAt from feedbacks where id=ticket;

alter table tickets change id id int(11) not null auto_increment primary key;

create table messages
SELECT id, ticket, subject text,createdAt,updatedAt from feedbacks;

alter table messages
	change id id int(11) not null auto_increment primary key,
	change ticket ticket int(11) not null,
    add foreign key (ticket) references tickets(id),
	add key (ticket),
    add foreign key (ticket) references tickets(id);

