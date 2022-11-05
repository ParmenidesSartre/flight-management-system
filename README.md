# FLIGHT MANAGEMENT SYSTEM

## PROJECT SCOPE
The purpose of the online flight management system is to ease flight management and to create a convenient and easy-to-use application for passengers, trying to buy airline tickets. The system is based on a relational database with its flight management and reservation functions. We will have a database server supporting hundreds of major cities around the world as well as thousands of flights by various airline companies. Above all, we hope to provide a comfortable user experience along with the best pricing available.

## PRODUCT PERSPECTIVE

A distributed airline database system stores the following information.

Flight details:
It includes the originating flight terminal and destination terminal, along with the stops in between, the number of seats booked/available seats between two destinations etc.
Customer description:
It includes customer code, name, address and phone number. This information may be used for keeping the records of the customer for any emergency or for any other kind of information.
Reservation description:
It includes customer details, code number, flight number, date of booking, date of travel.

## Models

### Airports

| Field | Type | Description |
| :---:   | :---: | :---: |
| airport code | String | Show air ports code |
| airport name | String | Show air ports name |
| city | String | Show air ports city |
| country | String | Show air ports country |


### Flights

| Field | Type | Description |
| :---:   | :---: | :---: |
| flight number | String | Show flight number |
| aircraft | String | Show aircraft |
| departure airport | String | Show departure airport |
| arrival airport | String | Show arrival airport |
| departure time | Date | Show departure time |
| arrival time | Date | Show arrival time |
| price | String | Show price |
| seats available | Array | Show seats available |
| airline | String | Show airline |

### Aircrafts

| Field | Type | Description |
| :---:   | :---: | :---: |
| aircraft | String | Show aircraft |
| firstclass_seats | Number | Show first class seats |
| business_seats | Number | Show business seats |
| economy_seats | Number | Show economy seats |

### Users

| Field | Type | Description |
| :---:   | :---: | :---: |
| username | String | Show username |
| password | String | Show password |
| email | String | Show email |
| phone number | String | Show phone number |
| address | String | Show address |
| city | String | Show user city |
| country | String | Show user country |
| role | String | Show user role |


### Bookings

| Field | Type | Description |
| :---:   | :---: | :---: |
| booking number | String | Show booking number |
| flight number | String | Show flight number |
| username | String | Show username |
| date of booking | Date | Show date of booking |
| date of travel | Date | Show date of travel |
| seat number | String | Show seat number |
| class | String | Show class |
| price | String | Show price |


## Routes

### Airports

| Method | Route | Description |
| :---:   | :---: | :---: |
| GET | /airports | Show all airports |
| GET | /airports/:airport_code | Show airport by airport code |
| POST | /airports | Create new airport |
| PUT | /airports/:airport_code | Update airport by airport code |
| DELETE | /airports/:airport_code | Delete airport by airport code |




