import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/AppState';
import { hide, show } from 'src/app/store/loading/Loading.Action';
import { loadingReducer } from 'src/app/store/loading/Loading.reducers';
import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
 let store:Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      imports: [IonicModule.forRoot(), StoreModule.forRoot([]), StoreModule.forFeature("loading",loadingReducer)]
    }).compileComponents();

    store=TestBed.get(Store);
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should hide loading component when it is not loading', () => {
    const compiled= fixture.nativeElement;
    store.dispatch(hide());
    fixture.detectChanges();
    expect(compiled.querySelected(".backdrop")).toBeNull();
  });
  it('should show loading component when it is loading', () => {
    const compiled= fixture.nativeElement;
   store.dispatch(show());
   fixture.detectChanges();
    expect(compiled.querySelected(".backdrop")).not.toBeNull();
  });
});
