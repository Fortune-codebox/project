<template>
    <div>
         <Navbar />

         
        <div class="container-fluid mt-4">
            <div class="row" >
                <div class="col-3" >
                    <Sidebar/>
                </div>
                <div class="col-9">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./layout.js"></script>
<style lang="scss" scoped>
  @import "layout";
</style>
