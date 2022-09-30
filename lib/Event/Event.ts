export class Event {
  static listen(eventName: string, callback: (...args: any) => void): void {
    mp.events.add(eventName, callback);
  }
  static emitServer(eventName: string, ...args: any[]): void {
    mp.events.callRemote(eventName, ...args);
  }
}
