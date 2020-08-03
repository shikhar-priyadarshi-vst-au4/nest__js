export class RegisterUserDTO {
  readonly fullname: string;
  readonly emailid: string;
  readonly password: string;
  readonly login4code: number;
}
export class LoginUserDTO {
  readonly emailid: string;
  readonly password: string;
}
