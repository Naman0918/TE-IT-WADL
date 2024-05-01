import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegistrationComponent {
  constructor() { }

  onSubmit() {
    const formData = new FormData(document.getElementById('registrationForm') as HTMLFormElement);
    const password = formData.get('Password') as string;
    const pincode = formData.get('Pincode') as string;
    const mobilenum = formData.get('Mobilenum') as string;
    const dob = formData.get('DOB') as string;
    const namemain = formData.get('Name') as string;

    if (!/^[a-zA-Z\s]+$/.test(namemain)) {
      alert('Name should only contain alphabets and spaces');
      return;
    }

    if (password.length < 7) {
      alert('Password must be at least 7 characters long');
      return;
    }

    if (pincode.length !== 6) {
      alert('Pincode must be exactly 6 characters');
      return;
    }

    if (mobilenum.length !== 10) {
      alert('Phone number must be exactly 10 characters');
      return;
    }

    const dobDate = new Date(dob);
    const maxAllowedDate = new Date('2004-01-01');

    if (dobDate >= maxAllowedDate) {
      alert('Date of Birth cannot be after 2003-01-01');
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        alert('Your details have been submitted!');
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  populate(s1Id: string, s2Id: string) {
    const s1 = document.getElementById(s1Id) as HTMLSelectElement;
    const s2 = document.getElementById(s2Id) as HTMLSelectElement;

    s2.innerHTML = "";

    let optionArray: [string, string][] = [];

    switch (s1.value) {
      case "Pune":
        optionArray = [["", "Select"], ["maharashtra", "Maharashtra"]];
        break;
      case "Mumbai":
        optionArray = [["", "Select"], ["maharashtra", "Maharashtra"]];
        break;
      case "Nagpur":
        optionArray = [["", "Select"], ["maharashtra", "Maharashtra"]];
        break;
      case "Nashik":
        optionArray = [["", "Select"], ["maharashtra", "Maharashtra"]];
        break;
      case "Aurangabad":
        optionArray = [["", "Select"], ["maharashtra", "Maharashtra"]];
        break;
      case "Solapur":
        optionArray = [["", "Select"], ["maharashtra", "Maharashtra"]];
        break;
      case "Satara":
        optionArray = [["", "Select"], ["maharashtra", "Maharashtra"]];
        break;
      default:
        break;
    }

    optionArray.forEach(option => {
      const newOption = document.createElement("option");
      newOption.value = option[0];
      newOption.innerHTML = option[1];
      s2.options.add(newOption);
    });
  }
}
