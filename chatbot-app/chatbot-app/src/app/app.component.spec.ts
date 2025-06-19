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

  it('should correctly add two negative numbers', () => {
    component.num1 = -10;
    component.num2 = -20;
    component.addNumbers();
    expect(component.sum).toBe(-30);
  });

  it('should correctly add decimal numbers', () => {
    component.num1 = 5.7;
    component.num2 = 7.5;
    component.addNumbers();
    expect(component.sum).toBe(10);
  });

  it('should correctly add decimal numbers', () => {
    component.num1 = 9;
    component.num2 = 7.5;
    component.addNumbers();
    expect(component.sum).toBe(16.5);
  });

    it('should correctly add decimal numbers', () => {
    component.num1 = 11;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(30);
  });

  it('should correctly add decimal numbers', () => {
    component.num1 = 11;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(30);
  });

  it('should correctly add decimal numbers', () => {
    component.num1 = 11;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(30);
  });

  it('should correctly add decimal numbers', () => {
    component.num1 = 11;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(30);
  });

   it('should correctly add decimal numbers', () => {
    component.num1 = 10;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(30);

  });
  
   it('should correctly add decimal numbers', () => {
    component.num1 = 10;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(30);

  });


  it('should correctly add decimal numbers', () => {
    component.num1 = 1;
    component.num2 = 1.2;
    component.addNumbers();
    expect(component.sum).toBe(2.2);

  });

 it('should correctly add decimal numbers', () => {
    component.num1 = 1;
    component.num2 = 1.2;
    component.addNumbers();
    expect(component.sum).toBe(2.2);

  });

   it('should correctly add decimal numbers', () => {
    component.num1 = 1;
    component.num2 = 1.2;
    component.addNumbers();
    expect(component.sum).toBe(2.2);

  });

    it('should correctly add decimal numbers', () => {
    component.num1 = 10;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(30);

  });

  it('should correctly add decimal numbers', () => {
    component.num1 = 10;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(30);

  });


   it('should correctly add decimal numbers', () => {
    component.num1 = 10;
    component.num2 = 40;
    component.addNumbers();
    expect(component.sum).toBe(50);
  });

  it('should correctly add decimal numbers', () => {
    component.num1 = 10;
    component.num2 = 40;
    component.addNumbers();
    expect(component.sum).toBe(50);
  });


  it('should correctly add decimal numbers', () => {
    component.num1 = 20;
    component.num2 = 40;
    component.addNumbers();
    expect(component.sum).toBe(60);
  });
  
});

