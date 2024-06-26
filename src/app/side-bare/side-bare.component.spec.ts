import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBareComponent } from './side-bare.component';

describe('SideBareComponent', () => {
  let component: SideBareComponent;
  let fixture: ComponentFixture<SideBareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideBareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
