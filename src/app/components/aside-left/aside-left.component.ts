import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.css'],
})
export class AsideLeftComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}
  gotoItems() {
    console.log('gotoItems');

      // Pass along the hero id if available
       // so that the HeroList component can select that item.
        this.router.navigate(['/login']); }
}
