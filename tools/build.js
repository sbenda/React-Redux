import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV ='production';

webpack(webpackConfig).run((err, stats) => {
    if(err){
        console.log(err.bold.red);
        return 1;
    }

    const jsonStr = stats.toJson();

    if(jsonStr.hasErrors){
        return jsonStr.error.map( error => console.log(error.red));
    }


    if(jsonStr.hasWarnings){
        jsonStr.warning.map( warning => console.log(warning.yellow));
    }

    console.log(`webpack stats : ${stats}`);

    return 0;
});