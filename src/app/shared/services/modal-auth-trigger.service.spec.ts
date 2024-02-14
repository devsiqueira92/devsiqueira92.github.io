import { TestBed } from '@angular/core/testing';
import { AuthModalComponent } from '@app-shared/components/modals/auth/auth-modal.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalAuthTriggerService } from './modal-auth-trigger.service';

describe('ModalAuthTriggerService', () => {
    let service: ModalAuthTriggerService;
    let nzModalService: jasmine.SpyObj<NzModalService>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: NzModalService,
                    useValue: jasmine.createSpyObj<NzModalService>(['create']),
                },
            ],
        });
        service = TestBed.inject(ModalAuthTriggerService);
        nzModalService = TestBed.inject(NzModalService) as jasmine.SpyObj<NzModalService>;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('- create should call create of NzModalService with AuthModalComponent as content', () => {
        expect(nzModalService.create).not.toHaveBeenCalled();
        service.create();
        expect(nzModalService.create).toHaveBeenCalledWith({
            nzContent: AuthModalComponent,
        });
    });
});
