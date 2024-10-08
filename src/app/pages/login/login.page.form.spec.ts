import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";

describe('LoginPageForm', () => {

  let loginPageForm: LoginPageForm;
  let form: FormGroup

  it('should create login form empty', () => {
    const loginPageForm = new LoginPageForm(new FormBuilder());
    const form = loginPageForm.createForm();

    expect(form).not.toBeNull();
    expect(form.get('email')).not.toBeNull();
    expect(form.get('email')?.value).toEqual("");
    expect(form.get('email')?.valid).toBeFalsy('');
    expect(form.get('password')).not.toBeNull();
    expect(form.get('password')?.value).toEqual("");
    expect(form.get('password')?.valid).toBeFalsy('');
  })

  it('should have email invalid if email is not valid', () => {
form.get('email')?.setValue('invalid email')

expect(form.get('email')?.valid).toBeFalsy('');
  })

  it('should have email valid if email is valid', () => {
    form.get('email')?.setValue('valid@mail.com');
    expect(form.get('email')?.valid).toBeTruthy('');
})

  it('should have a valid form', () => {
    form.get('email')?.setValue('valid@mail.com');
    form.get('password')?.setValue('anyPAssword');
    expect(form.valid).toBeTruthy('');
})

})


