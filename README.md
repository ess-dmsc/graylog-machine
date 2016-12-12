# DMSC Graylog machine
The vagrant file contained in this repository is to be used as a test service for collecting log messages produced by applications developed and used at the ESS DMSC. When the machine is up and running, port ???? on localhost will accept [GELF](http://docs.graylog.org/en/2.1/pages/gelf.html)-type log messages. The following libraries can be added to your application to add Graylog capability:

 * [PyToGraylog]()
 * [CppLogging]()

Documentation on the usage of those libraries can be found at their respective repositories.

## Requirements
[Vagrant](https://www.vagrantup.com) must be installed. Vagrant in turn requires that [Virtual Box](https://www.virtualbox.org) or some other emulation software is available. Note that this Vagrant file has only been tested with Vagrant version 1.8.5. It is possible, though not likely that it will not work with older or newer versions of Vagrant.

## Usage
Change directory to the containing the file `Vagrantfile`. Start and provision the virtual machine by typing:

    vagrant up

The installation process will take a few minutes. When it is finished, it will be possible to access Graylog on the following address: [http://localhost:8080/](http://localhost:8080/). The user name required to access the Graylog website is `admin` and the password is `admin`.
