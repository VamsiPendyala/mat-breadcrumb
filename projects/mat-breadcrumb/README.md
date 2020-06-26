# mat-breadcrumb


mat-breadcrumb is a Angular Material module for [Angular](https://angular.io/) that generates a Angular Material breadcrumb for any page of your application. It is based on the built-in [Angular router](https://angular.io/docs/ts/latest/guide/router.html).



# Usage

## Getting started

1.Install `mat-breadcrumb` via npm:

```bash
npm i mat-breadcrumb
```


2.Import the `MatBreadcrumbModule` within your app:

```js
import {MatBreadcrumbModule} from "mat-breadcrumb";

@NgModule({
  imports: [
    MatBreadcrumbModule,
  ],
})
```

3.Add a name to your route by adding a `breadcrumb` property in the route's `data`:

```js
const routes: Routes = [
  {
    path: 'page1/:pageOneID',
    component: PageComponent,
    data: {
      title: 'page1',
      breadcrumb: [
        {
          label: 'Page1',
          url: ''
        }
      ]
    },
  },
  {
    path: 'page1/:pageOneID/page2/:pageTwoID',
    component: Page2Component,
    data: {
      title: 'page2', 
      breadcrumb: [
        {
          label: 'page {{pageOneID}}',// pageOneID Parameter value will be add 
          url: '/page1/:pageOneID'
        },
        {
          label: 'page {{pageTwoID}}',// pageTwoID Parameter value will be add 
          url: ''
        }
      ]
    },
  },
  {
    path: 'page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID',
    component: Page3Component,
    data: {
      title: 'page3',
      breadcrumb: [
        {
          label: 'page1',
          url: '/page1/:pageOneID'
        },
        {
          label: '{{dynamicText}} page', // If "dynamicText" is not parameter , should be set value  using MatBreadcrumbService, More info please check the 5th point.
          url: 'page1/:pageOneID/page2/:pageTwoID'
        },
        {
          label: '{{customText}}', // If "customText" is not parameter , should be set value  using MatBreadcrumbService, More info please check the 5th point.
          url: ''
        }
      ]
    },
  },
];
```

4.Put the `lib-mat-breadcrumb`'s selector within your template:

```html
<lib-mat-breadcrumb></lib-mat-breadcrumb>
<router-outlet></router-outlet>
```

## Input parameters

| Input | Required | Details |
| ---- | ---- | ---- |
| bgColor | Optional | To set background-color for  Breadcrumb, default #eee |
| fontSize | Optional | To set size of  Breadcrumb,  default 18px |
| fontColor | Optional | To set color of  Breadcrumb,  default #0275d8 |
| lastLinkColor | Optional | To set color of last link  Breadcrumb,  default #000 |
| symbol | Optional | To set symbol of Breadcrumb,  default / |



5.Set the value using `MatBreadcrumbService`

```js
import { MatBreadcrumbService } from 'ng7-mat-breadcrumb';
constructor(private MatBreadcrumbService: MatBreadcrumbService) { }
ngOnInit() {
  const breadcrumb =  {customText: 'This is Custom Text', dynamicText: 'Level 2 '};
  this.ng7MatBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }
```

6. Update the Breadcrumb  using `MatBreadcrumbService`


```js
import { MatBreadcrumbService } from 'ng7-mat-breadcrumb';
constructor(private MatBreadcrumbService: MatBreadcrumbService) { }

  updateBreadcrumb(): void {
    const breadcrumbs  =  [
      {
        label: 'page {{pageOneID}}',
        url: '/page1/:pageOneID'
      },
      {
        label: 'page {{pageTwoID}}',
        url: 'page1/:pageOneID/page2/:pageTwoID'
      },
      {
        label: 'page {{pageThreeID}}',
        url: 'page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID'
      },
      {
        label: 'Update Breadcrumb',
        url: ''
      }
    ];
    this.MatBreadcrumbService.updateBreadcrumb(breadcrumbs);
  }
```


## Questions & Issues

Report bugs/problems by creating an issue [creating an issue](https://github.com/VamsiPendyala/mat-breadcrumb)


## Contribute

 Pick one of the issues from the  [issue list](https://github.com/VamsiPendyala/mat-breadcrumb/issues) to get started.

## Developer

Developer: Vamsi Pendyala <vamsi.pendyala8@gmail.com>  


| Vamsi Pendyala | 
| ----------------- |
| ![Vamsi Pendyala][vamsip] |




## License


(The MIT License)

Copyright (c) 2020 Vamsi Pendyala <vamsi.pendyala8@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
