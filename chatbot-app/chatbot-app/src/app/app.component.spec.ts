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
    component.num1 = 40;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(60);
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

   it('should correctly add two positive numbers', () => {
    component.num1 = 70;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(90);
  });
  
 it('should correctly add one positive and negative numbers', () => {
    component.num1 = 40;
    component.num2 = -20;
    component.addNumbers();
    expect(component.sum).toBe(20);
  });

   it('should correctly add one positive and negative numbers', () => {
    component.num1 = 40;
    component.num2 = -20;
    component.addNumbers();
    expect(component.sum).toBe(20);
  });

  it('should correctly add one positive and negative numbers', () => {
    component.num1 = 40;
    component.num2 = -20;
    component.addNumbers();
    expect(component.sum).toBe(20);
  });

   it('should correctly add one positive and negative numbers', () => {
    component.num1 = 5000;
    component.num2 = -200;
    component.addNumbers();
    expect(component.sum).toBe(300);
  });

  it('should correctly add 2 pos', () => {
    component.num1 = 500;
    component.num2 = 200;
    component.addNumbers();
    expect(component.sum).toBe(700);
  });

  //adding 2 unit test cases
  it('should correctly add one positive and negative numbers', () => {
    component.num1 = 5000;
    component.num2 = -200;
    component.addNumbers();
    expect(component.sum).toBe(300);
  });

  it('should correctly add 2 pos', () => {
    component.num1 = 500;
    component.num2 = 200;
    component.addNumbers();
    expect(component.sum).toBe(700);
  });

    it('should correctly add 2 pos', () => {
    component.num1 = 300;
    component.num2 = 200;
    component.addNumbers();
    expect(component.sum).toBe(500);
  });

  it('should correctly add 2 pos', () => {
    component.num1 = 2;
    component.num2 = 1;
    component.addNumbers();
    expect(component.sum).toBe(3);
  });

  it('should correctly add 2 pos', () => {
    component.num1 = 20;
    component.num2 = 10;
    component.addNumbers();
    expect(component.sum).toBe(30);
  });

   it('should correctly add one positive and negative numbers', () => {
    component.num1 = 40;
    component.num2 = -20;
    component.addNumbers();
    expect(component.sum).toBe(20);
  });

  //adding a new test case
  it('should correctly add one positive and negative numbers', () => {
    component.num1 = 40;
    component.num2 = -20;
    component.addNumbers();
    expect(component.sum).toBe(20);
  });


  it('should correctly add one positive and negative numbers', () => {
    component.num1 = 40;
    component.num2 = -20;
    component.addNumbers();
    expect(component.sum).toBe(20);
  });
  
});

