//class-movie

class movie{
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        if(rating == null){
            this.rating = 'pg';
        }
        else
        {
            this.rating = rating;
        }
    }
    getpg(array){
        var result = [];
        for(var i in array){
        if(array[i].rating =='pg')
        {
            result.push(array[i])
        }
       
    }
        return result;
    }

    }
var m1 = new movie('Irishman', 'abc', 'pg13');
var m2 = new movie('Raginibull', 'def');
var m3 = new movie('casino royale', 'eon productions', 'pg13')
var m4 = new movie('Infinity war', 'ghi', 'pg13');
var m5 = new movie('justice league', 'jkl');

console.log(m1)
console.log(m2)
console.log(m3)
var arr = [m1, m2, m3, m4, m5];

console.log(m1.getpg(arr))