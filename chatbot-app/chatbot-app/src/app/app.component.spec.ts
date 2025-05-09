/*import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'chatbot-app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('chatbot-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, chatbot-app');
  });




  it('should correctly add two positive numbers', () => {
    component.num1 = 10;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(30);
  });
  
  it('should correctly add a positive and a negative number', () => {
    component.num1 = 10;
    component.num2 = -5;
    component.addNumbers();
    expect(component.sum).toBe(5);
  });
  
  it('should correctly add two negative numbers', () => {
    component.num1 = -10;
    component.num2 = -20;
    component.addNumbers();
    expect(component.sum).toBe(-30);
  });
  
  it('should correctly add decimal numbers', () => {
    component.num1 = 5.5;
    component.num2 = 4.5;
    component.addNumbers();
    expect(component.sum).toBe(10);
  });
  
  it('should correctly add zero', () => {
    component.num1 = 0;
    component.num2 = 0;
    component.addNumbers();
    expect(component.sum).toBe(0);
  });
  
});*/


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

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'chatbot-app' title`, () => {
    expect(component.title).toEqual('chatbot-app');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, chatbot-app');
  });

  it('should correctly add two positive numbers', () => {
    component.num1 = 10;
    component.num2 = 20;
    component.addNumbers();
    expect(component.sum).toBe(30);
  });

  it('should correctly add a positive and a negative number', () => {
    component.num1 = 10;
    component.num2 = -5;
    component.addNumbers();
    expect(component.sum).toBe(5);
  });

  it('should correctly add two negative numbers', () => {
    component.num1 = -10;
    component.num2 = -20;
    component.addNumbers();
    expect(component.sum).toBe(-30);
  });

  it('should correctly add decimal numbers', () => {
    component.num1 = 5.5;
    component.num2 = 4.5;
    component.addNumbers();
    expect(component.sum).toBe(10);
  });

  it('should correctly add zero', () => {
    component.num1 = 0;
    component.num2 = 0;
    component.addNumbers();
    expect(component.sum).toBe(0);
  });
});

