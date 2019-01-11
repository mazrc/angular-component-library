import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  grade = 0; // current rating - default to pass to the component
  maxRating = 5; // max rating - can be 5 or 10. Based on user convinence
  showRatingCounter = true; // to show the rating state to the user like 2 out of 5
  myRating: number; // To get the selected rating from the component once user selects

  selectedRating(rate: number) {
    console.log('your rating is');
    console.log(rate);
    this.myRating = rate;
  }
}
