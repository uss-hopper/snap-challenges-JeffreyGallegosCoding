<?php

/**
 * Method returns an array of all tweets on a specific date
 * @param
 * @return an array of tweets found on the given date
 * @throws \PDOException when mySQL related errors occur
 * @\TypeError when variables do not work in the data type
 */

public function getTweetsByTweetDate (\PDO $pdo, string $tweetDate) : \SplFixedArray {
	//Create a query template
	$query = "Select tweetDate from tweet where tweetContent like :tweetContent";
	$statment = $pdo->prepare($query);

	//build an array of tweets
	$tweetsOnDate = new \SplFixedArray($statment->rowcount());
	$statment->setFetchMode(\PDO::FETCH_ASSOC);
	while(($row = $statment->fetch()) !==false){
		try {
			$tweet = new Tweet($row["tweetId"], $row["tweetDate"]);
			$tweetsOnDate[$tweetsOnDate->key()] = $tweet;
			$tweetsOnDate->next();
		} catch(\Exception($exception->getMessage(), 0, $exception));
	}
	return($tweetsOnDate);
}