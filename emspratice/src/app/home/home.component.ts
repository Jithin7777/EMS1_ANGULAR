import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../appService/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('^[a-zA-Z. ]+$')]], // Correct pattern
    password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]] // Correct pattern
  });

  constructor(
    private fb: FormBuilder,
    private service: AdminService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  login() {
    // Check if the form is valid before proceeding
    if (this.loginForm.valid) {
      // Retrieve form values safely
      const path = this.loginForm.value;
      const uname = path.username || ''; // Use empty string as default
      const psw = path.password || '';   // Use empty string as default

      // Call the login service
      this.service.login().subscribe({
        next: (result: any) => {
          // Check if the result contains any users
          if ( result.length > 0) {
            // Attempt to find the user
            const user = result.find((u: any) => u.username === uname);

            if (user) {
              // Verify password match
              if (user.password === psw) {
                alert('Login success');
                // Reset form data after success
                this.loginForm.reset();
                localStorage.setItem('username',uname)
                // Navigate to the dashboard
                this.route.navigateByUrl('dashboard');
              } else {
                alert('Incorrect password');
              }
            } else {
              alert('Incorrect username');
            }
          } else {
            alert('No users found');
          }
        },
        error: (error: any) => {
          // Log the error and provide a user-friendly message
          console.error('Error:', error);
          alert('An error occurred during login. Please try again later.');
        }
      });
    } else {
      alert('Form is not valid. Please check your input.');
    }
  }

  hide = signal(true); 

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide()); 
    event.stopPropagation();  
  }
}
