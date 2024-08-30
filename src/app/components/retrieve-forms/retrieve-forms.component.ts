import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/model/Form';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-retrieve-forms',
  templateUrl: './retrieve-forms.component.html',
  styleUrls: ['./retrieve-forms.component.css']
})
export class RetrieveFormsComponent implements OnInit {
  groupedForms: { [userKey: string]: { userName: string, userEmail: string, forms: Form[] } } = {}; // Object to store grouped forms
  errorMessage: string = ''; // To display potential errors

  constructor(private formService: FormServiceService) {}

  ngOnInit(): void {
    this.getForms();  // Fetch the forms on component initialization
  }

  // Method to retrieve all forms and group them by user
  getForms(): void {
    this.formService.retrieveAllForms().subscribe({
      next: (data) => {
        this.groupFormsByUser(data);  // Group forms by user
        console.log('Forms successfully retrieved and grouped!', this.groupedForms);
      },
      error: (error) => {
        this.errorMessage = 'Error retrieving forms';
        console.error(this.errorMessage, error);
      }
    });
  }

  // Method to group forms by user (name and email)
  groupFormsByUser(forms: Form[]): void {
    this.groupedForms = forms.reduce((acc, form) => {
      const userName = form.user?.username || 'Unknown User';
      const userEmail = form.user?.email || 'Unknown Email';
      const userKey = `${userName}-${userEmail}`;

      if (!acc[userKey]) {
        acc[userKey] = { userName, userEmail, forms: [] };
      }
      acc[userKey].forms.push(form);
      return acc;
    }, {} as { [userKey: string]: { userName: string, userEmail: string, forms: Form[] } });
  }

  // Method to get the keys for users from the groupedForms object
  getUserKeys(): string[] {
    return Object.keys(this.groupedForms);
  }

  // Method to format response based on question
  formatResponse(question: string, response: any): string {
    if (question === "Rate your overall experience") {
      return `${response}/5 `;
    } else if (question.startsWith("On a scale of 1 to 10")) {
      return `${response}/10`;
    }
    return response;
  }
}
