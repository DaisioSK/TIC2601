var url = require('url');
const {
    promisify,
} = require('util');

var db = require('./db');

const queryAsync = promisify(db.query).bind(db);

var goHome = function(){
    console.log('goHome');
}

var goToAbout = async (params) => {
    // console.log('goToAbout function body');
    // var params = url.parse(req.url, true).query;

    // console.log(params)
    // console.log(params.about)

    number = params.input_number
    
    const nameSQL = 'SELECT * FROM category';
    
    

    try {

        // name = queryAsync(nameSQL);
        name = await queryAsync(nameSQL);


        // var result = {
        //     number: number,
        //     name: name,
        //     result: number > 10 ? "yes" : "no"
        // };


        // res.render('mod1_about', {
        //     data: result
        // });

        return {
            number: number,
            result: number > 10 ? "yes" : "no",
            name: name
        }

    } catch (err) {
        console.log('SQL error', err);
        res.status(500).send('Something went wrong');
    }

    
}

function updateCategory(post){
    console.log(post)

    var updateTitleSQL = "UPDATE category ";
    for(const key in post){
        // console.log(key,": ", post[key]);
        
        // updateTitleSQL += `set ${key} = '${post[key]}', `;
        updateTitleSQL += "set "+key+" = '"+post[key]+"', ";
    }
    updateTitleSQL = updateTitleSQL.slice(0, updateTitleSQL.length-2);
    updateTitleSQL += " WHERE cat_id = 1;";
    console.log(updateTitleSQL);

    sts = queryAsync(updateTitleSQL);
    console.log(sts);

}

exports.goHome = goHome;
exports.goToAbout = goToAbout;
exports.updateCategory = updateCategory;