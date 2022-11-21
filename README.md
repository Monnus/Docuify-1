===================System dependencies Requirements:============
Install with Visual Studio 2017 community
# install VC++ 2017 Version v141 tools  & Windows 8.1 SDK  with the visuall studio 2017 community
# Python 2.7.13 with 2017 community
# NVM   Node.JS version 8.11.4
# install Truffle v4.1.14  globle
you need  to install the above, on your machines. In order to run and work with the backend. 



=========================open project and run the following commands==========================
# install ganache and truffle, Note::skip this command if ganache and truffle are already installed
  $ npm install -g ganache-cli truffle@v4.1.14
  # open a new terminal, run below command and keep it alive/active or running
  $ ganache-cli
  # run solidity unit tests to check if environment is ready
  $ truffle test
  # install node modules
  $ npm install
  # before starting the project  delete the ".\src\assets\abis" folder, do this for every time you start up the project
  $ truffle compile
  # after truffle compile
  $ truffle migrate
  # once compile is complete run react app
  $ npm  start