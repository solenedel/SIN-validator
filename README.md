# SIN validator challenge

## 🏃‍♀️ Running the project

1. Clone the project: `git clone https://github.com/solenedel/SIN-validator.git`
2. Run `npm install` or `yarn` to install dependencies.
3. Run the development server: `npm run dev` or `yarn dev`
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the project.

## ⚙️ How it works & design choices:

If the user types any character other than a number in the input, the SIN number will be automatically invalidated using regex. Once 9 characters have been entered and all are digits, further checks are made by the `validateSIN` function in the `helpers` folder.

The checks are as follows:

1. Generates an array of 9 numbers based on the SIN string, where every second item is multiplied by 2 by checking for the odd indices of the array.
2. A sum value `sumOfSINArray` is declared, and we map through the array to sum each value - while splitting values over 9 into separate digits before summing.
3. Finally, the sum of values is divided by 10. If the result is an integer, it is perfectly divisible by 10 and the number is a valid SIN. If not, it is an invalid SIN.

### 📝 Note on the type of HTML input used:

Even though there is an official HTML `number` input field, it was not used in this project for user experience reasons. If an input has `type="number"`, this automatically adds increase/decrease arrows inside the input which are not useful for the nature of a SIN number. Even if these arrows can be potentially hidden, there is a scrolling effect which remains inside the search bar whereby scrolling up or down triggers increasing/decreasing of the number. This is undesirable and considered bad user experience in many cases such as entering a SIN number.

Rather than using a hacky workaround to disable these effects, I opted for an html `type="text"` input field. Although the user can techincally type characters other than numbers inside the input, only digits will ever be accepted for a valid SIN number.

## 🤔 Assumptions:

- The user is using a modern browser such as Chrome, Firefox of Safari.
- The user will not try to enter hyphens within the SIN number.
- Since this is only a validator, it is assumed that the user is not submitting anything to an official form. Thus, validation is triggered as soon as 9 characters are reached, or before that if they enter a wrong character. The user can validate as many SIN numbers as they want.

## 🧪 Manual testing

- ✅ The number `046454286` is a valid SIN.
- ❌ The number `046454296` is not a valid SIN.
