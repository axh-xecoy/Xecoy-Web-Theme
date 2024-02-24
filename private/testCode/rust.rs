use std::io::{stdin, stdout};

const ABDE:i32=10;
static NUM:u32=5;

fn main() {
    let mut a = 10;
    let b = "Hello World";
    let student: Student = Student {
        name: "".to_string(),
        age_i32: 19,
        age_i64: 19,
        typer: true,
        age_u8: false,
        age_f8: 19,
    };
    a = 11;

    student.age_f8;

    let f= File::open("hello.txt");

    let d=Book::Value;
    match f{
        Ok(value)=>{
            
        },
        Err(err)=>{

        }
    }
    
    let book = Book::Papery(1001);

    let bookp = Book::Electronic { url: 123 };

    match book {
    Book::Papery(i) => {
        println!("{}", i);
    },
    Book::Electronic { url } => {
        println!("{}", url);
    }
    Book::Value => todo!(),
    }
    
}

enum Book {
    Value,
    Papery(u32),
    Electronic {url: String},
}

struct Student {
    name: String,
    age_i32: i32,
    age_i64: i64,
    typer: bool,
    age_u8: u8,
    age_f8: f32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn get_name(a: i32) -> String {
    return String::from("name");
}