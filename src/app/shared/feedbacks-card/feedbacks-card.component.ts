import { Component, Input } from '@angular/core';
import { feedbacks } from '../../models/feedbacks.model';

@Component({
  selector: 'app-feedbacks-card',
  templateUrl: './feedbacks-card.component.html',
  styleUrl: './feedbacks-card.component.css'
})
export class FeedbacksCardComponent {

@Input ('item')
  item!:feedbacks;
}
