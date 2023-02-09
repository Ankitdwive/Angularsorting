import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any,searchh: any): any {
    return value.filter(function(search:any){
return search.sname.toUpperCase().indexOf(searchh.toUpperCase())>-1
    });
  }

}
