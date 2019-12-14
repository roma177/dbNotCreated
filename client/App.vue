<template>
  <v-app>
    <ProjectInfo />
    <StickyNav />
    <FixedNav />
    <v-content>
      <v-container fluid>
        <router-view :key="$route.path" />
      </v-container>
    </v-content>
    <PageFooter />
  </v-app>
</template>
<script>
import PageFooter from "@components/PageFooter";
import StickyNav from "@components/StickyNav";
import FixedNav from "@components/FixedNav";
import ProjectInfo from "./components/ProjectInfo";
export default {
  components: {
    ProjectInfo,
    PageFooter,
    StickyNav,
    FixedNav
  }
};
</script>
