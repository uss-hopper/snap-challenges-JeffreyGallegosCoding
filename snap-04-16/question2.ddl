/*Question 2 Answer - References Dylan's example DDL for the data design project*/
select tweetContent from tableTweet where tweetId = hex("0536faef082b454e9d444cdbe7887d7a");
/*used a select statement to pull tweetContent from the tweet table with a specific UUID.*/

select
tweet.tweetContent,
`like`.likeDate,
profile.profileAtHandle
from tweet
inner join `like` on `like`.liketweetId = tweet.tweetId
inner join profile on profile.profileId = `like`.likeProfileId
where tweet.tweetId = hex("0536faef082b454e9d444cdbe7887d7a");
/*Used a select tweet statement to pull tweetContent and interjoin the data with the `like` table in order to
find all of the likes to that specific tweet with the specific UUID. Also inter joined the profile table to get the
profileAtHandels of all of the users that liked the tweet. Remember to use WHERE statements in order to identify where
specifically from the table you would like to edit.*/


Question 2 First Attempt
SELECT tweetContent FROM tableTweet;
SELECT FROM table`like` WHERE likeProfileId = UNHEX("0536faef082b454e9d444cdbe7887d7a")
