
module Hello{

    export const index:number=10;

    export let variable={
        dea:"Hello World"
    };

    export const run=():number =>{
        return 10;
    }
    
    export class App{

        constructor(){

        }

        app():number{
            return 0;
        }

    }
}

console.log(Hello.index)

console.log(
    Hello.variable.dea.replace("Hello","Thank you")
)

console.log(
    Hello.run()
)

document.getElementById("app")?.ATTRIBUTE_NODE;

document.getElementById("app")?.attributeStyleMap;

const App=10;

let app=100;

Hello.variable.dea

enum data{
    ACE,
    DCE,
    RUE
}

data.ACE

class Student{

    public name:string;
    public age:number;

    constructor(name:string,age:number) {

        this.name = name;
        this.age = age;
        
    }

}

const student:Student=new Student("小明",18);

if(student instanceof Student){

}

const array=[];

const object={

}

for(const value in object){

}

for(const value of array){

}

function runAction(...students:Student[]){

}

interface EatRice{
    eat():boolean;
    readonly app:string;
}

class SuperStudent extends Student implements EatRice{
    public lucky:number;

    constructor(name:string,age:number,lucky:number) {
        super(name,age);
        this.lucky=lucky;
    }
    public eat(): boolean {
        try{
            console.log(this.app);
            return true;
        }catch(err:unknown){
            return false;
        }
    }

    public app: string = "Lucky!";
}

let num = true;

const regex=/^[a-z]{10,20}script\n(?<=123|456)\b(10|20)$/g;

const listener=`
    Hello ${regex}
`;


/**@type {RegExp} */
const simpleRegex=/^[0-9]+\@[a-z]+\.[a-z]+$/g;