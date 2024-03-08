import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountryCardComponent } from './country-card.component';

describe('CountryCardComponent', () => {
  let component: CountryCardComponent;
  let fixture: ComponentFixture<CountryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryCardComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
