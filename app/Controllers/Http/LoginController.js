'use strict';

class LoginController {
  render({ request, view }) {
    const guessedNumber = Number(request.input('number'));
    console.log(guessedNumber);
    const randomNumber = Math.floor(Math.random() * 20) + 1;

    /** rendering view */
    return view.render('login', { guessedNumber, randomNumber });
  }
}

module.exports = LoginController;
