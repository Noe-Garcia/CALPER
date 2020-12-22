import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalculadorPage } from './calculador.page';

describe('CalculadorPage', () => {
  let component: CalculadorPage;
  let fixture: ComponentFixture<CalculadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
