<template>
    <aside>
        <h3> <b>employee</b> </h3>
         <div class="nav-side">
             <!-- list-group-flush -->
            <b-navbar-nav id="sidebar-wrapper" class="list-group">
             <b-nav-item :to="{name: 'employees-overview'}" class="links">
                <i class="fa fa-history"></i>
                <span class="px-3"> <img src="@/assets/first.png" style="width: 3em;" alt=""> All Employees</span>
                <i class="fa fa-caret-down"></i>
            </b-nav-item>

            <span class="mt-2 pl-4 top-links"> <small>PROJECT</small> </span>

            <b-nav-item class="links pl-4">
                <i class="fa fa-history"></i>
                <span class="px-3">Arena Sport</span>
                <i class="fa fa-caret-down"></i>
            </b-nav-item>

            <b-nav-item class="links pl-4">
                <i class="fa fa-history"></i>
                <span class="px-3">Dstv</span>
                <i class="fa fa-caret-down"></i>
            </b-nav-item>

            <b-nav-item class="links pl-4">
                <i class="fa fa-history"></i>
                <span class="px-3">Seafood Mall</span>
                <i class="fa fa-caret-down"></i>
            </b-nav-item>

            <b-nav-item class="links pl-4">
                <i class="fa fa-history"></i>
                <span class="px-3">FireStar</span>
                <i class="fa fa-caret-down"></i>
            </b-nav-item>

             <b-nav-item class="links pl-4">
                <i class="fa fa-history"></i>
                <span class="px-3">Zeta Bank</span>
                <i class="fa fa-caret-down"></i>
            </b-nav-item>


            </b-navbar-nav>
        </div>
    </aside>
</template>

<script src="./sidebar.js">
</script>

<style lang="scss">
 @import './sidebar'
</style>