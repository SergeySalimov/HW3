// import { of } from 'rxjs';
// import { distinct } from 'rxjs/operators';
//
// console.log('1');
//
// interface Person {
//   age: number,
//   name: string
// }
//
// of<Person>(
//     { age: 4, name: 'Foo'},
//     { age: 7, name: 'Bar'},
//     { age: 5, name: 'Foo'},
// ).pipe(
//     distinct((p: Person) => p.name),
// )
//     .subscribe(x => console.log(x));

// displays:
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }


// const x = 10;
// console.log(x);
//
// let str: number | string;
// str = 10;
// str = 'fh';
// let x1: number;
// x1 = 1;
//
// const list: number[] = [1, 2, 4];
// const list2: string[] = ['1', '2', '444'];
// const list3: ReadonlyArray<string> = ['1', '2', '444'];
//
// function sum(a: number , b: number): number {
//   return a + b;
// }
//
// console.log(sum(3, 5));
//
// let multCopy: (x: number, y: number) => number;

// error
// multCopy = 'sum';

function log(constrFn: Function) {
  console.log(constrFn);
}

function isLog(flag: boolean): Function {
  return flag ? log : () => {}
}

function addMethod(constructorFn: Function): void {
  constructorFn.prototype.showHTML = function () {
    const pre = document.createElement('pre');
    pre.innerHTML = JSON.stringify(this);
    document.body.append(pre);
  }
}

@isLog(true)
@addMethod
class User {
  constructor(public name: string, public age: number) {
    console.log(`I'm user: ${name} of ${age} years!`);
  }

}

const user: User = new User('Sergey', 22);
(user as any).showHTML();
