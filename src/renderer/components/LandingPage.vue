<template>
      
     <div class="col-md-9 ml-sm-auto col-lg-10 px-4 pt-5">
    <!-- Page Content  -->
    <div class="content">
        <div class="container-fluid">
            <div class="card">
                <div class="card-heading">
                    <h3 class="card-title"> Welcome to image parser {{ version }} </h3>
                </div>
                <div class="card-body">

                    <form id="edit-project" class="form-horizontal col-md-12 fv-form fv-form-bootstrap" role="form" data-fv-framework="bootstrap" data-fv-icon-valid="glyphicon glyphicon-ok" data-fv-icon-invalid="glyphicon glyphicon-remove" data-fv-icon-validating="glyphicon glyphicon-refresh" novalidate="novalidate">
                    
                    <div class="form-group">
                        <label class="control-label col-sm-5" for="inputUrl">URL to parse </label>
                        <div class="col-sm-7">
                            <input class="col-lg-12" name="url" placeholder="https://www.example.com" type="text" value="">
                        </div>
                    </div>
                  <div class="form-group">
                        <label class="control-label col-sm-5" for="input">Directory to save images </label>
                        <div class="col-sm-7">
                            <button type="button" @click="directory" class="btn btn-default ">Choose Directory</button>
                            <p>{{getDirectory}}**</p>
                        </div>
                    </div>
                  <hr>
                        <div class="form-group">
                            <div class="col-sm-offset-0 col-sm-2">
                                <button id="edit-project-save" type="button" class="btn btn-default ">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
   
</template>

<script>

const {dialog} = require('electron').remote
  export default {
    name: 'landing-page',
    data() {
      return {
        version: ".01"
      }
    },
    computed: {
      getDirectory () {
        console.log('******');
        console.log(this.$store.getDirectoryPath);
        return this.$store.getDirectoryPath
      }
    },
    methods: {
      directory () {
      
        dialog.showOpenDialog( {
          properties: ['openDirectory']
        },
        (directory) => {
          if(directory === undefined){
            console.log("no dir selected");
          }else{
            //console.log(directory);
            this.$store.commit('setDirectoryPath', directory);
          }
        })
        
      },
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
