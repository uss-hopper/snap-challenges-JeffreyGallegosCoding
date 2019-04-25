<?php

class Player {
	Use validateUuid;

	/**Id for this specific player
	 * @var string $playerId
	 */
	private $playerId;

	/**The player's username
	 * @var string $playerUserName
	 */
	private $playerUsername;

	/**
	 * Accessor Method for player id
	 * @return Uuid value of player id or if it is a new player null
	 */

	public function __construct($playerId, $playerUsername) {
		$this->setPlayerId($playerId);
		$this->setPlayerUsername($playerUsername);
	}

	public function getPlayerId(): string {
		return ($this->playerId);
	}

	/**mutator method for player id
	 * @param Uuid| string $newPlayerId value of new player id
	 * @throws \RangeException if $newPlayerId is not positive or too long
	 * @throws \TypeError if the player id is not valid
	 */
	public function setPlayerId($newPlayerId): void {
		try {
			$uuid = self::validateUuid($newPlayerId);
		} catch(\InvalidArgumentException | \RangeException | \Exception |\TypeError $exception) {
			$exceptionType = get_class($exception);
			throw (new $exceptionType($exception->getMessage(), 0, $exception));
		}
		// convert and store the player id
		$this->playerId = $uuid;
	}
	/**accessor for the player's name
	 * @return string value of the name
	 */

	public function getPlayerUsername(): string {
		return ($this->playerUsername);
	}
	/**mutator method for player username
	 * @param string $newPlayerUsername value of new player name
	 * @throws \RangeException if $newPlayerName is not positive or too long
	 * @throws \TypeError if the player name is not valid
	 */

	public function setPlayerUsername($newPlayerUsername):void {
		//verify the username is secure
		$newPlayerUsername = trim($newPlayerUsername);
		$newPlayerUsername = filter_var($newPlayerUsername, FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
		if(empty($newPlayerUsername) === true) {
			throw (new \InvalidArgumentException("player username is not valid" ));
		}
		if(strlen($newPlayerUsername) > 128) {
			throw (new\RangeException("player username is too long"));
		}
		//Convert and store player Username
		$this->playerUsername = $newPlayerUsername;
	}
}

/** Answers and feed back to challenge
 *Make sure to add the constructor method
 * Simplify your statement a little
 * function that does something-
 *
 * public function concat() : string {
	return $this->playerId . $this->playerUsername
 * }
 * Extra credit question
 * uses little player in order to reference the Player class but still be a different variable
 *
 * $player = new player ("string, 12345);
 * echo $player->concat()
 */

