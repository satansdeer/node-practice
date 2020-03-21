//console.log(process.env)

console.log('No value for SOME_DOTENV_VAR yet:', process.env.SOME_DOTENV_VAR);

if (process.env.LOAD_DOTENV) {
  require('dotenv').config();
}

console.log('Now the value for SOME_DOTENV_VAR is:', process.env.SOME_DOTENV_VAR);

