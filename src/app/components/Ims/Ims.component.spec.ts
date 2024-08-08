import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImsComponent } from './Ims.component';
import { FormsModule } from '@angular/forms';

describe('ItemsComponent', () => {
  let component: ImsComponent;
  let fixture: ComponentFixture<ImsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
