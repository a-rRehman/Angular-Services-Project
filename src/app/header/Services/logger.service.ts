export class LoggerService {
  LogMessage(name: string, status: string) {
    console.log(
      `A new user with name ${name} with ${status} Status is added to user list `
    );
  }
}
