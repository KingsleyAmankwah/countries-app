import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountryDetailsComponent } from './country-details.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDetailsComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'country-name' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
