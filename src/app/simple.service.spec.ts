import { TestBed } from '@angular/core/testing';

import { SimpleService } from './simple.service';
import { ExpectedConditions } from 'protractor';
import { IterableDiffers } from '@angular/core';

describe('SimpleService', () => {
  let service:SimpleService
  //beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => {
    service = TestBed.get(SimpleService)
  });

  it('should be created', () => {
    //const service: SimpleService = TestBed.get(SimpleService);
    expect(service).toBeTruthy();
  });

  it('Should call sayHello', () => {
    let name = "Bob"
    let greeting = service.sayHello(name)
    
    expect(greeting).toBe(`Hello ${name}`)
  });

  it("Should call addNumber", (done) => {
    service.addNumbers(3,4).subscribe((result) => {
      expect(result).toBe(7)
      done()
    })
  });

});
