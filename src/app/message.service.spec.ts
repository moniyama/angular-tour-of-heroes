import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MessageService] });
    service = TestBed.inject(MessageService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('should add a message', () => {
    service.add("deu certo")
    service.add("deu não")
    service.add("deu certo de novo")
    expect(service.messages[0]).toBe("deu certo");
    expect(service.messages.length).toBe(3);
  });

  it('should clear the message array', () => {
    service.add("deu certo")
    service.add("deu certo de novo")
    service.clear()
    expect(service.messages.length).toBe(0);
    expect(service.messages).toEqual([]);
  });
});
