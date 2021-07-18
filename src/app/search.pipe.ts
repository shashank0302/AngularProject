import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], searchRank:string): any[] {
    if(!list || !searchRank){
      return list;
    }
    else{
      
      return list.filter(listdata=>listdata.rank.indexOf(searchRank)!== -1)
    }
  }

}
