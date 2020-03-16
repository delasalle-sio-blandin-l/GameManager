import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.scss']
})
export class GameActionsComponent implements OnInit {

  @Output()
  private readonly follow = new EventEmitter<void>();

  @Output()
  private readonly share = new EventEmitter<void>();

  @Output()
  private readonly buy = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onFollow(event: MouseEvent) {
    event.preventDefault();
    this.follow.emit();
  }

  onShare(event: MouseEvent) {
    event.preventDefault();
    this.share.emit();
  }

  onBuy(event: MouseEvent) {
    event.preventDefault();
    this.buy.emit();
  }
}
