export class User {
  constructor(
    public username: string,
    public password: string,
    public id?: number
  ) {
    if (!username) {
      throw new Error("User must have username");
    }

    if (!password) {
      throw new Error("User must have password");
    }
    //more validations according to the policies
  }
  getUsername(): string {
    return this.username;
  }
  getPassword(): string {
    return this.password;
  }
  getId(): number {
    return this.id ? this.id : 0;
  }

  setId(num: number) {
    this.id = num;
  }
}
