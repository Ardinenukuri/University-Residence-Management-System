// Base class for Residence
class Residence {
    constructor(name, address, isOccupied) {
      this.name = name;
      this.address = address;
      this.isOccupied = isOccupied;
    }
  }
  
  // Class for DormRoom, extends Residence
  class DormRoom extends Residence {
    constructor(name, address, isOccupied, size) {
      super(name, address, isOccupied);
      this.size = size; 
    }
  
    calculateRent() {
      return this.size * 10; 
    }
  }
  
  // Class for Apartment, extends Residence
  class Apartment extends Residence {
    constructor(name, address, isOccupied, numberOfBedrooms) {
      super(name, address, isOccupied);
      this.numberOfBedrooms = numberOfBedrooms;
    }
  
    calculateRent() {
      return this.numberOfBedrooms * 300; 
    }
  }
  
  // Class for Student
  class Student {
    constructor(name, studentID, gender, residence) {
      this.name = name;
      this.studentID = studentID;
      this.gender = gender;
      this.residence = residence;
    }
  
    assignResidence(residence) {
      this.residence = residence;
      residence.isOccupied = true;
    }
  }
  
  // Class for MaintenanceRequest
  class MaintenanceRequest {
    constructor(description, student, status = 'submitted', employee = null) {
      this.description = description;
      this.student = student;
      this.status = status;
      this.employee = employee;
    }
  
    assignEmployee(employee) {
      this.employee = employee;
      this.status = 'in progress';
    }
  
    completeRequest() {
      this.status = 'completed';
    }
  }
