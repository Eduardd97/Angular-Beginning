import { Component } from '@angular/core';
import { UserType } from '../../types';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {

  users: Array<UserType> = [
    { email: 'email@gmail.com', password: '12345' },
    {
      email: 'email@gmail2.com',
      password: '12345',
    },
    {
      email: 'email@gmail3.com',
      password: '12345',
    },
    {
      email: 'email@gmail4.com',
      password: '12345',
    },
  ];

  selectedUser: UserType | null = this.users[0];

  onUserClick(user: UserType) {
    const userIndex = this.users.findIndex((u) => u.email === user.email);
    if (userIndex !== -1) this.selectedUser = this.users[userIndex];
  }

  deleteUser(user: UserType) {
    const index = this.users.findIndex(u => u.email === user.email);
    if (index !== -1) {
      this.users.splice(index, 1);
      if (this.selectedUser && this.selectedUser.email === user.email) {
        this.selectedUser = this.users.length ? this.users[0] : null;
      }
    }
  }
}




// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { UserType } from '../../types';

// @Component({
//   selector: 'app-users',
//   standalone: true,
//   imports: [CommonModule], // Добавляем CommonModule в раздел imports
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.scss'],
// })
// export class UsersComponent {

//   users: Array<UserType> = [
//     { email: 'email@gmail.com', password: '12345' },
//     {
//       email: 'email@gmail2.com',
//       password: '12345',
//     },
//     {
//       email: 'email@gmail3.com',
//       password: '12345',
//     },
//     {
//       email: 'email@gmail4.com',
//       password: '12345',
//     },
//   ];

//   selectedUser: UserType | null = this.users[0];

//   onUserClick(user: UserType) {
//     const userIndex = this.users.findIndex((u) => u.email === user.email);
//     if (userIndex !== -1) this.selectedUser = this.users[userIndex];
//   }

//   deleteUser(user: UserType) {
//     this.users = this.users.filter(u => u.email !== user.email);
//     // Если удалённый пользователь был выбранным, сбросить selectedUser
//     if (this.selectedUser && this.selectedUser.email === user.email) {
//       this.selectedUser = this.users.length ? this.users[0] : null;
//     }
//   }
// }
