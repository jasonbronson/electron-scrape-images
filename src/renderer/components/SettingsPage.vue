<template>
      
     <div class="col-md-9 ml-sm-auto col-lg-10 px-4 pt-5">
    <!-- Page Content  -->
    <div class="content">
        <div class="container-fluid">
            <div class="card">
                <div class="card-heading">
                    <h3 class="card-title"> <font-awesome-icon icon="cogs" /> Settings Page </h3>
                </div>
                <div class="card-body">

                    <form id="edit-project" class="form-horizontal col-md-12 fv-form fv-form-bootstrap" role="form" data-fv-framework="bootstrap" data-fv-icon-valid="glyphicon glyphicon-ok" data-fv-icon-invalid="glyphicon glyphicon-remove" data-fv-icon-validating="glyphicon glyphicon-refresh" novalidate="novalidate">
                    
                    <div class="form-group">
                        <label class="control-label col-sm-5" for="inputProjectName"> Test </label>
                        <div class="col-sm-7">
                            <input class="input-large" name="test" placeholder="Enter Project Name" type="text" value="">
                        </div>
                    </div>
                  <div class="form-group">
                        <label class="control-label col-sm-5" for="inputProjectName"> Test </label>
                        <div class="col-sm-7">
                            <input class="input-large" name="test" type="text" value="">
                        </div>
                    </div>
                  <div class="form-group">
                        <label class="control-label col-sm-5" for="inputProjectName"> Test </label>
                        <div class="col-sm-7">
                            <input class="input-large" name="test" type="text" value="">
                        </div>
                    </div>

                   
                
                        <div class="form-group">
                            <div class="col-sm-offset-6 col-sm-2">
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
  export default {
    name: 'setup-page',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  
</style>
