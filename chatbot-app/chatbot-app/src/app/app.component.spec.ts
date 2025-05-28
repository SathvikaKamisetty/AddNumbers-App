import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: any;
  let component: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // 👈 Use declarations instead of imports
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  
   it('should correctly add two positive numbers', () => {
    component.num1 = 10;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(30);
  });

  it('should correctly add two positive numbers', () => {
    component.num1 = 50;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(70);
  });

   it('should correctly add two positive numbers', () => {
    component.num1 = 50;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(70);
  });

   it('should correctly add two positive numbers', () => {
    component.num1 = 70;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(90);
  });
  
it('should correctly add a positive and a negative number', () => {
  component.num1 = 50;
  component.num2 = -20;
  component.addNumbers();
  expect(component.sum).toBe(30);
});

it('should correctly add a positive and a negative number', () => {
  component.num1 = 30;
  component.num2 = 20;
  component.addNumbers();
  expect(component.sum).toBe(50);
});

it('should correctly add a positive and a negative number', () => {
  component.num1 = 30;
  component.num2 = 26;
  component.addNumbers();
  expect(component.sum).toBe(56);
});

it('should correctly add a positive and a negative number', () => {
  component.num1 = 50;
  component.num2 = -20;
  component.addNumbers();
  expect(component.sum).toBe(30);
});

it('should correctly add a positive and a negative number', () => {
  component.num1 = 50;
  component.num2 = -21;
  component.addNumbers();
  expect(component.sum).toBe(29);
});  

  it('should correctly add a positive and a negative number', () => {
  component.num1 = 50;
  component.num2 = -21;
  component.addNumbers();
  expect(component.sum).toBe(29);
});  

    it('should correctly add a positive and a negative number', () => {
  component.num1 = 50;
  component.num2 = -20;
  component.addNumbers();
  expect(component.sum).toBe(30);
});  
  
});

