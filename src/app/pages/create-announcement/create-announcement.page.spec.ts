import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateAnnouncementPage } from './create-announcement.page';

describe('CreateAnnouncementPage', () => {
  let component: CreateAnnouncementPage;
  let fixture: ComponentFixture<CreateAnnouncementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAnnouncementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAnnouncementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
