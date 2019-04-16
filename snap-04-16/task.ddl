drop table if exists task;

create table task (
taskId          BINARY(20)   not null,
taskTitle       VARCHAR(255) not null,
taskStartDate   DATETIME,
taskDueDate     DATETIME,
taskStatus      VARCHAR(64)  not null,
taskPriority    VARCHAR(64)  not null,
taskDescription VARCHAR(256),
primary key (taskId)
);

/*Question 2
SELECT tweetContent FROM tableTweet;
SELECT FROM table`like` WHERE likeProfileId = UNHEX("0536faef082b454e9d444cdbe7887d7a")
 */

