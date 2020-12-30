<template>
 <div class="admin">
     <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <a href="#">VUE-SHOP</a>
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header">
                    <div class="user-pic">
                        <img class="img-responsive img-rounded" src="/img/user.png" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">Perry
                            <strong>Bates</strong>
                        </span>
                        <span class="user-role"> {{email}} </span>

                    </div>
                </div>
                <!-- sidebar-search  -->
                <div class="sidebar-item sidebar-search">
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search...">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                   
                    <ul>
                        
                            <li>
                                <router-link to="/admin/overview">
                                    <span>Overview</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/admin/products">
                                    <span>Products</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/admin/orders">
                                    <span>Orders</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/admin/profile">
                                    <span>Profile</span>
                                </router-link>
                            </li>
                            <li>
                                <a href="#">
                                    
                                    <span>Logout</span>
                                </a>
                            </li>
                    </ul>
                </div>
               
            </div>
            
           
        </nav>

        <!-- page-content  -->
        <main class="page-content">
            <router-view/>
        </main>
        <!-- page-content" -->
    </div>
 </div>

</template>

<script>
// @ is an alias to /src

// import Hero from "@/components/Hero.vue";



export default {
  name: 'admin',
  components: {
    // Hero
    
  }
}
</script>
