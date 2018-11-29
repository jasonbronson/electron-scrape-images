//https://www.npmjs.com/package/crawler
import Crawler from 'crawler';
import store from '../store'
export default class imageparser {

    constructor(){
        var Crawler = require("crawler");
        var url;
        var dir;
    }
    set uri(value){
        this.url = value;
    }
    get uri(){
        return this.url;
    }
    createNewProject(){
        console.log("parser");
    }
    runCrawl(){

        this.dir = store.getters.getDirectoryPath.toString();
        //get the url to parse
        this.uri = store.getters.getUri.toString();
        var imageList= [];
        var c = new Crawler({
            maxConnections : 10,
            // This will be called for each crawled page
            callback : function (error, res, done) {
                if(error){
                    console.log(error);
                }else{
                    var $ = res.$;
                    // $ is Cheerio by default
                    //a lean implementation of core jQuery designed specifically for the server
                    console.log('*' + $("title").text());
                    const cheerio = require('cheerio');
                    const $ = cheerio.load(res.body);
                    const url = res.options.uri;
                    $('img').each(function(i, elem) {
                        var src = $(this).attr('src');
                        //console.log(src);
                        
                        if (src.length > 0 ) {
                            if(!/^https?:\/\//i.test(src) && !/^data:image/i.test(src)){
                                src = url + src;
                                //console.log('**' + src);
                            }
                            imageList.push(src);
                        }
                        
                    });
                        
            
                }
                done();
            }
        });

        console.log(imageList);

        // Queue URLs with custom callbacks & parameters
        c.queue([{
            uri: this.url,
            jQuery: 'cheerio',
            strictSSL: false
        }]);


    }



}


