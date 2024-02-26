export class User {
  constructor(name: string, gender: string, subType: string, status: string) {
    this.name = name;
    this.gender = gender;
    this.subtype = subType;
    this.status = status;
  }
  name: string;
  gender: string;
  subtype: string;
  status: string;
}
