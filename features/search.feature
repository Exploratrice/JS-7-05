Feature: Tests for tickets
    Scenario: Should book available ticket
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user chooses date
        When user chooses time of a movie
        When user chooses a sit
        When user clicks on the booking button
        When user clicks on the button to get booking code 
        Then user gets the code and the header "Электронный билет"

    Scenario: Should book some available tickets
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user chooses date
        When user chooses time of a movie
        When user chooses the first sit
        When user chooses the second sit
        When user clicks on the booking button
        When user clicks on the button to get booking code 
        Then user gets the code and the header "Электронный билет"

    Scenario: Should book unavailable ticket unsuccessfully
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user chooses date that has been choosen earlier
        When user chooses time of a movie that has been choosen earlier
        When user chooses a sit that has been choosen earlier
        When user clicks on the booking button
        Then button for booking is inactive      