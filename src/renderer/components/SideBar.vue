<template>
  <!-- Sidebar  -->
    <nav class="col-md-2 d-none d-md-block sidebar">
        <div class="sidebar-header">
          <div class="col-md-8 title">Parser</div>
        </div>

        <ul class="nav flex-column">
            <li class="nav-item active">
              <router-link to="/dashboard" class="nav-link">
                  <font-awesome-icon icon="home" />
                  Home
              </router-link>
            </li>
           <!--li class="nav-item">
             <router-link to="/control" class="nav-link">
                  <font-awesome-icon icon="coffee" />
                  Empty
             </router-link>
            </li--> 
          <li class="nav-item">
                <router-link to="/settings" class="nav-link">
                  <font-awesome-icon icon="cogs" />
                  Settings
                </router-link>
            </li>   
        </ul>
    </nav>
</template>

<script>
export default {
  name: "SideBar"
};
</script>

<style scoped>
.sidebar{
  height: calc(100vh - 0px);
  position: fixed;
  z-index: 100;
  background-color: #1F2429;
  color: white;
  width: 200px;
  text-align: center;
}
.sidebar-header{
  margin-top:20px;
  margin-bottom:20px;
}
.sidebar-header .title{
  font-size: 16px;
}
.sidebar .nav-link {
  font-weight: 500;
}
.sidebar .nav-item {
  text-align: left;
  margin-left: -14px;
  margin-right: -15px;
}
.sidebar .nav-item a{
  color: #999999;
}
.sidebar .nav-item a:hover{
  color: white;
  background-color: #15264B;
}
.active a{
  color: white !important;
  background-color: #40537B;
}


</style>

