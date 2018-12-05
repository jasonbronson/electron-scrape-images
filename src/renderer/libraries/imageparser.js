//https://www.npmjs.com/package/crawler
import Crawler from 'crawler';
import store from '../store';
const {ipcMain} = require('electron');

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

        
        //get the url to parse
        this.uri = store.getters.getUri.toString();
        var imageList= [];
        var c = new Crawler({
            maxConnections : 10,
            // This will be called for each crawled page
            callback : (error, res, done) => {
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
                    //var imageParser = new imageparser();
                    //imageParser.downloadImageList(imageList);
                    this.downloadImageList(imageList);
            
                }
                done();
            }
        });

        // Queue URLs with custom callbacks & parameters
        c.queue([{
            uri: this.url,
            jQuery: 'cheerio',
            strictSSL: false
        }]);


    }
    downloadImageList(imageList){
        
        var a;
        for(a=0; a < imageList.length; a++){
            this.dir = store.getters.getDirectoryPath.toString();
            var fileURL = imageList[a].toString();
            var filePath = this.dir + '/' + fileURL.substring(fileURL.lastIndexOf('/') + 1);
            
            //Remove query strings from filename
            var pattern = new RegExp("/\?/i");
            if(pattern.test(filePath)){
                //console.log('******' + filePath);
                //filePath = filePath.substring(0, filePath.lastIndexOf('?') );
            }
            console.log(filePath);
            this.downloadFile(fileURL, filePath);
        }
    }
    downloadFile(file_url , targetPath){
        console.log(file_url + ' ' + targetPath);
        // Save variable to know progress
        var received_bytes = 0;
        var total_bytes = 0;
        var request = require('request');
        var fs = require('fs');

        var req = request({
            "rejectUnauthorized": false, 
            "followRedirect": true,
            method: 'GET',
            uri: file_url
        });
    
        var out = fs.createWriteStream(targetPath);
        req.pipe(out);
    
        req.on('response', function ( data ) {
            // Change the total bytes value to get progress later.
            total_bytes = parseInt(data.headers['content-length' ]);
        });
    
        req.on('data', function(chunk) {
            // Update the received bytes
            received_bytes += chunk.length;   
            //this.showProgress(received_bytes, total_bytes);
        });
    
        req.on('end', function() {
            //alert("File succesfully downloaded");
        });
    }
    
    showProgress(received,total){
        var percentage = (received * 100) / total;
        console.log(percentage + "% | " + received + " bytes out of " + total + " bytes.");
    }



}


