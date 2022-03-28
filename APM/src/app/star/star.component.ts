import { EventEmitter, Component, Input, OnChanges, Output} from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating = 0;
    cropWidth = 75;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`Đánh giá của sản phẩm này là ${this.rating} sao`);
        console.log(`Đánh giá ${this.rating} đã được chọn`);
    }
}
