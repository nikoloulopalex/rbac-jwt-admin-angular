import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from '../auth.service';

import { AuthenticationComponent } from './authentication.component';

class RouterStub {
	navigateByUrl(url: string) {
		return url;
	}
}

describe('AuthenticationComponent', () => {
	let component: AuthenticationComponent;
	let fixture: ComponentFixture<AuthenticationComponent>;
	let form: DebugElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ FormsModule, HttpClientModule ],
			declarations: [ AuthenticationComponent ],
			providers: [ {provide: Router, useClass: RouterStub}, AuthService ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AuthenticationComponent);
		component = fixture.componentInstance;
		form = fixture.debugElement.query(By.css('#form'));
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	
	it('should display error messages (required)', () => {
		const userRequired = fixture.debugElement.query(By.css('#user_required'));
		const passRequired = fixture.debugElement.query(By.css('#pass_required'));
		
		form.triggerEventHandler('submit', null);
		
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			expect(userRequired.nativeElement.innerText).toContain("Please enter your username.");
			expect(passRequired.nativeElement.innerText).toContain("Please enter your password.");
		});
	})

	it('should display error message (minlength)', () => {
		const userMinlength = fixture.debugElement.query(By.css('#pass_min'));
		
		fixture.debugElement.query(By.css('#password')).nativeElement.value = "12345";
		form.triggerEventHandler('submit', null);
		fixture.detectChanges();
		
		fixture.whenStable().then(() => {
			expect(userMinlength.nativeElement.innerText).toContain("Password must be at least 6 characters.");
		});
	})
});

