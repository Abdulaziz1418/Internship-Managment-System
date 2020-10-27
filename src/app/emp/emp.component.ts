import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  template: `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

  <div class="card-panel #fafafa grey lighten-5" id="signIn">
         
      <h6>Sign In</h6>
  
      <form id="checkbox">
          <p>
            <label>
              <input type="checkbox" />
              <span>Candidate</span>
            </label>
          </p>
          <p>
              <label>
                <input type="checkbox" />
                <span>Employer</span>
              </label>
            </p>
            </form>


            
  
      <br>
      <input  type="text" placeholder="User Name" id="user_name">
      <br>
      <input type="text" placeholder="Password" id="password">
      <br>
      <button class="#2196f3 blue btn" id="sign_in" type="submit">Sign In</button>
      <br>
      <p>Haven't an Account? </p> 
      <a  routerLink="/card2" target="_self">Sign Up</a>
  
  </div>
  `,
  styles: [`#signIn {
    background-color: red;
    width: 25%; 
  text-align: center;
  border: 0cm;
  margin: 3cm  12cm;


}
#checkbox {
    text-align: justify;
}`]
})
export class EmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
