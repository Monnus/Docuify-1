 # System Dependencies
    Install
    1. Install Visual Studio 2017
   # -Include the following in the "Individual components" section
         VC++ 2017 version 15.9 v15.16 latest v141 tools
         Windows 8.1 SDK and UCRT SDK
        Visual Studio C++ core features
  #  2. Install Python version 2.7.13
    -Configure the current Python version by either:
    A. Open the Environment Variables from the System Properties and set the current python version in the Path variable to use Python 2.7
    B. Enter the command "npm config set python python2.7
  $ 3. Install NVM
  $ 4. Set the Node.JS version using NVM to version 8.11.4
  $ 5. Run "npm install"
# if you see a wave loading, this is how to resolve it:
npm install -g ganache-cli truffle@v4.1.
start ganache-cli
truffle test
npm install
del ".\src\assets\abis"
mkdir ".\src\assets\abis"
truffle compile
truffle migrate (edited) 